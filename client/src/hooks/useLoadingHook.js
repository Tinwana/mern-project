import { useDispatch } from "react-redux";
import { isLoading as isLoadingState } from "../redux/slides/loadingSlice";
import { useEffect } from "react";

const useLoadingHook = (isLoading) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoadingState(isLoading));
  }, [isLoading]);
};
export default useLoadingHook;
