import { Link } from "react-router-dom";

interface InlineBtnProps {
  base: string;
  id: string | false;
  name: string;
  currentPath: string;
}

function InlineBtn({ base, id, name, currentPath }: InlineBtnProps) {
  const targetPath: string = id ? `${base}/${id}` : base;
  return (
    <Link
      className={`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${
        targetPath === currentPath
          ? "text-white bg-black"
          : "hover:bg-gray-400 hover:text-white"
      }`}
      to={targetPath}
    >
      {name}
    </Link>
  );
}

export default InlineBtn;
