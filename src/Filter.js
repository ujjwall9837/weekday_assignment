import React, { useEffect, useState } from "react";
import "./Filter.css";
import Select from "react-select";

export default function Filter({ onFilterChange }) {
  const [isClearable, setIsClearable] = useState(true);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [role, setRole] = useState(null);
  const [experience, setExperience] = useState(null);
  const [workMode, setWorkMode] = useState(null);
  const [paySalary, setPaySalary] = useState(null);
  const [techStack, setTechStack] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [filters, setFilters] = useState({
    selectedOptions: [],
    role: null,
    experience: null,
    workMode: null,
    paySalary: null,
    techStack:null,
    companyName: "",
  });

  const enggOptions = [
    { value: "frontend", label: "frontend" },
    { value: "backend", label: "backend" },
    { value: "fullstack", label: "fullstack" },
    { value: "ios", label: "ios" },
    { value: "Flutter", label: "Flutter" },
    { value: "React Native", label: "React Native" },
    { value: "Android", label: "Android" },
    { value: "Frontend", label: "Frontend" },
    { value: "Tech Lead", label: "Tech Lead" },
    { value: "Dev-Ops", label: "Dev-Ops" },
    { value: "Data Engineer", label: "Data Engineer" },
    { value: "Data Science", label: "Data Science" },
    { value: "Computer-Vision", label: "Computer-Vision" },
    { value: "Nlp", label: "Nlp" },
  ];
  const designOptions = [
    { value: "Designer", label: "Designer" },
    { value: "Design Manager", label: "Design Manager" },
    { value: "Graph Manager", label: "Graph Manager" },
  ];
  const productOptions = [
    { value: "Product Manager", label: "Product Manager" },
  ];
  const groupedOptions = [
    {
      label: "Engineering",
      options: enggOptions,
    },
    {
      label: "Design",
      options: designOptions,
    },
    {
      label: "Product",
      options: productOptions,
    },
  ];
  const formatGroupLabel = (data) => (
    <div className="group-styles">
      <span>{data.label}</span>
      {/* <span>{data.options.length}</span> */}
    </div>
  );

  const roleoptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "500+", label: "500+" },
  ];

  const expOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const workModeOptions = [
    { value: "remote", label: "remote" },
    { value: "hybrid", label: "hybrid" },
    { value: "In-office", label: "In-office" },
  ];

  const paySalaryOptions = [
    { value: "0L", label: "0L" },
    { value: "10L", label: "10L" },
    { value: "20L", label: "20L" },
    { value: "30L", label: "30L" },
    { value: "40L", label: "40L" },
    { value: "50L", label: "50L" },
    { value: "60L", label: "60L" },
    { value: "70L", label: "70L" },
  ];

  const techStackptions = [
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "GoLang", label: "GoLang" },
    { value: "Ruby/Rails", label: "Ruby/Rails" },
    { value: "C++", label: "C++" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Django", label: "Django" },
    { value: "C#", label: "C#" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Flask", label: "Flask" },
    { value: "Typescript", label: "Typescript" },
    { value: "AWS", label: "AWS" },
    { value: "Javascript", label: "Javascript" },
    { value: "Rust", label: "Rust" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "React", label: "React" },
  ];

  // const handleFilterChange = () => {
  //     // Combine all selected options and input value

  // };
  const AllFilters = {
    enggOptions: selectedOptions,
    role,
    experience,
    workMode,
    paySalary,
    companyName,
    techStack
  };
  useEffect(() => {
    onFilterChange(AllFilters);
  }, [companyName, experience, workMode, paySalary, role, selectedOptions,techStack]);

  console.log(AllFilters, "AllFilters");
  // onFilterChange(AllFilters);
  console.log(selectedOptions, "selectedOptionsFinal");

  return (
    <div className="container">
      <div className="filter-container">
        <div className="label-container">
          {selectedOptions.length >= 1 && <label>Roles</label>}
          <Select
            className="filters"
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            isMulti
            onChange={setSelectedOptions}
            placeholder={"Roles"}
          />
        </div>
        <div className="label-container">
          {role != "" && <label>Roles</label>}

          <Select
            className="filters"
            isClearable={isClearable}
            options={roleoptions}
            onChange={(selected) => setRole(selected?.value)}
            placeholder={"Number Of Employees"}
          />
        </div>

        <div className="label-container">
          {experience != "" && <label>Experience</label>}

          <Select
            className="filters"
            isClearable={isClearable}
            options={expOptions}
            onChange={(selected) => setExperience(selected?.value)}
            placeholder={"Experience"}
          />
        </div>

        <div className="label-container">
          {workMode != "" && <label>Remote</label>}

          <Select
            className="filters"
            isClearable={isClearable}
            options={workModeOptions}
            onChange={(selected) => setWorkMode(selected?.value)}
            placeholder={"Remote"}
          />
        </div>
        <div className="label-container">
          {techStack != "" && <label>Tech Stack</label>}

          <Select
            className="filters"
            isClearable={isClearable}
            options={techStackptions}
            onChange={(selected) => setTechStack(selected?.value)}
            placeholder={"Tech Stack"}
          />
        </div>
        <div className="label-container">
          {paySalary != "" && <label>Min Base Pay</label>}

          <Select
            className="filters"
            isClearable={isClearable}
            options={paySalaryOptions}
            onChange={(selected) => setPaySalary(selected?.value)}
            placeholder={"Minimum Base Pay Salary"}
          />
        </div>
        <div className="company-filter-container filters">
          {companyName != "" && <label>Company Name</label>}
          <input
            type="text"
            className="company-filter"
            placeholder="Search Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
