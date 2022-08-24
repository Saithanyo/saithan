import React , {useEffect ,useState} from "react";
import axios from "axios";
import Table from "./Components/Table";

const App = () => {

  const [data, setData] = useState ([]);
  
  
  const getData =async() => {
   const response = await axios.get("https://api.covid19api.com/summary/");
    
    setData(response.data.products);
  };

  useEffect(() => {
    getData();
},[]);



  return (<div>
   <Table products={data}/>
    </div>
  );
};

export default App;