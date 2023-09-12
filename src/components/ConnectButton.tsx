import React from "react";
import { useWallet } from "@txnlab/use-wallet";
import { useDispatch } from "react-redux/es/exports";
import { logIn, logOut } from "../store/reducers/userReducer";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";

interface userInitialStateInterface {
  userId: string;
  isLoggedIn: boolean;
  userWallet: string;
}
const ConnectButton = () => {
  const { providers } = useWallet();
  const isLoggedIn: Boolean = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  const dispatch = useDispatch();

  console.log(providers);

  const handleLogIn = () => {
    dispatch(
      logIn({
        userId: "aoisdj09asdj091j",
        userWallet: "as890s8jhslkjnm,as8du",
      })
    );
    console.log("Log in");
  };
  const handleLogOut = () => {
    dispatch(logOut({ userId: "", userWallet: "" }));
  };

  return (
    <div>
      <button
        className={`p-2 rounded w-full transition all ${
          isLoggedIn
            ? "bg-green-400 hover:bg-green-300"
            : "bg-red-400 hover:bg-red-300"
        }`}
        onClick={isLoggedIn ? handleLogOut : handleLogIn}
      >
        {isLoggedIn ? "Log outasdasdasdasdasdasdasdasdasdasdasdasdasd" : "Log inasdasdasdasdasdasdasdasdasdas"}
      </button>
    </div>
  );
};
export default ConnectButton;
