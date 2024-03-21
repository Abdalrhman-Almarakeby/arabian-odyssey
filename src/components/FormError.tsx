type FormErrorProps = {
  children: React.ReactNode;
};

export function FormError({ children }: FormErrorProps) {
  return (
    <p className="rounded-lg border border-red-600 bg-red-200 px-2 py-2 text-sm font-semibold text-red-600 md:text-base lg:text-lg">
      {children}
    </p>
  );
}
