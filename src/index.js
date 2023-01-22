import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './NavigationBar.js';
import DaveForm from './DaveForm.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

//const myFirstElement = <h1>Hello React!</h1>;

/*class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Model("Ford", "Mustang");

var test = val => "Hello" + val;*/

/*const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);*/

//function Car(props) {
//  return <h2>I am a {props.color} Car!</h2>;
//}

function App() {
  return(
    <>
      <NavigationBar />
      <DaveForm />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
root.render(<App />);

//ReactDOM.render(myElement, document.getElementById('root'));