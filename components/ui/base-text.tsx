interface IText {
  children: React.ReactNode;
  colors?: "primary" | "secondary" | "foreground" | "mutedForeground";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorsClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  foreground: "text-foreground",
  mutedForeground: "text-muted-foreground",
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const Text = ({
  children,
  className,
  colors = "foreground",
  size = "md",
}: IText) => {
  const classes = `${colorsClasses[colors]} ${sizeClasses[size]} ${
    className || ""
  }`;

  return <p className={classes}>{children}</p>;
};
