export interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: any;
  errors: any;
}

export function UserAuthForm({
  className,
  isLoading,
  onSubmit,
  register,
  errors,
  ...props
}: UserAuthFormProps) {
  // ... existing code ...
} 