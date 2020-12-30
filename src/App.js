import React, {
  useState,
  useEffect
} from "react";
import Sidebar from "./components/Sidebar";

const App = () => {

  const [sidebarData, setSidebar] = useState([]);

  useEffect( () => {  
  const modulesList = [
    {
        id: 1, title: 'Iniciando com React', lessons: [
            {id: 1, title: 'Aula 1'},
            {id: 2, title: 'Aula 2'}
        ],
    },
    {
        id: 2, title: 'Aprendendo Redux', lessons: [
            {id: 1, title: 'Aula 3'},
            {id: 2, title: 'Aula 4'}
        ]
    }
];
    setSidebar(modulesList);
  },[])

  return (<Sidebar sidebarData = {sidebarData}/>);
};

export default App;
