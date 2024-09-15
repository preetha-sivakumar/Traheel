import React,{useEffect,useRef} from 'react'
import './Services.css'
import serv from '../../assets/servs.jpg'
import dog from '../../assets/dog.png'
import vac from '../../assets/vaccine.png'
import imm from '../../assets/pic3.png'
const services1 = [
    {
      title: "Experienced Doctor",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "🩺",
    },
    {
      title: "Personalized Care",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "🦷",
    },
    {
      title: "Flexible Payment Options",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "💵",
    },
    {
      title: "Emergency Services",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "⛑️",
    },
    {
      title: "Positive Patient Reviews",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "⭐",
    },
    {
      title: "Latest Technology",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      icon: "⚙️",
    },
  ];

  const services = [
    {
      title: "Expert Knowledge & Personalized Care",
      subtitle: "Prescription Medications & Personal Consultations",
      description1: "Expert guidance, answering patient questions about medications, side effects, and interactions, catering to individual health needs, ensuring proper medication usage.",
    //   description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: imm,
      
    },
    {
      title: "Comprehensive Healthcare Support",
      subtitle: "Immunizations & Age-Appropriate Shots",
      description1: "Offering a range of vaccinations such as flu, shingles (SHINGRIX), and pneumonia shots. All staff are trained and certified to administer immunizations safely and efficiently",
      description2: "Age-Appropriate Shots: Providing vaccines for different age groups (adults, seniors, infants).",
      image: vac,
     
    },
    {
        title: "Proactive Health Management",
        subtitle: "MTM, Diabetic Testing Supplies, & Nutritional Supplements",
        description1: "Medication Therapy Management (MTM)helps patients better manage chronic conditions by ensuring they understand their treatment plans, medication adherence, and drug optimization.",
        description2: "Supplies like diabetic testing, strips, insulin and other related essentials are stocked. Additionally, mobility aids such as walkers and canes , variety of supplements and vitamins are available for individual needs.",
        image: serv,
        
        
      },
      {
        title: "Specialized Care for Pets",
        subtitle: "Veterinary Compounding",
        description1: "We provide compounding medications for pets, including flavoring or dosing adjustments, personalizing treatment for each pet.",
        image: dog,
        
        
      }
    // Add more services as needed
  ];
export const Services = () => {
    const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.querySelector('.servimg').classList.add('animate');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="serv-cont" id="service-container">
        <div className="stitle">
    <h2 class="seh2">Our Services</h2>
    <h3 class="seh3">We are committed to friendly and accessible service.</h3>
   </div>

   
    <div className="services-container">
      {services.map((service, index) => (
        <div className={`service ${index % 2 === 0 ? 'left' : 'right'}`} key={index} ref={(el) => (serviceRefs.current[index] = el)}>
          <div className="service-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="service-right">
            <h3>{service.title}</h3>
            <h2>{service.subtitle}</h2>
            <p>{service.description1}</p>
            <p>{service.description2}</p>
           
          </div>
          <br />
        </div>
          ))}
    </div>
    </div>
//     <div className="services-container">
//     <h2 className="heading">Our Services</h2>
//     <p className="subheading">
//       We are committed to a friendly and accessible service.
//     </p>
//     <div className="serv-hero">
//     <div className="services">
//       {services.map((service, index) => (
//         <div className="service" key={index}>
//           <div className="service-icon">{service.icon}</div>
//           <h3 className="service-title">{service.title}</h3>
//           <p className="service-description">{service.description}</p>
//         </div>
//       ))}
//     </div>
//     <div className="tooth-image">
//       <img
//         src={serv}
//         alt="Tooth"
//         className="tooth"
//       />
//     </div>
//     </div>
//   </div>
  )
}
