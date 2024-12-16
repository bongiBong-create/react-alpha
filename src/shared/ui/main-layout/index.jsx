import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getProducts } from "../../../entites/product";
import { Header } from "../../../features/header";

export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
