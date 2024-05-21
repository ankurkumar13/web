import React from 'react';

function About(props){
    return (
        <div>
        <h1>{props.name}</h1>
        <h4>{props.position}</h4>
        <div className="about">
        <table>
        <tr>
          <tr>{props.pname}</tr>
          <th>{props.fname}</th>
          <th>{props.mname}</th>
          <th>{props.dob}</th>
          <th>{props.birthplace}</th>
          <th>{props.maritalst}</th>
          <th>{props.spousename}</th>
          <th>{props.children}</th>
          <th>{props.qualification}</th>
          <th>{props.profession}</th>
          <th>{props.permaddress}</th>
          <th>{props.presaddress}</th>
          <th>{props.email}</th>
          <th>{props.pheld}</th>
          <th>{props.publications}</th>
          <th>{props.hobbies}</th>
          <th>{props.countriesvisited}</th>
          <th>{props.assandint}</th>

        </tr>
        </table>
        </div>
        </div>
    );
}

function Members(){
    return (
        <div className="header">
            <button class="btn"><i class="fa fa-home"></i></button>
            <About
            name="SHRI JAGDEEP DHANKAR"
            POSITION="CHAIRMAN OF RAJYA SABHA" />
        </div>
    );
}

export default Members;