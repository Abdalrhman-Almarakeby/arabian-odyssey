import { useLocation } from "react-router-dom";
import InlineBtn from "./InlineBtn";

interface BtnsLineProps {
  btns: [any];
  base: string;
  baseBtn: string | false;
}

function BtnsLine({ btns, base, baseBtn }: BtnsLineProps) {
  const { pathname } = useLocation();
  return (
    <div className="w-full overflow-y-auto py-2">
      {baseBtn && (
        <InlineBtn name="About" base={base} id={false} currentPath={pathname} />
      )}
      {btns.map((btn, i) => (
        <InlineBtn
          key={i}
          base={base}
          id={btn.id}
          name={btn.name}
          currentPath={pathname}
        />
      ))}
    </div>
  );
}

export default BtnsLine;
