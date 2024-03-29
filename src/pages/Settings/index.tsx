import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useUser } from "@/contexts/UserContext";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Settings() {
  const navigate = useNavigate();
  const { setUser, user } = useUser();
  const { token, setToken } = useLocalStorageToken();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    oldpassword: "",
    password: "",
    cpassword: "",
  });
  const [deleteEmail, setDeleteEmail] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    toast("Updating...");
    axios
      .patch(
        "https://arabian-odyssey.vercel.app/user/password",
        JSON.stringify(formData),
        {
          headers: {
            token: `ArabianOdyssey__${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => toast.success("Successfully updated your password"))
      .catch(() => toast.error("We are unable to update you password"));
  }

  function deleteAccount(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (deleteEmail !== user?.email) {
      toast.error("Entered email doesn't match actual email");
      return;
    }
    axios
      .delete("https://arabian-odyssey.vercel.app/user", {
        headers: {
          token: `ArabianOdyssey__${token}`,
        },
      })
      .then(() => {
        toast.success("Successfully deleted you account")
        setUser(null);
        setToken("");
      })
      .catch(() => toast.error("We are unable to delete you account"));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  return (
    user && (
      <div className="container flex-grow px-4">
        <h1 className="mb-10 mt-5 text-2xl font-bold text-center">Settings</h1>
        <section className="mb-15">
          <h2 className="text-base font-bold mb-8">Change password</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="oldpassword"
                className="mb-2 block text-sm font-medium text-black"
              >
                Old password
              </label>
              <input
                type="text"
                name="oldpassword"
                id="oldpassword"
                value={formData.oldpassword}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-black"
              >
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
            <div className="mb-4">
              <label
                htmlFor="cpassword"
                className="mb-2 block text-sm font-medium text-black"
              >
                Repat password
              </label>
              <input
                type="cpassword"
                name="cpassword"
                id="cpassword"
                value={formData.cpassword}
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
              Update
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-base font-bold mb-4">Delete account</h2>
          <button
            className="text-sm bg-red-500 py-2 px-4 rounded text-white mb-2"
            onClick={() => setDeleteModal(true)}
          >
            Delete account
          </button>
          <p className="text-red-500">This action is irreversible !</p>
        </section>
        <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
          <Modal.Header>Delete account</Modal.Header>
          <Modal.Body>
            <form method="POST" onSubmit={deleteAccount}>
              <div className="mb-4">
                <label
                  htmlFor="cpassword"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Type <span className="font-bold">{user.email}</span> to delete
                  your account
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={deleteEmail}
                  onChange={(e) => setDeleteEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary sm:text-sm"
                  required
                />
              </div>
              <button className="text-sm bg-red-500 py-2 px-4 rounded text-white mb-2">
                Delete account
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  );
}
