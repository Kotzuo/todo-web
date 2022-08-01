interface TextInputWithButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  dontResetValueOnEnter?: boolean;
  buttonIcon: React.ReactNode;
  onEnter?: (value: string) => void;
}
