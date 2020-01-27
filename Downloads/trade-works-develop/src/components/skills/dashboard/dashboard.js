import React, { Component } from 'react';

// import Popup from "reactjs-popup";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
import { withStyles } from "@material-ui/core/styles";
import { color, font_sizes } from "../../../utilities/themes";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Modal } from '@material-ui/core';
import Test from "../../skills/general_skills/test";
import './dashboard.css';


const data = [
  {
    name: 'BUSINESS SKILLS',
    imgUrl: require('../../../assets/business_skills.svg'),
    id:0,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },

  {
    name: 'CREATIVE SKILLS',
    imgUrl: require('../../../assets/creative_skills.svg'),
    id:1,

    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },
  {
    name: 'COMPUTER SKILLS',
    imgUrl: require('../../../assets/computer_skills.svg'),
    id:2,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },

  {
    name: 'TRADE/INDUSTRY EXPERTISE',
    imgUrl: require('../../../assets/trade_expertise.svg'),
    id:3,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },
  {
    name: 'DESIGN PROCLIVITIES',
    imgUrl: require('../../../assets/design_proclivities.svg'),
    id:4,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },

  {
    name: 'GENERAL SKILLS',
    imgUrl: require('../../../assets/general_skills.svg'),
    id:5,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },
  {
    name: 'WORK AUTHORIZATION',
    imgUrl: require('../../../assets/work_authorization.svg'),
    id:6,
    subSkills:[
      'CAD',
      'Drafting',
      'Accounting',
      'Architectural Design',
      'Model Building'
    ]
  },
]
const DragHandle = sortableHandle(() => <img className="float_right" src={require('../../../assets/hamburger.svg')} />);


const SortableItem = sortableElement(({value}) => (
  <li className="drag_drop">
  {value}
  <DragHandle />
  </li>
));

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

class DashboardComponent extends Component{

  state = {
    items:[ 'Trade/Industry Expertise', 'COMPUTER SKILLS', 'CREATIVE SKILLS', 'DESIGN PROCLIVITIES', 'BUSINESS SKILLS', 'GENERAL SKILLS','WORKER AUTHORIZATION'] ,
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));


  };


  render() {
    const {items} = this.state;
    const { classes } = this.props;

    var grouped = data.reduce((acc, post, ind) => {
      var index = parseInt(ind / 4);
      acc[index]= acc[index] || [];
      let subSkills = post.subSkills;

      acc[index].push(
        <Col sm={3} key={post.id}>
        <div className="rectangle">
        <div className="skills_box_row1">
        <img src={post.imgUrl} />
        <label className="skills_title">{post.name}</label>
        <div className="general_skills_popover">
        <Popup position="center" trigger={<img className="skills_pencil_icon" src={require('../../../assets/pencil_icon.svg')} />} modal>
        {close => (
          <div className="modal">
          <a className="close" onClick={close}>
          &times;
          </a>
          <Test></Test>
          </div>
        )}
        </Popup></div>
        </div>

        <ul className="sub_skills">
        {
          subSkills.map((val, index) => {
            return (
              <li className="listItem" key={index}>
              { val }
              </li>
            );
          })
        }
        </ul>
        </div>
        </Col>);
        return acc;
      }, {});

      return (


        // <Modal1 />
        <div className="dashboard_popover">
        <Popup  position="center"  trigger={<button>DASHBOARD</button>} className="popup" modal>

        {close => (
          <div className="modal">
          <a className="close" onClick={close}>
          &times;
          </a>
          <div className="container">
          <div>
          <p className="main_title">• SKILLS DASHBOARD •</p>
          <p className="main_tagline">Sharing your skills help us discover the best opportunities for you</p>
          </div>

          <div>
          <p className="sub_title1">I. ADD/EDIT YOUR SKILLS</p>
          </div>

          <div>
          <React.Fragment>
          {
            Object.keys(grouped).map((row) => {
              return (
                <Row className="rectangle_row" key={row}>
                {
                  grouped[row]
                }
                </Row>
              );
            })
          }
          </React.Fragment>
          </div>
          <div>
          <p className="sub_title2">Additional Skills</p>
          </div>

          <Row>
          <Col sm={3}>
          <div className="rectangle2">
          <div className="skills_box_row1">
          <img  src={require('../../../assets/business_skills.svg')} />
          <label className="skills_title">CLIENTELE EXPERIENCE</label>
          </div>
          </div>
          </Col>
          <Col sm={3}>
          <div className="rectangle2">
          <div className="skills_box_row1">
          <img src={require('../../../assets/business_skills.svg')} />
          <label className="skills_title">LANGUAGES</label>
          </div>
          </div>
          </Col>
          <Col sm={3}>
          <div className="rectangle2">
          <div className="skills_box_row1">
          <img src={require('../../../assets/business_skills.svg')} />
          <label className="skills_title">PERSONALITY TRAITS</label>
          </div>
          </div>
          </Col>
          </Row>

          <div>
          <p className="sub_title1">
          <span>II.</span>
          <span>Which three skill groups should be featured on the top right of your profile?</span>
          </p>

          </div>

          <div className="flex_container">

          <div className="box">
          <SortableContainer  onSortEnd={this.onSortEnd} useDragHandle>
          {items.map((value, index) => (
            <SortableItem  className ="rectangle" key={`item-${value}`} index={index} value={value}  />

          ))}
          </SortableContainer>
          </div>

          <div className="box">
          <div className="rectangle_preview">
          <div>
          <img className="preview_logo" src="assets/images/trade-works.png" alt="Trade Works" />
          </div>
          <div>
          <h1 className="preview_title">TIMOTHY SAIA</h1>
          <img  className="preview_avatar" src={require('../../../assets/img-avatar.png')} />
          </div>
          <div className="flex_container2">
          <div className="box11">
          </div>
          <div className="box12">
          </div>
          <div className="box13">
          <button className="number" >1</button> <br/>
          <button className="number" >2</button> <br/>
          <button className="number" >3</button> <br/>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        )}

        </Popup>
        </div> );
      }
    }
    // export default withStyles(useStyles, { withTheme: true })(DashboardComponent);
    export default DashboardComponent;
