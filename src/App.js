import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Filter from "./Filter";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  debugger;
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({
    selectedOptions: [],
    role: null,
    experience: null,
    workMode: null,
    paySalary: null,
    techStack: null,
    companyName: "",
  });
  const handleFilterChange = (filterValues) => {
    console.log(filterValues, "handleFilterChange");
    setFilters(filterValues);
  };

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = await response.json();
      if (result && result?.jdList) {
        setData((prevData) => [...prevData, ...result?.jdList]);
        setnewData((prevData) => [...prevData, ...result?.jdList]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (data?.length != 10) {
      fetchData();
    }
  }, []);

  console.log(data, "123456789");

  console.log(data, "123456789");

  console.log(filters, "APPLICATION");

  useEffect(() => {
    // Filter data based on filter criteria
    const filtered = newData?.filter((item) => {
      // Check if the item matches all filter criteria

      // Check if the item matches any of the selected engineering options
      if (filters?.enggOptions?.length > 0) {
        const enggMatch = filters?.enggOptions?.some((option) =>
          item?.jobRole?.includes(option?.value)
        );
        if (!enggMatch) return false; // If no match, exclude the item
      }

      // Check if the item's role matches the selected role
      if (filters?.role) {
        if (item?.jobRole?.toLowerCase() !== filters?.role?.toLowerCase())
          return false; // If no match, exclude the item
      }

      // Check if the item's experience matches the selected experience
      if (filters?.experience) {
        const minExp = parseInt(item?.minExp);
        const maxExp = parseInt(item?.maxExp);

        // Convert selected experience to a number
        const selectedExp = parseInt(filters?.experience);

        // Check if the item's experience falls within the selected range
        if (selectedExp < minExp || selectedExp > maxExp) return false; // If outside the range, exclude the item
      }

      // Check if the item's work mode matches the selected work mode
      if (filters?.workMode) {
        if (filters?.workMode?.toLowerCase() === "in-office") {
          if (
            item?.location?.toLowerCase() === "remote" ||
            item?.location?.toLowerCase() === "hybrid"
          )
            return false; // Exclude remote and hybrid if work mode is In-office
        } else {
          if (
            item?.location?.toLowerCase() !== filters?.workMode?.toLowerCase()
          )
            return false; // If work mode doesn't match, exclude the item
        }
      }

      if (filters?.techStack) {
        if (
          item?.techStack?.toLowerCase() !== filters?.techStack?.toLowerCase()
        )
          return false; // If no match, exclude the item
      }

      if (filters?.companyName) {
        if (
          !item?.companyName
            .toLowerCase()
            .includes(filters?.companyName?.toLowerCase())
        )
          return false; // If no match, exclude the item
      }
      if (filters?.paySalary) {
        const selectedSalary = parseFloat(filters?.paySalary?.replace("L", ""));
        console.log(selectedSalary, "selectedSalary");

        const minSalary = parseFloat(item?.minJdSalary);
        const maxSalary = parseFloat(item?.maxJdSalary);
        if (minSalary < selectedSalary || maxSalary > selectedSalary)
          return false; // If salary is outside the specified range, exclude the item
      }

      // If all criteria match, include the item in the filtered data
      return true;
    });

    // Update the filtered data state
    setFilteredData(filtered);
  }, [newData, filters]);
  console.log("Filtered data", filteredData);

  // const fetchMoreData = () => {
  //   if(offset!==10){
  //     setOffset(prevOffset => prevOffset + 10); // Increment offset to fetch more data
  //   }
  // };
  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <InfiniteScroll
        dataLength={data.length}
        scrollThreshold={0.9}
        next={fetchData}
        hasMore={true} // Set this to true if there are more items to load
        loader={<p>Loading...</p>}
      >
        <div className="card-container">
          {filteredData.map((jd, index) => {
            console.log("filter", jd, index);
            return <Card key={index} jd={jd} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
