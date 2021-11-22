import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from './Component/Person';

class  App extends Component {

  state = {
    show : false,
    intervalle :0
  }

  handleShow = () => this.setState({show :!this.state.show})
  componentDidMount() {
    setInterval(() => {
      this.setState({intervalle:this.state.intervalle+1})
      
    }, 1000);
  
}


  render (){
  return (

    <div className="App">
      <h2>  durée : {this.state.intervalle} s</h2>
        <button onClick ={this.handleShow}> Show</button>
      {this.state.show && 
      <Person />
    }
    </div>
  );
}
}
export default App;
