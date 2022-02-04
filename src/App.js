// import logo from './s_logo.png';
import './App.css';
import { Component } from 'react';
import Head from './components/Head';
import Container from './components/Container';
import Footer from './components/Footer';

document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  // componentDidMount(){
  //   fetch('./data.json').then(function(result){
  //     return result.json()
  //   }).then(function(json){
  //     console.log(json);
  //   }.bind(this));
  // }
  render(){
    return (
      <div className = "App">
        <Head/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}
export default App;
