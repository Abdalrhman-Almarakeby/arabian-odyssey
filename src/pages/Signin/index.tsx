import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useUser } from "@/contexts/UserContext";
import { Loading } from "@/components/Loading";
import { Input } from "@/components/Input";
import { SubmitButton } from "@/components/SubmitButton";

export function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setToken } = useLocalStorageToken();
  const navigate = useNavigate();
  const { user } = useUser();

  if (user) navigate("/");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://arabian-odyssey.vercel.app/auth/signin", JSON.stringify(formData), {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { message: string; token: string; err?: string | { message: string }[] }) => {
        if (data.message === "success") {
          toast.success("Logged in successfully.");
          setToken(data.token);
          setTimeout(() => navigate("/"), 10);
          return;
        }
        toast.error("An Error Occurred. Please try later.");
      })
      .catch((err: AxiosError<{ err: string | { message: string }[] }>) => {
        if (err.response) {
          const message = err.response.data.err;
          if (!(typeof message === "string"))
            return message.forEach((item) => toast.error(item.message));
          toast.error(
            message === "email not exist " ? (
              <>
                User doesn't exist consider<>&nbsp;</>
                <Link to="/signup" className="underline">
                  Sing up
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
            Welcome again!
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
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

            <SubmitButton>Log in</SubmitButton>
            <p className="text-sm font-light text-gray-500">
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
