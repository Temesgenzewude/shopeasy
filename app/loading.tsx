import loader from "@/assets/loader.gif";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src={loader}
        width={150}
        height={150}
      
        alt="Loading..."
      />
    </div>
  );
}
