import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LandingHeader from "../../components/landing_page/landing_header";
import LandingContent from "../../components/landing_page/landing_content";
import LandingImagesMain from "../../components/landing_page/landing_image_main";
import LandingCandidate from "../../components/landing_page/landing_candidate";
import LandingHiring from "../../components/landing_page/landing_hiring";
import LandingFooter from "../../components/landing_page/landing_footer";

/**
 *  Default component for landing page which is used to display images to the user before he sign in/ join in
 */
class DefaultLandingContainer extends Component {
  login = () => {
    const data = {
      email: "tw@mailinator.com",
      password: "trade@123"
    };
    this.props.dispatch()
  };

  render() {
    return (
      <>
        <LandingHeader join_us login openLogin={this.login}></LandingHeader>
        <LandingContent></LandingContent>
        <LandingImagesMain></LandingImagesMain>
        <LandingCandidate></LandingCandidate>
        <LandingHiring></LandingHiring>
        <LandingFooter></LandingFooter>
      </>
    );
  }
}

export default connect(null, null)(DefaultLandingContainer);
