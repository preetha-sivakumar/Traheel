import React from 'react'
import './Immun.css'

import img from '../../assets/img1.jpeg'
import img1 from '../../assets/img2.jpeg'

import app from '../../assets/app.jpg'
const Immunizations = () => {

const openPdf = (pdfPath) =>{
  window.open(pdfPath , '_blank');
};
  const vaccines = [
    {
      name: "COVID-19",
      age: "12+ years",
      dosage: "1 dose 8 weeks after last dose",
     
    },
    {
      name: "Influenza",
      age: "7+ years",
      dosage: "1 dose every year",
      pdfPath : "/updated_Flu-vaccine.pdf",
    },
    {
      name: "Tdap",
      age: "19+ years",
      dosage: "1 dose every 10 years",
      pdfPath : "/updated_Tetanus-vaccine.pdf",
    },
    {
      name: "Shingles (Immunocompromised)",
      age: "19+ years",
      dosage: "2 doses at least 2 months apart",
      pdfPath : "/updated_Shingles-vaccine.pdf",
    },
    {
      name: "Shingles (General)",
      age: "50+ years",
      dosage: "2 doses at least 2 months apart",
      pdfPath : "/updated_Shingles-vaccine.pdf",
    },
    {
      name: "RSV (Qualifying Conditions)",
      age: "60+ years",
      dosage: "1 dose",
      pdfPath : "/updated_RSV-vaccine.pdf",
    },
    {
      name: "RSV (General)",
      age: "75+ years",
      dosage: "1 dose",
      pdfPath : "/updated_RSV-vaccine.pdf",
    },
    {
      name: "Pneumonia (Qualifying Conditions)",
      age: "19+ years",
      dosage: "1 dose",
      pdfPath : "/updated_Pneumonia-vaccine.pdf",
    },
    {
      name: "Pneumonia (General)",
      age: "65+ years",
      dosage: "1 dose",
      pdfPath : "/updated_Pneumonia-vaccine.pdf",
    },
    {
      name: "Hepatitis B",
      age: "19+ years",
      dosage: "2 doses at least 2 months apart",
      pdfPath : "/updated_HepB-vaccine.pdf",
    },
  ];

  const newlink = () => {
    window.open('https://www.vaxassist.com/eligibility', '_blank');
  };
  return (
    <div className="immunizations-conatiner">
        <div className="banner-i">
            <h2 class="i-title">Immunizations</h2>
          </div>
          <div className="i-cards">
            <div className="i-left">
            <p>Unsure of what you need? 
              <br />
              Check to see.</p>
            <button class="btn-i" onClick={newlink} >Check Now</button>
            </div>
             <div className="i-right">
             
              <img src={img} alt=""  class="iimg"/>
              <br />
              <img src={img1} alt="" class="iimg1" />
             </div>
          </div>

          <div className="vaccine">
              
  


      {vaccines.map((vaccine, index) => (
        <div key={index} className="vaccine-card" onClick={() => openPdf(vaccine.pdfPath)}>
          <h2>{vaccine.name}</h2>
          <p><strong>Age Group:</strong> {vaccine.age}</p>
          <p><strong>Dosage:</strong> {vaccine.dosage}</p>
        </div>
      ))}
    </div>


    <div className="i-cards bg">
            <div className="i-left">
            <p>Appointments not necessary.
              <br />
              Just Walk In</p>
              <div className="time">

           
              <p>9:00 AM - 5:30 PM on <span>Weekdays</span> 
              <br />
              <br />
              9:00 AM to 1:00 PM on <span>Saturday</span></p>
              </div>
            </div>
             <div className="i-right ">
             {/* <p>9:00 AM - 5:30 PM on Weekdays
              <br />
              <br />
              9:00 AM to 1:00 PM on Saturday</p> */}

              <img src={app} alt="" class="aimg"/>
             
             </div>
          </div>


       </div>


        
 
  )
}

export default Immunizations