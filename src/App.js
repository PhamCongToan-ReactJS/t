import React,{ Component } from "react";
import Index from "./components/index"
import "./scss/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render () {
    return (
      <div>
        <Index />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Index />
//     </div>
//   );
// }

export default App;
