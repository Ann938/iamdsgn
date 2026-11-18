import Brand from "@/components/Brand";
import Smooth from "@/components/Smooth";
import Switcher from "@/components/Switcher";

export default function Page() {
  return (
    <>
      <Smooth />
      <Brand />
      <Switcher cur="Бренд" />
    </>
  );
}
