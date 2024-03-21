import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/lib/hooks/useStorage";
import { useUser } from "@/context/UserContext";
import Loading from "@/components/Loading";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState<string[] | string>([]);
  const [loading, setLoading] = useState(false);
  const { setValue: setToken } = useLocalStorage<string>("token", "");
  const navigate = useNavigate();
  const { user } = useUser();

  if (user) navigate("/");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);
    fetch("https://arabian-odyssey.vercel.app/auth/signin", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          setErrors(
            typeof data.err === "string"
              ? data.err
              : data.err.map((err: { message: string }) => err.message)
          );
        }
        if (data.message === "success") {
          setLoading(false);
          setToken(data.token);
          location.reload();
        }
      })
      .then(() => setTimeout(() => navigate("/"), 100))
      .catch((err) => console.log(err));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="flex flex-grow flex-col items-center pt-6">
      {loading && <Loading />}
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
            Welcome agin!
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
            {error.length > 0 && (
              <div className="space-y-5" role="alert">
                {Array.isArray(error) ? (
                  error.map((err) => (
                    <p
                      key={err}
                      className="rounded-lg border border-red-600 bg-red-200 px-2 py-2 text-sm font-semibold text-red-600 md:text-base lg:text-lg"
                      aria-label={err}
                    >
                      {err}
                    </p>
                  ))
                ) : (
                  <p
                    className="rounded-lg border border-red-600 bg-red-200 px-2 py-2 text-sm font-semibold text-red-600 md:text-base lg:text-lg"
                    aria-label={error}
                  >
                    {error === "user already exist" ? (
                      <>
                        user already exist. Please <Link to="/signin">sign in</Link> or use a
                        different email address.
                      </>
                    ) : (
                      error
                    )}
                  </p>
                )}
              </div>
            )}
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
                minLength={3}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary/90 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-black"
            >
              Log in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link className="font-medium text-primary hover:underline" to="/signup">
                Sing up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
