import logo from "../logo.png";
import loksabha from "../loksabha.png";
import Name from "../components/Name";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://rsdoc.nic.in/MemberGetData/Getofficersofrs")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <img className="logo" src={logo} alt="satyamev Jayate" />
      <div className="ab">
        <h2 className="about">RAJYA SABHA</h2>
        <h5 style={{ color: "black" }} className="about">
          COUNCIL OF STATES
        </h5>
      </div>
      <img className="loksabha" src={loksabha} alt="loksabha" />
      <div className="members">
        {data && data.map((d) => (
          <Name key={d.MP_CODE} name={d.name} position={d.type} />
        ))}
      </div>
      <div className="no">
        <p>SITTING MEMBERS OF RAJYA SABHA</p>
        <p>FORMER MEMBERS OF RAJYA SABHA</p>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <form class="example" action="action_page.php" />
        <input type="text" placeholder="Search about members" name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="container"> 
      <img className="logo" src={logo} alt="satyamev Jayate"/>
      <div className="ab">
        <h2 className="about">RAJYA SABHA</h2>
        <h5 style={{color: "black"}}className="about">COUNCIL OF STATES</h5>
      </div>
      <img className="loksabha" src={loksabha} alt="loksabha"/>
      <div className="members">
        <Name
        name="&nbsp;&nbsp;SHRI JAGDEEP DHANKHAR"
        position="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HON'BLE CHAIRMAN | RAJYA SABHA"
        />
        <Name
        name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHRI HARIVANSH"
        position="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HON'BLE DEPUTY CHAIRMAN | RAJYA SABHA"
        />
        <Name
        name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHRI PIYUSH GOYAL"
        position="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEADER OF THE HOUSE | RAJYA SABHA"
        />
        <Name
        name="SHRI MALLIKARJUN KHARGE"
        position="LEADER OF THE OPPOSITION | RAJYA SABHA"
        />
      </div>
      <div className="no">
        <p>SITTING MEMBERS OF RAJYA SABHA</p>
        <p>FORMER MEMBERS OF RAJYA SABHA</p>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <form class="example" action="action_page.php"/>
        <input type="text" placeholder="Search about members" name="search"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
    </div> */
}
