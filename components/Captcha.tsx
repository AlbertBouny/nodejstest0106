"use client"

import { useEffect, useState } from "react"
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha"

interface CaptchaProps {
  onValidate: (isValid: boolean) => void
}

export function Captcha({ onValidate }: CaptchaProps) {
  const [userCaptcha, setUserCaptcha] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    loadCaptchaEnginge(6)
  }, [])

  const handleValidate = () => {
    if (validateCaptcha(userCaptcha)) {
      setError("")
      onValidate(true)
    } else {
      setError("Invalid captcha code")
      onValidate(false)
      loadCaptchaEnginge(6)
      setUserCaptcha("")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <LoadCanvasTemplate />
      </div>
      <div className="space-y-2">
        <input
          type="text"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
          placeholder="Enter captcha code"
        />
        <button
          type="button"
          onClick={handleValidate}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
        >
          Verify Captcha
        </button>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
} 