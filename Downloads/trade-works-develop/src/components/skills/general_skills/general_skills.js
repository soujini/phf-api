import React from 'react';
import ReactDOM from 'react-dom';
import RcIf, {RcElse} from 'rc-if';
// import SearchField from "react-search-field";
import { withStyles } from "@material-ui/core/styles";
import { color, font_sizes } from "../../../utilities/themes";
import Popup from "reactjs-popup";
import OverflowScrolling from 'react-overflow-scrolling';

import './general_skills.css';

const skills = [
  {name: "Drive truck around poles",id:'1'},
  {name: "Pet care",id:'2'},
  {name: "Closet organisation",id:'3'},
  {name: "Typing",id:'4'},
  {name: "Furniture assembling",id:'5'},
  {name: "Communication",id:'6'},
  {name: "Team work",id:'7'},
  {name: "Negotiation and persuasion",id:'8'},
  {name: "Problem solving",id:'9'},
  {name: "Leadership",id:'10'},
  {name: "Intense Math and physics problem analytical words",id:'11'},
  {name: "Analytical skills",id:'12'},
  {name: "Communication skills",id:'13'},
  {name: "Computer skills",id:'14'},
  {name: "Conceptual skills",id:'15'},
  {name: "Core Competencies",id:'16'},
  {name: "Analytical skills",id:'17'},
  {name: "Communication skills",id:'18'},
  {name: "Computer skills",id:'19'},
  {name: "Conceptual skills",id:'20'},
  {name: "Core Competencies",id:'21'},
];

const Header = () => (
  <div>
  <div className="header">
  <label className="heading"><span className="text-style-1">TRADE: </span><span>All</span></label>
  </div>
  <div className="title">
  <label>&#x000B7; GENERAL SKILLS&#x000B7;</label>
  </div>
  <hr className="line"></hr>
  <div className="info">
  To add skills <img width={10} src={require('../../../assets/add-skill-plus.svg')} alt="Add"/>.To delete hover on, <span className="army-green">&#10003;</span>. Add a new skill at the bottom of the search drop down (to avoid redundancies!)
  </div>

  </div>
);
const SearchField = () =>(
  <div id="search">
  <input  type="search" placeholder="SEARCH" />
  </div>
);

const Expand = (props) => (
  // const visibility = props.value ? "show" : "";
  <div>
  <div id="expand" className={props.value == 'true'? 'show':'hide'}>
  <p>{props.value}</p>
  <p>{props.value}</p><p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>
  <p>{props.value}</p>

  </div>
  </div>
)


class GeneralSkillsComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  //
  // showResults = () => {
  //   this.setState({
  //     searchResults: skills,
  //     moveResults: []
  //   })
  // }
  //
  // // search = (URL) => {
  // //     $.ajax({
  // //         type: 'GET',
  // //         dataType: 'json',
  // //         url: URL,
  // //         success: function(response) {
  // //             this.showResults(response);
  // //         }.bind(this)
  // //     });
  // // }
  //
  // handleEvent = (clickedTrack) => {
  //   const { searchResults, moveResults } = this.state;
  //   const isInSearchResults = searchResults.some(result => result.id === clickedTrack.id);
  //
  //   this.setState({
  //     searchResults: isInSearchResults ? searchResults.filter(i => i.id  !== clickedTrack.id) : [...searchResults, clickedTrack],
  //     moveResults: isInSearchResults ? [...moveResults, clickedTrack] : moveResults.filter(i => i.id !== clickedTrack.id)
  //   });
  // }
  //
  // componentDidMount() {
  //   //this.search('https://itunes.apple.com/search?term=broods');
  //   this.showResults();
  // }


  render()
  {
    const { classes } = this.props;
    return(
      <div className="general_skills_popover">


            <Header></Header>
            <Content></Content>

      </div>
    );
  }
}


