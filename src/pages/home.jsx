import React, { useEffect, useState } from 'react'

import "./home/home.css"
import ADDIMG from "../Assets/image/ad-banner-sample.png"


import { pripareModelData } from './home/homeUtils'
import { useHomeContext } from '../context/homeContext'


function Home() {
  const {displayType} = useHomeContext()
  const sampleProduct = pripareModelData(displayType)
  return (
    <div className="root-wrap">
      <div className="container p-3">
        <AdNotice />
        <SearchBar />
        <BodyList data={sampleProduct} type={displayType} />
      </div>
    </div>
  )
}

export default Home;

const BodyList = (props) => {
  const { data, type } = props
  const showModels = {
    grid : <GridModel data={data} />,
    list : <ListModel data={data} />,
    hor : <HorModel data={data} />,
  }
  return (
    <>
      {showModels?.[type]}
    </>
  )
}


const GridModel = props => {
  const { data } = props
  return(
    <div className="row mt-5 list-item-wrapper">
      {
        data?.map((item, i)=>{
          return(
            <div key={i} className="col-md-6 list-card m-3 p-4">
              
              <div className="row">
                <div className="col-md-6 card-top">
                  <h4>{item?.platform}</h4>
                  <button className='btn btn-primary '>
                  <a className="text-light"href="">Go to {item?.platform}</a></button>
                </div>
                <div className="col-md-6 img-brand-logo">
                  <img src={item?.platFormLogo} alt="" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-5">
                  <div className="product-img-wrapper">
                    <img src={item?.product?.image} alt="product image" />
                  </div>
                </div>
                <div className="col-md-7 p-0 pdct-info">
                  <h3 className='product-label'>{item?.product?.name}</h3>
                  <h3 className='product-price m-0'>₹{item?.product?.salePrice}</h3>
                  <p className="product-offer-detail mb-2">
                    <span className="pdct-regular-price">MRP ₹{item?.product?.regularPrice}</span>
                    <span className='pdct-off-rate'>&nbsp;({item?.product?.offerPercentage}% Off)</span>
                  </p>
                  <p className='avlb-label'>Available size</p>
                  <ul className="pdct-size-list-wrapper">
                    {
                      item?.product?.size?.map((size, i) => (
                        <li key={i}>{size}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              
              <div className="row product-detail-wrapper">
                <h3 className="product-detail-label mt-4">Product Details & Reviews</h3>
                <ul className="col-md-12 ms-3">
                  {
                    item?.product?.detailsAndReview?.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

const ListModel = (props) => {
  const { data } = props
  return(
    <div className="row mt-5 list-model-wrapper">
      {
        data?.map((data, i) => {
          return(
            <div key={i} className="col-md-3 p-3">
              <div className="card card-override" >
                <div className="row m-3">
                  <div className="col-md-6 ">
                    <h5 className="card-title">{data?.platform}</h5>
                    <a className="btn btn-primary list-pltf-btn" href="...">Go to Amazon</a>
                  </div>
                  <div className="col-md-6 item-right">
                    <img className="card-img-top-brand-icon" src={data?.platFormLogo} alt="Card image cap" />
                  </div>
                </div>
                <div className="pdct-img-wrapper">
                  <img className="card-img-top pdct-img-list-mdl" src={data?.product?.image} alt="Card image cap" />
      
                </div>
                
                <div className="card-body">
                  <h6 className="card-title f-left">{data?.product?.name}</h6>
                  <h6 className="card-title f-right">₹ {data?.product?.salePrice}</h6>
                </div>
              </div>
            </div>
          )
        })
      }
     

    </div>
  )
}

const HorModel = (props) => {
  const { data } = props
  return(
    <div className="row mt-5 list-hor-wrapper">

      {
        data?.map((item, i) =>{
          return(
            <div key={i} className="col-md-3 p-3">
              <div className="card card-override" >
                <div className="row m-3">
                  <div className="col-md-6 p-0">
                    <h5 className="card-title">{item?.platform}</h5>
                    
                  </div>
                  <div className="col-md-6 item-right">
                    <img className="card-img-top-brand-icon" src={item?.platFormLogo} alt="Card image cap" />
                  </div>
                </div>
                {
                  item?.products?.map((product,i) =>(
                    <div className="pdct-img-wrapper mb-3">
                      <img className="card-img-top pdct-img-list-mdl" src={product?.image} alt="Card image cap" />
                      <div className="card-body">
                        <h6 className="card-title f-left">{product?.name}</h6>
                        <h6 className="card-title f-right">₹ {product?.salePrice}</h6>
                        <a className="btn  btn-outline-primary list-pltf-btn" href="...">Go to {item?.platform}</a>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          )
        })
      }

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
  const { displayType, setDisplayType } = useHomeContext()
  const { options } = props;

  return(
    <div className="tabber-wrap">
      <div className="tabber">
        {
          options.map((option, index) => {
            const grid = displayType === "grid" ? "active" : "";
            const hor = displayType === "hor" ? "active" : "";
            const list = displayType === "list" ? "active" : "";
            return(
              <>
                <input type="radio" name='display-style' id={option.value} defaultChecked={option?.value === displayType ? true : false} onClick={()=>setDisplayType(option.value)}/>
                <label htmlFor={ option.value } className="label">
                  {option?.value === "grid" && <i className={`bi bi-grid-fill ${grid}`}></i>}
                  {option?.value === "hor" && <i className={`bi bi-square-half ${hor}`}></i>}
                  {option?.value === "list" && <i className={`bi bi-grid-3x3-gap-fill ${list}`}></i>}
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
          <img className='postion-absolute img-ad-banner' src={ADDIMG} alt="" />
        </div>
      </div>
    </div>
  )
}