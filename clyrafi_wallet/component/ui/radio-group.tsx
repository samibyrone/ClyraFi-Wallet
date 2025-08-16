"use client"

import * as React from "react"
import { cn } from "@/lib/utils" // Assuming lib/utils exists and exports cn

const RadioGroupContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
} | null>(null)

export function useRadioGroup() {
  const context = React.useContext(RadioGroupContext)
  if (!context) {
    throw new Error("useRadioGroup must be used within a RadioGroupProvider")
  }
  return context
}

export function RadioGroup({
  className,
  value,
  onValueChange,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  )
}

export function RadioGroupItem({
  className,
  value,
  id,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { value: string; id: string }) {
  const { value: contextValue, onValueChange } = useRadioGroup()
  const checked = contextValue === value;

  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      id={id}
      aria-checked={checked}
      onClick={() => onValueChange(value)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

// In a real scenario, RadioGroupPrimitive would be imported from a library like shadcn/ui or @radix-ui/react-radio-group.
// For demonstration purposes, we'll create a mock implementation.
const RadioGroupPrimitive = {
  Root: ({ children, value, onValueChange, ...props }: React.ComponentPropsWithoutRef<"div"> & { value?: string; onValueChange?: (value: string) => void; }) => <div {...props}>{children}</div>,
  Item: React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
  >(({ children, ...props }, ref) => (
    <div ref={ref} role="radio" aria-checked={props['aria-checked']} {...props}>
      {children}
    </div>
  )),
  Indicator: ({ children, ...props }: React.ComponentPropsWithoutRef<"div">) => <div {...props}>{children}</div>,
};