class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      more:"false",
      itemsToShow: 10,
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    if(this.state.more == "true"){
      this.setState({ more: "false" })
    }
    else{
      this.setState({ more: "true" })
    }

    // this.state.itemsToShow === 3 ? (
    //   this.setState({ itemsToShow: this.state.cars.length, expanded: true })
    // ) : (
    //   this.setState({ itemsToShow: 3, expanded: false })
    // )
  }

  render(){
    const { handleEvent, searchResults, mode, mouseOut, mouseOver } = this.props;
    return(

      <div className={this.state.more =='true' ? 'results-div-show' : 'results-div-hide'}>
      <RcIf if={this.props.mode == 'All'}>
      <SearchField></SearchField>
      </RcIf>
      <ul className={this.state.more =='true' ? 'skill-bank-ul-show':'skill-bank-ul-hide'}>

      {this.props.searchResults.map((result, idx) =>
        <ResultItem
        key={`${result.id}-${idx}`}
        trackName={result.name}
        track={result}
        handleClick={handleEvent}
        mouseOut={mouseOut}
        mouseOver={mouseOver}
        mode={this.props.mode}
        />
      )}
      </ul>
      <div class="more-less">
      <a className="btn btn-primary" onClick={this.showMore}>
      <RcIf if={searchResults.length >= 10 && this.state.more == "false" }>
      <span>more</span>
      </RcIf>
      <RcIf if={searchResults.length >= 10 && this.state.more == "true"}>
      <span>less</span>
      </RcIf>
      </a>
      </div>
      <RcIf if={this.state.more == "true"}>
      <div>
      <div class="input-container">
      <input class="input-field" type="text" placeholder="Username" name="usrnm" />
      <span class="icon">+</span>
      </div>
      <div class="add-confirm">
      <div className="add-confirm-info">
      Do you mean Camp Budgeting
      </div>
      <div className="add-confirm-img">
      <img src={require('../../../assets/add-skill-plus.svg')} height="10px" />
      </div>
      </div>
      </div>
      </RcIf>

      </div>


    );
  }
}

class ResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc:require('../../../assets/logo2.svg')
    }
    this.mouseOut1 = () => {
      console.log("Mouse out!!!");
      this.setState({imgSrc:require('../../../assets/logo2.svg')});
    }

    this.mouseOver1 = ()  => {
      console.log("Mouse over!!!");
      this.setState({imgSrc:require('../../../assets/logo3.svg')});
    }

  }
  render(){
    const { handleClick, track, trackName, mode, mouseOut, mouseOver, imgSrc } = this.props
    return <li className="skills-listItem">
    <RcIf if={mode == 'All'} >
    <div className="flex">
    <div width="10%">
    <img type="button" onClick={() => handleClick(track)} height="10px" className="add-skill-plus" src={require('../../../assets/add-skill-plus.svg')} />
    </div>
    <div width="90%">
    {trackName}
    <img height="10px" className="pencil-icon" src={require('../../../assets/pencil_icon.svg')} />
    </div>
  </div>

    </RcIf>
    <RcIf if={mode == 'Selected'} >

    <div className="flex">
    <div width="10%">
    <img onMouseOut={() => this.mouseOut1()} onMouseOver={() => this.mouseOver1()} type="button" onClick={() => handleClick(track)} height="10px" className="add-skill-plus" src={this.state.imgSrc} />
</div>
<div width="90%">
    {trackName}
    </div>
</div>
    </RcIf>
    </li>;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      moveResults: [],
      // imgSrc:'../../../assets/creative_skills.svg'
    }

    this.handleEvent = this.handleEvent.bind(this);
  }

  showResults = () => {
    this.setState({
      searchResults: skills,
      moveResults: []
    })
  }

  // search = (URL) => {
  //     $.ajax({
  //         type: 'GET',
  //         dataType: 'json',
  //         url: URL,
  //         success: function(response) {
  //             this.showResults(response);
  //         }.bind(this)
  //     });
  // }

  handleEvent = (clickedTrack) => {
    const { searchResults, moveResults } = this.state;
    const isInSearchResults = searchResults.some(result => result.id === clickedTrack.id);

    this.setState({
      searchResults: isInSearchResults ? searchResults.filter(i => i.id  !== clickedTrack.id) : [...searchResults, clickedTrack],
      moveResults: isInSearchResults ? [...moveResults, clickedTrack] : moveResults.filter(i => i.id !== clickedTrack.id),
    });
  }
  mouseOut = () => {
    console.log("Mouse out!!!");
    this.setState({imgSrc:require('../../../assets/logo3.svg')});
  }

  mouseOver = ()  => {
    console.log("Mouse over!!!");
    this.setState({imgSrc:require('../../../assets/logo2.svg')});
  }

  componentDidMount() {
    //this.search('https://itunes.apple.com/search?term=broods');
    this.showResults();
  }
  render(){
    const { searchResults, moveResults, imgSrc } = this.state;
    return(
      <div>
      <div className="flex-container">
      <div className="box1">
      <div className="flexbox-title">
      MY SKILLS
      <Results
      searchResults={this.state.moveResults}
      handleEvent={this.handleEvent}
      mouseOut={this.mouseOut}
      mouseOver={this.mouseOver}
      mode="Selected"
      imgSrc={this.state.imgSrc} />
      </div>
      </div>
      <div className="box2">
      <div className="flexbox-title">
      SKILL BANK

      <Results
      searchResults={this.state.searchResults}
      handleEvent={this.handleEvent}
      mouseOut={this.mouseOut}
      mouseOver={this.mouseOver}
      mode="All"/>

      </div>

      </div>
      <p>continue</p>




      </div>


      </div>
    )
  }
}

export default GeneralSkillsComponent;
