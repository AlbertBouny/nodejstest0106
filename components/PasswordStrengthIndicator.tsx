import { cn } from "@/lib/utils"
import { CheckCircle2, XCircle } from "lucide-react"

interface PasswordStrengthIndicatorProps {
  password: string
}

export function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const requirements = [
    {
      regex: /.{8,}/,
      text: "At least 8 characters",
    },
    {
      regex: /[A-Z]/,
      text: "At least one uppercase letter",
    },
    {
      regex: /[a-z]/,
      text: "At least one lowercase letter",
    },
    {
      regex: /[0-9]/,
      text: "At least one number",
    },
    {
      regex: /[^A-Za-z0-9]/,
      text: "At least one special character",
    },
  ]

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {requirements.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1 w-full rounded-full transition-all duration-300",
              password.length === 0
                ? "bg-muted"
                : requirements.slice(0, index + 1).every((req) =>
                  req.regex.test(password)
                )
                  ? "bg-primary"
                  : "bg-destructive"
            )}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {requirements.map((requirement, index) => {
          const isMet = requirement.regex.test(password)
          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-1",
                password.length === 0
                  ? "text-muted-foreground"
                  : isMet
                    ? "text-primary"
                    : "text-destructive"
              )}
            >
              {isMet ? (
                <CheckCircle2 className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              <span>{requirement.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
} 