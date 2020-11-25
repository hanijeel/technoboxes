import './App.css';
import React from 'react';

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bgColor: ""
    };
  }

  changeColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({bgColor: "#" + randomColor})
  }

  render() {
    return (
      <div 
        className="box" 
        onMouseOver={() => this.changeColor()} 
        style={{backgroundColor: this.state.bgColor}}
      >
      </div>
      );
  }
}

class App extends React.Component {  
  render() {
    const boxes = [];
    for (let i=0; i<100; i++) {
      boxes.push(<Box></Box>)
    }

    return(
      <div className="board">
        <div className="container">
          {boxes}
        </div>
      </div>
    );
  }
}


// Haven's Refactured Code
// export default App;

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       boxColors: Array(200),
//     };
//   }

//   handleMouseOver = (i) => {
//     console.log("mouse over handled")
//     const newColors = this.state.boxColors.slice();
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     newColors[i] = "#" + randomColor;
//     this.setState({ boxColors: newColors });
//   }

//   render() {
//     const boxes = [];

//     for (let i = 0; i < this.state.boxColors.length; i++) {
//       boxes.push(this.renderBox(i));
//     }
//     return (
//       <div>
//         {boxes}
//       </div>
//     )
//   }

//   renderBox = (i) => {
//     return (
//       <Box
//         key={i}
//         handleMouseOver={() => this.handleMouseOver(i)}
//         bgColor={this.state.boxColors[i]}
//       />
//     )
//   }
// }


// function Box(props) {
//   return (
//     <div
//       className="box"
//       onMouseOver={props.handleMouseOver}
//       style={{ backgroundColor: props.bgColor }}
//     >

//     </div>
//   );
// }

// export default App;