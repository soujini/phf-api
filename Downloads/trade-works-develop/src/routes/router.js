import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Join_Us from "../pages/auth/joinus/join_us";
import UserRegistration from "../components/join_us_registration/join_us_registration";
import { Loading } from "../components/common";
import DashboardComponent from "../components/skills/dashboard/dashboard";
import GeneralSkillsComponent from "../components/skills/general_skills/general_skills";
import Test from "../components/skills/general_skills/test";

class Router extends Component {
  render() {
    const { loading } = this.props;
    return (
      <BrowserRouter>
        <Loading loading={loading} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/join_us" component={Join_Us} />
          <Route exact path="/joinus_wizard" component={UserRegistration} />
          <Route exact path="/skills_dashboard" component={DashboardComponent} />
          <Route exact path="/general_skills" component={GeneralSkillsComponent} />
          <Route exact path="/test" component={Test} />

          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.Api.loading
  };
}

export default connect(mapStateToProps)(Router);
