import { useSignupEmail } from "@/contexts/SignupEmailContext";
import { useNavigate } from "react-router-dom";

export function ConfirmEmail() {
  const navigate = useNavigate();
  const { signupEmail } = useSignupEmail();

  if (!signupEmail) navigate("/");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-6 sm:py-12">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Check your inbox</h2>
        <p className="mb-2 text-lg text-zinc-500">
          We are glad, that you’re with us ? We’ve sent you a verification link to the email address{" "}
          <span className="font-medium text-primary">{signupEmail}</span>.
        </p>
      </div>
    </div>
  );
}
