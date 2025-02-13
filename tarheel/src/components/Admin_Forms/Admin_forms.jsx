


import React, { useState, useEffect } from 'react';
import './Admin_forms.css';

const AdminPortal = () => {
  // States for credentials and modals
  const [storedCredentials, setStoredCredentials] = useState({
    username: '',
    password: '',
  });

  // const [holidayHours, setHolidayHours] = useState([]);
  // const [newHoliday, setNewHoliday] = useState({ day: '', description: '' });




  const [spotlightContent, setSpotlightContent] = useState([]);
  const [newSpotlight, setNewSpotlight] = useState({ title: '', desc: '' });


  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  // Load stored credentials from localStorage
  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('credentials')) || {
      username: 'admin',
      password: '123',
      
    };

    // Load stored holiday hours or use an empty array
    // const holidays = JSON.parse(localStorage.getItem('holidayHours')) || [];
   
     // Load stored news or use an empty array
    //  const news = JSON.parse(localStorage.getItem('newsItems')) || [];
     const Spotlight = JSON.parse(localStorage.getItem('spotlightContent')) || [];

    setStoredCredentials(credentials);
    setNewUsername(credentials.username);
    setNewPassword(credentials.password);
    // setHolidayHours(holidays);
    setSpotlightContent(Spotlight);

  
  }, []);

  const handleUpdate = () => {
    const updatedCredentials = { username: newUsername, password: newPassword };
    localStorage.setItem('credentials', JSON.stringify(updatedCredentials));
    setStoredCredentials(updatedCredentials); // Update state to reflect changes
    alert('Credentials updated successfully!');
    closeModal(); // Close the modal
  };
 
  // Add new holiday
  // const addHoliday = () => {
  //   if (!newHoliday.day || !newHoliday.description) {
  //     alert('Please fill out all fields.');
  //     return;
  //   }
  //   const updatedHolidays = [...holidayHours, { ...newHoliday}];
  //   setHolidayHours(updatedHolidays);
  //   localStorage.setItem('holidayHours', JSON.stringify(updatedHolidays));
  //   setNewHoliday({ day: '', description: '' });
  //   alert('Holiday added successfully!');
  //   closeModal();
  // };

  const handleNewsUpdate = () => {
    if (!newSpotlight.title|| !newSpotlight.desc) {
        alert('Please fill out all fields.');
        return;
      }
      const updatedSpotlight = [...spotlightContent, { ...newSpotlight}];
      setSpotlightContent(updatedSpotlight);
      localStorage.setItem('spotlightContent', JSON.stringify(updatedSpotlight));
      setNewSpotlight({ day: '', description: '' });
      alert('Announcement added successfully!');
      closeModal();
  };

  // const deleteHoliday = (index) => {
  //   const updatedHolidays = holidayHours.filter((_, i) => i !== index);
  //   setHolidayHours(updatedHolidays);
  //   localStorage.setItem('holidayHours', JSON.stringify(updatedHolidays));
  //   alert('Holiday deleted successfully!');
  // };

  const deleteSpotlight = (index) => {
    const updatedSpotlight = spotlightContent.filter((_, i) => i !== index);
    setSpotlightContent(updatedSpotlight);
    localStorage.setItem('spotlightContent', JSON.stringify(updatedSpotlight));
    alert('Announcement deleted successfully!');
  };
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner-img">
        <h2 className="i-title">Admin Portal</h2>
      </div>

      {/* Panel Section */}
      <div className="admin-panels">
        <div className="panel" onClick={() => setActiveModal('profile')}>
          <h3>Profile Credentials</h3>
          <p>Update your admin profile details such as username and password.</p>
        </div>

        {/* <div className="panel" onClick={() => setActiveModal('holidayHours')}>
          <h3>Holiday Hours</h3>
          <p>Set or modify holiday hours for the organization.</p>
        </div> */}

        <div className="panel" onClick={() => setActiveModal('spotlight')}>
          <h3>Announcements</h3>
          <p>Highlight special announcements or features for the users.</p>
        </div>
        <div className="panel" onClick={() => setActiveModal('viewnews')}>
          <h3>View Active Announcements</h3>
          <p>Review the latest announcements and remove outdated ones.</p>
        </div>
      </div>

       {/* Panel Section */}
       <div className="admin-panels">
        {/* <div className="panel" onClick={() => setActiveModal('viewhours')}>
          <h3>View Holiday Hours</h3>
          <p> View Posted Special Hours and delete them if needed</p>
        </div> */}

        {/* <div className="panel" onClick={() => setActiveModal('viewnews')}>
          <h3>View Active Announcements</h3>
          <p>Review the latest announcements and remove outdated ones.</p>
        </div> */}

        
      </div>

    {/* {activeModal === 'viewhours' && (
        <Modal title ="Holiday Hours Listed" onClose={closeModal}>
            <div className="content-hrs">

          
           
          <br />
           <div className="holiday-grid">
           {holidayHours.length > 0 ? (
           holidayHours.map((holiday, index) => (
          <div className="holiday-item" key={index}> 
        <strong>{holiday.day}:</strong> {holiday.description}
        <br />
              <button className="delete-btn" onClick={() => deleteHoliday(index)}>
                Delete
              </button>
            </div>
           ))
         ) : (
            <p>No holiday hours set.</p>
             )}
                 </div>
             </div>
        </Modal>
    )} */}

   {activeModal === 'viewnews' && (
    <Modal title="View Latest News Listed" onClose={closeModal} >
        <div className="news">
     
     
        <br />
        <div className="holiday-grid1">
        {spotlightContent.length > 0 ? (
          spotlightContent.map((Spotlight, index) => (
            <div className="holiday-item" key={index}>
              <strong>{Spotlight.title}:</strong> {Spotlight.desc}
              <br />
              <button className="delete-btn" onClick={() => deleteSpotlight(index)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No announcements yet.</p>
        )}


      </div>
    </div>
    </Modal>
   )}
{activeModal === 'profile' && (
        <Modal title="Change Profile Credentials" onClose={closeModal}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <label>Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter new username"
            />
            <label>Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <button type="submit">Save</button>
          </form>
        </Modal>
      )}


      {/* Modals for Holiday Hours */}
      {/* {activeModal === 'holidayHours' && (
        <Modal
         title="Holiday Hours"
          onClose={closeModal}
        //   onSave={addHoliday}
        //   defaultValues={newHoliday}
          >
        <form
         onSubmit={(e) => {
            e.preventDefault();
            addHoliday();
          }}
          >
         
          <label>Description</label>
          <input
            type="text"
            value={newHoliday.day}
            onChange={(e) =>
              setNewHoliday({ ...newHoliday, day: e.target.value })
            }
            placeholder="Enter holiday description"
          />
          <label>Timing</label>
          <input
            type="text"
            value={newHoliday.description}
            onChange={(e) =>
              setNewHoliday({ ...newHoliday, description: e.target.value })
            }
            placeholder="Enter holiday description"
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
      )} */}

      {/* Modals for Spotlight */}
      {activeModal === 'spotlight' && (
        <Modal title="Announcements" onClose={closeModal}>
          <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNewsUpdate();
          }}
          >
            <label>Title</label>
          <input
            type="text"
            value={newSpotlight.title}
            onChange={(e) =>
              setNewSpotlight({ ...newSpotlight, title: e.target.value })
            }
            placeholder="Enter holiday description"
          />
          <label>Description</label>
          <input
            type="text"
            value={newSpotlight.desc}
            onChange={(e) =>
              setNewSpotlight({ ...newSpotlight, desc: e.target.value })
            }
            placeholder="Enter description"
            />
            <button type="submit">Save</button>
          </form>
        </Modal>
      )}
    </div>
  );
};




const Modal = ({ title, onClose, children }) => {

    // const updatedHolidays = (e) => {
    //          e.preventDefault();
    //          onSave(); // Trigger the save function passed from parent
    //        };
        
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  };
  
export default AdminPortal;
