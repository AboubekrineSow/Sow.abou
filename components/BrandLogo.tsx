import Image from "next/image";
import lightLogo from "/public/images/logo-clear-theme.svg";
import darkLogo from "/public/images/logo-dark-theme.svg";

function BrandLogo() {
  return (
    <>
      <Image
        src={''}
        alt="Aboubekrine Sow"
        className="max-h-12 w-fit dark:hidden"
      />
      <Image
        src={""}
        alt="Aboubekrine Sow"
        className="hidden max-h-12 w-fit dark:block"
      />
    </>
  );
}

export default BrandLogo;
