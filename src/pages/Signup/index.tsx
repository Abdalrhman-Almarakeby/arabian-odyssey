import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
                Your full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="John_doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-black"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                id="confirmPassword"
                value={formData.cpassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black transition focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary/90 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-black"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link className="font-medium text-primary hover:underline" to="/signin">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
