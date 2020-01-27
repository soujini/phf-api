import React from "react";
import { Route, Switch } from "react-router-dom";
import Logged_In_Header from "../../components/utilities/logged_in_header";
import JoinUsWizardContainer from "../../components/join_us_wizard/join_us_wizard_container";
/**
 *  Default component for landing page which is used to display images to the user before he sign in/ join in
 */
function UserRegistration() {
  return (
    <>
      <Logged_In_Header></Logged_In_Header>
      <JoinUsWizardContainer></JoinUsWizardContainer>
    </>
  );
}

export default UserRegistration;
