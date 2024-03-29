import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { Loading } from "@/components/Loading";
import { useSignupEmail } from "@/contexts/SignupEmailContext";
import { useUser } from "@/contexts/UserContext";
import { Input } from "@/components/Input";
import { SubmitButton } from "@/components/SubmitButton";

export function Signup() {
  const { setSignupEmail } = useSignupEmail();
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

    axios
      .post("https://arabian-odyssey.vercel.app/auth/signup", JSON.stringify(formData), {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { message: string; err?: string | { message: string }[] }) => {
        if (data.message === "success") {
          toast.success("User created successfully. Check your email for confirmation.");
          navigate("/confirm-email");
          return;
        }
        toast.error("An Error Occurred. Pleas try later.");
      })
      .catch((err: AxiosError<{ err: string | { message: string }[] }>) => {
        if (err.response) {
          const message = err.response.data.err;
          if (!(typeof message === "string"))
            return message.forEach((item) => toast.error(item.message));

          toast.error(
            message === "user already exist" ? (
              <>
                User already exist. consider<>&nbsp;</>
                <Link to="/signin" className="underline">
                  Sing in
                </Link>
              </>
            ) : (
              message
            )
          );
        }
      })
      .finally(() => setLoading(false));
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
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
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
            <p className="text-sm font-light text-gray-500">
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
