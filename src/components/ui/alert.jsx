// src/components/ui/alert.jsx
import * as React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-900",
        destructive:
          "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
        warning: "border-yellow-500/50 text-yellow-600 [&>svg]:text-yellow-600",
        info: "border-blue-500/50 text-blue-600 [&>svg]:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    {children}
  </div>
));

Alert.displayName = "Alert";
Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive', 'warning', 'info']),
  children: PropTypes.node.isRequired
};

const AlertTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h5>
));

AlertTitle.displayName = "AlertTitle";
AlertTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const AlertDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  >
    {children}
  </div>
));

AlertDescription.displayName = "AlertDescription";
AlertDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Alert, AlertTitle, AlertDescription };