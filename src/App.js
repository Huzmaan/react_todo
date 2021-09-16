import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Main from './Component/Main'
import * as firebase from "firebase/app";
import {firebaseConfig} from './config/firebase'

firebase.initializeApp(firebaseConfig);

function App(){
  return (
    <div >
      <Header>
      </Header>
      <Main>

      </Main>
      <Footer>

      </Footer>
      </div>
  );
}

export default App;
