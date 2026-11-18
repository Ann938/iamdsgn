import V8 from "@/components/V8";
import Smooth from "@/components/Smooth";
import Switcher from "@/components/Switcher";

export default function Page() {
  return (
    <>
      <Smooth />
      <V8 />
      <Switcher cur="7" />
    </>
  );
}
