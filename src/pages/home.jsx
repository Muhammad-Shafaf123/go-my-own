import React, { useEffect, useState } from 'react'

import "./home.css"
import ADDIMG from "../Assets/image/ad-banner-sample.png"
import ICONHOR1 from "../Assets/image/Group 17.png"
import ICONVER2 from "../Assets/image/Group 2.svg"

function Home() {
  return (
    <div className="root-wrap">
      <div className="container p-3">
        <AdNotice />
        <SearchBar />
      </div>
    </div>
  )
}

export default Home;

const SearchBar = () => {
  return(
    <div className="row searchbar-wrapper mt-5">
      <div className="col-md-9">
        <div className="form-group">
          <input type="text" className="form-control search-field"  placeholder="Search product" />
        </div>
      </div>
      <div className="col-md-3">
        <SwitchTabber
          name='booking_type'
          label='Booking Type'
          options={[
            { value: 'tele_in', label: 'Tele in', img : ICONHOR1 },
            { value: 'walk_in', label: 'Walk in', img : ICONVER2 },
          ]}
          defaultValue='tele_in'
        />
      </div>
      
    </div>
  )
}






const SwitchTabber= (props) => { 
  const { options, name, defaultValue } = props;
  const [ toggled, setToggled ] = useState(null);

  useEffect(() => {
    setToggled(defaultValue);
  }, [ defaultValue ]);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    console.log(value);
    setToggled(value);
  };

  return(
    <div className="tabber-wrap">
      <div className="tabber">
        {
          options.map((option, index) => (
            <>
              <input type="radio" name='hai' id={option.value} />
              <label htmlFor={ option.value } className="label">
                <img src={option?.img} alt="" style={{width: "4rem"}} />
              </label>
            </>
          ))
        }
        <div className="blob" />
      </div>
            
    </div>
    
  );
};



const AdNotice = () =>{
  return (
    <div className="add-notice-wrapper p-5 mt-3">
      <div className="row">
        <div className="col-md-6 content-section">
          <h1 className="ad-heading mt-3">Lorem ipsum is a placehold text commonly used</h1>
          <p className='ad-sub-text mt-4'>
            ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </p>
          <button className='btn mt-3'>More</button>
        </div>
        <div className="col-md-6 postion-relative ">
          <img className='postion-absolute img-ad-banner ' src={ADDIMG} alt="" />
        </div>
      </div>
    </div>
  )
}