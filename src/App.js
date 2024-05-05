import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Filter from "./Filter";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    selectedOptions: [],
    role: null,
    experience: null,
    workMode: null,
    paySalary: null,
    companyName: '',
  }); 
  const handleFilterChange = (filterValues) => {
    setFilters(filterValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        if (result && result.jdList) {
          setData(result.jdList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data, '123456789');

  console.log(data, '123456789');
  // useEffect(() => {
  //   // Filter data when filteredData state changes
  //   // This effect will run whenever filteredData changes
  //   // You can perform filtering logic here
  //   // For simplicity, I'm just setting filteredData to data
  //   setFilteredData(data);
  // }, [data]);
  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="card-container">
          {data.map((jd, index) => {
            console.log('filter', jd, index);
            return <Card key={index} jd={jd} />;
          })}
      </div>
      
    </div>
  );
}

export default App;
