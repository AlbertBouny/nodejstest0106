declare module 'react-simple-captcha' {
  export function loadCaptchaEnginge(length: number): void
  export function validateCaptcha(value: string): boolean
  export function LoadCanvasTemplate(): JSX.Element
} 