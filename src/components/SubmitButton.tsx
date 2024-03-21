import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  children: string;
  className?: string;
};

export default function SubmitButton({ children, className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "w-full rounded-lg bg-primary/90 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-black",
        className
      )}
    >
      {children}
    </button>
  );
}
