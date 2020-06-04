import React, { Component } from "react";
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import IterationSample from './IterationSample';
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

// function App() {
//   const name = '리액트';
//   const style = {
//     backgroundColor: 'black',
//     color:'aqua',
//     padding: 16
//   };
//   return (
//     <div style={style} className="react">
//       {name === '리액트'?(
//         <h1>리액트입니다</h1>
//       ):(
//         <h1>Not react</h1>
//       )}
//     </div>
//   );
// }

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <LifeCycleSample />
//   );
// <EventPractice />;
// <Say />;
// <Counter/>;
// <MyComponent name="React" favoriteNumber={2}>리액트</MyComponent>
// };

export default App;
