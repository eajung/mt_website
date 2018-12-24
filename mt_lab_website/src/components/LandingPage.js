import React from 'react';
import ProjectModal from './ProjectModal';

export class LandingPage extends React.Component { 
  constructor(props) {
    super(props);
  
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  }

  render() {
    return (
      <div className="content-container">
        <div className="introduction">
          <h1>Welcome to MT Lab</h1>
          <h3>...where pigs <i>can</i> fly.</h3>
        </div>
        <div className="category-container">
          <button className="" onClick={() => this.setState({ showModal1: true })}>BRAINGINEERS</button>
          <ProjectModal 
            className="modal category-modal"
            showModal={this.state.showModal1}
            onRequestClose={() => this.setState({ showModal1:false})}
          />
          <button className="" onClick={() => this.setState({ showModal2: true })}>TENSEGRITY ROBOTICS</button>
          <ProjectModal 
            className="modal category-modal"
            showModal={this.state.showModal2}
            onRequestClose={() => this.setState({ showModal2:false})}
          />
          <button className="" onClick={() => this.setState({ showModal3: true })}>CATEGORY</button>
          <ProjectModal 
            className="modal category-modal"
            showModal={this.state.showModal3}
            onRequestClose={() => this.setState({ showModal3:false})}
          />
          <button className="" onClick={() => this.setState({ showModal4: true })}>OTHER CATEGORY</button>
          <ProjectModal 
            className="modal category-modal"
            showModal={this.state.showModal4}
            onRequestClose={() => this.setState({ showModal4:false})}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
