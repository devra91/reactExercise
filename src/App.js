import React from 'react';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
import EventPractice from './EventPractice';
import './App.css';

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

const App = () => {
  return <EventPractice />;
  // <Say />;
  // <Counter/>;
  // <MyComponent name="React" favoriteNumber={2}>리액트</MyComponent>
};

export default App;
