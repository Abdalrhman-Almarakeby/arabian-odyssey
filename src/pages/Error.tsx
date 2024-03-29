import { HashLink } from "react-router-hash-link";

export function Error() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-[9rem] font-extrabold tracking-widest text-gray-900">404</h1>
      <div className="absolute rotate-12 rounded bg-primary px-2 text-sm">Page Not Found</div>
      <button className="mt-5">
        <a className="group relative inline-block bg-primary text-sm font-medium focus:outline-none focus:ring active:text-orange-500">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative block border border-current px-8 py-3">
            <HashLink to="/#">Go Home</HashLink>
          </span>
        </a>
      </button>
    </main>
  );
}
