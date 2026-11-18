import V3 from "@/components/V3";
import Smooth from "@/components/Smooth";
import Switcher from "@/components/Switcher";

export default function Page() {
  return (
    <>
      <Smooth />
      <V3 />
      <Switcher cur="3" />
    </>
  );
}
