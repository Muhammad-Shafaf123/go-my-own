import React, { useEffect, useState } from 'react'

import "./home.css"
import ADDIMG from "../Assets/image/ad-banner-sample.png"
import AMNICON from "../Assets/image/amazon-png-logo-vector-6701.png"


function Home() {
  return (
    <div className="root-wrap">
      <div className="container p-3">
        <AdNotice />
        <SearchBar />
        <BodyList />
      </div>
    </div>
  )
}

export default Home;

const BodyList = () => {
  return (
    <div className="row mt-5 list-item-wrapper">
      <div className="col-md-6 list-card m-3 p-4">
        <div className="row">
          <div className="col-md-6">
            <h4>Amazon</h4>
            <button className='btn btn-primary '>
            <a className="text-light"href="">Go to Amazon</a></button>
          </div>
          <div className="col-md-6 img-brand-logo">
            <img src={AMNICON} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-7"></div>
        </div>
      </div>
      <div className="col-md-6 list-card m-3 p-4">
        hii
      </div>
    </div>
  )
}

const SearchBar = () => {
  return(
    <div className="row searchbar-wrapper mt-5">
      <div className="col-md-10">
        <div className="form-group">
          <input type="text" className="form-control search-field"  placeholder="Search product" />
        </div>
      </div>
      <div className="col-md-2">
        <SwitchTabber
          options={[
            { value: 'list' },
            { value: 'grid' },
            { value: 'hor' },
          ]}
          defaultValue='tele_in'
        />
      </div>
      
    </div>
  )
}

const SwitchTabber= (props) => { 
  const { options, name, defaultValue } = props;
  const [ addClass, setAddClass ] = useState("hor");

  return(
    <div className="tabber-wrap">
      <div className="tabber">
        {
          options.map((option, index) => {
            const grid = addClass === "grid" ? "active" : "";
            const hor = addClass === "hor" ? "active" : "";
            const list = addClass === "list" ? "active" : "";
            return(
              <>
                <input type="radio" name='hai' id={option.value} defaultChecked={true} onClick={()=>setAddClass(option.value)}/>
                <label htmlFor={ option.value } className="label">
                  {option?.value === "grid" && <i className={`bi bi-grid-fill ${grid}`}></i>}
                  {option?.value === "hor" && <i class={`bi bi-square-half ${hor}`}></i>}
                  {option?.value === "list" && <i class={`bi bi-grid-3x3-gap-fill ${list}`}></i>}
                </label>
              </>
            )
          })
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