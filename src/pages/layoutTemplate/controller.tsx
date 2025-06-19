import { useRouter } from "next/router";

const useNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const goBack = () => {
    router.back();
  };

  const reloadPage = () => {
    router.reload();
  };

  return {
    navigateTo,
    goBack,
    reloadPage,
  };
};

export default useNavigation;
