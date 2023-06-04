import React from 'react'


const developers = [
    { name: 'Md Nayem Ali', job: 'Full Stack Developer', company: 'BDves' },
    { name: 'Parvaj Ali', job: 'WordPress Developer', company: 'BDves' },
    { name: 'Tanzil Islam', job: 'Backend Developer', company: 'BDves' },
    { name: 'Shagor Ali', job: 'Next Js Developer', company: 'BDevs' },
    { name: 'Hasibul Islam', job: 'Fron-End Developer', company: 'BDevs' }
  ];
  
  
  const singleDevelopers = ['Md Nayem Ali', 'Parvaj Ali', 'Tanzil Islam', 'Shagor Ali', 'Hasibul Islam'];


  export const Pactice = () => {
    return (
        <div className='border'>
            <h1>Pactice 01: Props, map, dynamic data</h1>
            {/* {
          singleDevelopers.map(singleDeveloper => <Person name={singleDeveloper} />)
        } */}

            {
                developers.map(developer => <Person name={developer.name} job={developer.job} />)
            }
        </div>
    );
}


function Person(props) {
    return (
        <div className='person'>
            <h4>developer name :  {props.name}</h4>
            <p>job == {props.job}</p>
        </div>
    );
}
