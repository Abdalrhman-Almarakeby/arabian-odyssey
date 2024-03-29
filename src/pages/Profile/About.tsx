import ProfileSVG from "@/assets/icons/user-avatar.svg?react";
import { User } from "@/types/user";

function About({ user }: { user: User }) {
  const creationDate = new Date(user.createdAt).toDateString();

  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-10 text-3xl font-bold">About</h2>
      <div className="mb-4 flex flex-col items-center gap-6 px-5 py-2 shadow sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <p className="mb-2 text-xl font-bold">{user.name}</p>
          <p className="font-light">{user.email}</p>
          <p className="font-light">Gender: {user.gender}</p>
          <p className="font-light">Member since: {creationDate}</p>
        </div>
        <ProfileSVG className="size-40" />
      </div>
    </div>
  );
}

export default About;
