import React, { useState } from 'react'
import './Filter.css';
import Select from 'react-select'

export default function Filter({onFilterChange}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [role, setRole] = useState(null);
    const [experience, setExperience] = useState(null);
    const [workMode, setWorkMode] = useState(null);
    const [paySalary, setPaySalary] = useState(null);
    const [companyName, setCompanyName] = useState('');

    const enggOptions = [
        { value: 'frontend', label: 'frontend' },
        { value: 'backend', label: 'backend' },
        { value: 'fullstack', label: 'fullstack' },
        { value: 'ios', label: 'ios' },
        { value: 'Flutter', label: 'Flutter' },
        { value: 'React Native', label: 'React Native' },
        { value: 'Android', label: 'Android' },
        { value: 'Frontend', label: 'Frontend' },
        { value: 'Tech Lead', label: 'Tech Lead' },
        { value: 'Dev-Ops', label: 'Dev-Ops' },
        { value: 'Data Engineer', label: 'Data Engineer' },
        { value: 'Data Science', label: 'Data Science' },
        { value: 'Computer-Vision', label: 'Computer-Vision' },
        { value: 'Nlp', label: 'Nlp' },
      ];
    const designOptions = [
        { value: 'Designer', label: 'Designer' },
        { value: 'Design Manager', label: 'Design Manager' },
        { value: 'Graph Manager', label: 'Graph Manager' },  
    ];
    const productOptions = [
        { value: 'Product Manager', label: 'Product Manager' },
    ];
    const groupedOptions = [
        {
            label: 'Engineering',
            options: enggOptions,
        },
        {
            label: 'Design',
            options: designOptions,
        },
        {
            label: 'Product',
            options: productOptions,
        },
    ]
    const formatGroupLabel = (data)=>(
        <div className='group-styles'>
            <span>{data.label}</span>
            {/* <span>{data.options.length}</span> */}
        </div>
    );

    const roleoptions=[
        {value:'1-10',label:'1-10',},
        {value:'11-20',label:'11-20',},
        {value:'21-50',label:'21-50',},
        {value:'51-100',label:'51-100',},
        {value:'101-200',label:'101-200',},
        {value:'201-500',label:'201-500',},
        {value:'500+',label:'500+',},
    ];

    const expOptions=[
        {value:'1',label:'1'},
        {value:'2',label:'2'},
        {value:'3',label:'3'},
        {value:'4',label:'4'},
        {value:'5',label:'5'},
        {value:'6',label:'6'},
        {value:'7',label:'7'},
        {value:'8',label:'8'},
        {value:'9',label:'9'},
        {value:'10',label:'10'},
    ];

    const workModeOptions=[
        {value:'remote',label:'remote'},
        {value:'hybrid',label:'hybrid'},
        {value:'In-office',label:'In-office'}
    ];

    const paySalaryOptions=[
        {value:'0L',label:'0L'},
        {value:'10L',label:'10L'},
        {value:'20L',label:'20L'},
        {value:'30L',label:'30L'},
        {value:'40L',label:'40L'},
        {value:'50L',label:'50L'},
        {value:'60L',label:'60L'},
        {value:'70L',label:'70L'},
    ];
    
    const handleFilterChange = () => {
        // Combine all selected options and input value
        const filters = {
            enggOptions: selectedOptions,
            role,
            experience,
            workMode,
            paySalary,
            companyName
        };
        onFilterChange(filters);
    };
    
    console.log(selectedOptions,'selectedOptionsFinal')

  return (
    <div>
        <div className='filter-container'>
            <div className='filters' >
                <Select defaultValue={enggOptions[1]} options={groupedOptions} formatGroupLabel={formatGroupLabel} isMulti onChange={setSelectedOptions}/>
            </div>
            <Select className='filters' options={roleoptions} onChange={(selected) => setRole(selected?.value)}/>
            <Select className='filters'  options={expOptions} onChange={(selected) => setExperience(selected?.value)}/>
            <Select className='filters'  options={workModeOptions} onChange={(selected) => setWorkMode(selected?.value)}/>
            <Select className='filters'  options={paySalaryOptions} onChange={(selected) => setPaySalary(selected?.value)}/>
            <div className='company-filter-container filters'>
                <input type="text" className='company-filter' placeholder='Search Company Name' onChange={(e) => setCompanyName(e.target.value)}/>
            </div>
            
        </div>
        
    </div>
  )
}
