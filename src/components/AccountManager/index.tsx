import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import actions from "state/actions";
import Icon from "components/common/Icon";
import Button from "components/common/Button";
import useOutsideClick from "components/hooks/useOutsideClick";
import { CurrentUser } from "types/users";
import { SecurityState } from "state/security/types";
import { colors, Img } from "styles/globalStyles";
import { Label } from "styles/globalStyles";
import { Wrapper, WrapperUserInfo } from "./styles";
import { useHistory } from "react-router-dom";

const AccountManager = () => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("authUser AccountManager: ", authUser);
  // const authUser: CurrentUser = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });

  const handleOpen = () => setOpen(!open);

  const handleSignOut = () => {
    dispatch(actions.security.logoutRequest());
    history.replace("/");
  };

  return (
    <>
      {!authUser?.photoURL ? (
        <Icon
          style={{ float: "right", margin: 16 }}
          icon={faUser}
          color={colors.primary}
          size="lg"
          onClick={handleOpen}
        />
      ) : (
        <Img
          className="rounded-circle"
          src={authUser?.photoURL}
          alt="user"
          width="40px"
          margin="8px"
          display="block"
          float="right"
          cursor="pointer"
          onClick={handleOpen}
        />
      )}
      {open && (
        <Wrapper
          ref={ref}
          display={open ? "block" : "none"}
          style={{ zIndex: 2 }}
        >
          {!authUser?.photoURL ? (
            <Icon
              style={{ display: "block", margin: "16px auto" }}
              icon={faUser}
              color={colors.primary}
              size="3x"
              onClick={handleOpen}
            />
          ) : (
            <Img
              className="rounded-circle"
              src={authUser?.photoURL}
              alt="authUser"
              width="50%"
              margin="auto"
              display="block"
            />
          )}
          <WrapperUserInfo>
            <Label fontWeight={500} fontSize="16px" lineHeight="29px">
              {authUser?.displayName}
            </Label>
            <Label fontWeight={400} fontSize="14px" color="#5f6368">
              {authUser?.email}
            </Label>
          </WrapperUserInfo>
          <Button title="Sign Out" margin="auto" handleOnClik={handleSignOut} />
        </Wrapper>
      )}
    </>
  );
};

export default AccountManager;
