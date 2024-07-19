import React from "react";
import Layout from "../../../containers/Layout";
import { ReactComponent as UserRegisterBG } from "../../../assets/images/bg-register-user.svg";

function RegisterUser() {
  return (
    <Layout image={UserRegisterBG}>
      <p>RegisterUser</p>
    </Layout>
  );
}

export default RegisterUser;
