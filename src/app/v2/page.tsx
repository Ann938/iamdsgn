import V2 from "@/components/V2";
import Smooth from "@/components/Smooth";
import Switcher from "@/components/Switcher";

export default function Page() {
  return (
    <>
      <Smooth />
      <V2 />
      <Switcher cur="2" />
    </>
  );
}
