import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "components/common/Layout";
import Icon from "components/common/Icon";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";
import { colors, Img } from "styles/globalStyles";

const Home = (props: RouteComponentProps) => {
  // const authUser: CurrentUser = useContext(AuthContext);
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  return (
    <Layout>
      {!authUser?.photoURL ? (
        <Icon
          style={{ float: "right", margin: 16 }}
          icon={faUser}
          color={colors.primary}
          size="lg"
        />
      ) : (
        <Img
          className="rounded-circle"
          src={authUser?.photoURL}
          alt="user"
          width="88px"
          margin="24px auto"
          display="block"
          cursor="pointer"
        />
      )}
      <p>hola</p>
    </Layout>
  );
};

export default Home;
