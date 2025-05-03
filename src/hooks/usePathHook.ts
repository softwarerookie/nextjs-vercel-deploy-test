import { usePathname } from "next/navigation";

const usePathHook = () => {
  const path = usePathname();
  return path;
};

export default usePathHook;
