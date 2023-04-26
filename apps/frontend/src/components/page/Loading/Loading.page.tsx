import { Outlet } from "react-router-dom";
import { Loading } from "./Loading";

export function LoadingPage() {
  return (
    <Outlet />
  )
}

export function LoadingIndexPage() {
  return (
    <Loading />
  )
}