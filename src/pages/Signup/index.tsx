import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "@/components/Loading";
import { useSignupEmail } from "@/context/SignupEmailContext";
import { useUser } from "@/context/UserContext";
import { FormError } from "@/components/FormError";
import { Input } from "@/components/Input";
import { SubmitButton } from "@/components/SubmitButton";

export function Signup() {
  const { setSignupEmail } = useSignupEmail();
  const [error, setErrors] = useState<string[] | string>([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  if (user) navigate("/");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);
    setSignupEmail(formData.email);
    fetch("https://arabian-odyssey.vercel.app/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          setErrors(
            typeof data.err === "string"
              ? data.err
              : data.err.map((err: { message: string }) => err.message)
          );
        }
        if (data.message === "success") {
          setLoading(false);
          navigate("/confirm-email");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  console.log();
  return (
    <section className="flex flex-grow flex-col items-center pt-6">
      {loading && <Loading />}
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
            {error.length > 0 && (
              <div className="space-y-5" role="alert">
                {Array.isArray(error) ? (
                  error.map((err) => <FormError>{err}</FormError>)
                ) : (
                  <FormError>
                    {error === "user already exist" ? (
                      <>
                        user already exist. Please <Link to="/signin">sign in</Link> or use a
                        different email address.
                      </>
                    ) : (
                      error
                    )}
                  </FormError>
                )}
              </div>
            )}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
                Your full name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                minLength={3}
                maxLength={30}
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="John_doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-black">
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                minLength={3}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
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
              <Input
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
            <SubmitButton>Create an account</SubmitButton>
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
