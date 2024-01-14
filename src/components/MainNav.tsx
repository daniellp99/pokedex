import Image from "next/image";
import SearchInput from "./SearchInput";

export default function MainNav() {
  return (
    <nav className="flex items-center content-center justify-between w-full pb-2">
      <Image src="/pokeball.svg" alt="pokeball" width="50" height="50" />
      <SearchInput />
    </nav>
  );
}
