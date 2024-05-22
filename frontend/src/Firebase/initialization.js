import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initialization = () => {
  initializeApp(firebaseConfig);
};

export default initialization;
