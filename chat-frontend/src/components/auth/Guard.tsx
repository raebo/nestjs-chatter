import { useGetMe } from "../../hooks/useGetMe";
import excludedRoutes from "../../constants/excluded-routes";
import { useEffect } from "react";
import { authenticatedVar } from "../../constants/authenticated";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ( { children }: GuardProps) => {
  const { data: user } = useGetMe();

  useEffect(() => {
    if (user) {
      authenticatedVar(true)
    }
  }, [user]);

  return (
    <>
      { excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children }
    </>
  );
}

export default Guard;