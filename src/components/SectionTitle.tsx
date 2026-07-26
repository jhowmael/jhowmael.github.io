import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="hidden sm:block h-px flex-1 bg-border" />
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center shrink-0">
        {children}
      </h2>
      <div className="hidden sm:block h-px flex-1 bg-border" />
    </div>
  );
};

export default SectionTitle;
