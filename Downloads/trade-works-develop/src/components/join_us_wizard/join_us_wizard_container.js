import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import _ from "lodash";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { color, font_sizes } from "../../utilities/themes";
import CustomButton from "../navigations/custom_buttons";
import ChequeredFlag_Icon from "../data_display/icons/ChequeredFlag";
import strings from "../../utilities/strings";
import AddEducation from "./add_education";
import AddExperience from "./add_experience";
import JoiningTrade from "./add_trade";
import { JoinUsActions } from "../../redux/actions";
import { JoinusApi } from "../../redux/api";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 6px)",
    right: "calc(50% + 6px)"
  },
  line: {
    borderColor: color.primary_palette.franklin_purple,
    borderTopWidth: 2,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: color.primary_palette.franklin_purple,
    // '& :hover': {
    //   border: `1px solid` + color.primary_palette.franklin_purple,
    // }
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: color.primary_palette.franklin_purple
  },
  circleEmpty: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: `1px solid ${color.primary_palette.franklin_purple}`
  },
  completed: {
    color: color.primary_palette.franklin_purple,
    zIndex: 1,
    fontSize: 18
  }
});

const styles = {
  root: {
    width: "60%",
    margin: "0 auto",
    marginBottom: "6.25rem"
  },
  instructions: {
    textAlign: "center",
    fontSize: font_sizes.font_35,
    color: color.primary_palette.franklin_purple
  },
  button: {
    marginLeft: "1.25rem"
  },
  even: {
    marginTop: "0px",
    fontSize: font_sizes.font_12,
  },
  odd: {
    marginTop: "-36px",
    fontSize: font_sizes.font_12,
  },
  textRight: {
    textAlign: "right"
  },
  chkrdIconAlign: {
    marginLeft: "12px"
  },
  wizardContent: {
    margin: "30px auto"
  },
  buttonDiv: {
    width: "490px",
    margin: "30px auto",
    textAlign: "right"
  }
};

class JoinUsWizardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1
    };
  }

  componentDidMount(){
    this.props.dispatch(JoinUsActions.fetchAllTrades());
  }

  onInstituteInput = name => {
    _.size(name) >= 3 &&
      this.props.dispatch(JoinUsActions.fetchAllInstitutes({ name }));
  };

  QontoStepIcon = props => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
        {active ? (
          <div className={classes.circle} />
        ) : completed ? (
          <div className={classes.circle} />
        ) : (
          <div className={classes.circleEmpty} />
        )}
      </div>
    );
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return "Registration";
      case 1:
        return <JoiningTrade 
        trades={this.props.trades}
        />;
      case 2:
        return <AddEducation />;
      case 3:
        return <AddExperience />;
      case 4:
        return "PhotoOp";
      case 5:
        return "Complete";
      default:
        return "Unknown step";
    }
  };

  getSteps = () => {
    return ["Registration", "Trade", "Education", "Experience", "PhotoOp", ""];
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  ChequeredFlag = () => {
    const classes = this.props.classes;
    return <ChequeredFlag_Icon className={classes.chkrdIconAlign} />;
  };

  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;
    const steps = this.getSteps();
    return (
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={
                  index == steps.length - 1
                    ? () => this.ChequeredFlag()
                    : this.QontoStepIcon
                }
              >
                <div className={index % 2 === 0 ? classes.odd : classes.even}>
                  {label}
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                {strings.wizard.titles.completed}
              </Typography>
              {/* <CustomButton onClick={handleReset} className={classes.button} color="primary" variant="outlined" >
              {strings.wizard.titles.Reset}
              </CustomButton> */}
            </div>
          ) : (
            <div>
              {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
              <div className={classes.wizardContent}>
                {this.getStepContent(activeStep)}
              </div>
              <div className={classes.textRight} className={classes.buttonDiv}>
                <CustomButton
                  disabled={activeStep === 1}
                  onClick={this.handleBack}
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                >
                  Back
                </CustomButton>
                <CustomButton
                  onClick={this.handleNext}
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                </CustomButton>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    institutes: state.JoinUs.institutions,
    trades : state.JoinUs.trades
  };
}

export default connect(mapStateToProps)(
  withStyles(styles)(JoinUsWizardContainer)
);
