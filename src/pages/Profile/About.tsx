import ProfileSVG from "@/assets/icons/user-avatar.svg?react";
import { User } from "@/types/user";

function About({ user }: { user: User }) {
  const creationDate = new Date(user.createdAt).toDateString();
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">About</h2>
      <div className="flex items-center gap-6 mb-4 shadow flex-col py-2 px-5 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl font-bold mb-2">{user.name}</p>
          <p className="font-light">{user.email}</p>
          <p className="font-light">From: {user.location}</p>
          <p className="font-light">Gender: {user.gender}</p>
          <p className="font-light">Member since: {creationDate}</p>
        </div>
        <ProfileSVG className="size-40" />
      </div>
    </div>
  );
}

export default About;
