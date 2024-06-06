import { Link } from "@/navigation";
import { ArrowLeftIcon, CheckIcon } from "@radix-ui/react-icons";

export default function HeaderConfig({
  texto,
  referencia,
  checkIcono,
}: {
  texto: string;
  referencia: string;
  checkIcono: string;
}) {
  return (
    <>
      <div className="md:hidden z-30 fixed top-0 left-0 w-full h-12 px-4 flex items-center justify-between border-b shadow-2xl bg-background">
        <Link href={referencia}>
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <p className="text-lg font-bold text-center w-full">{texto}</p>
        <div className="w-6 h-6"></div>
        <button className={`${checkIcono}  right-2 w-8 h-8`}>
          <CheckIcon className="w-full h-full text-green-700" />
        </button>
      </div>
    </>
  );
}
