import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MacWindowProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

const MacWindow = ({ children, className }: MacWindowProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl glass-strong p-5 md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MacWindow;
