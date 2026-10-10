import { ReactNode } from "react";

type SectionTitleProps = {
  index: string;
  children: ReactNode;
};

const SectionTitle = ({ index, children }: SectionTitleProps) => {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b pb-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
