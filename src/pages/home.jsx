import React from 'react'

import { SampleBasicData } from './homeUtils';
import "./home.css"

function Home() {
  return (
    <div className="root-wrap">
      <div className="container p-4">
        <div className="row">
          <h3>In publishing and graphic design, Lorem ipsum</h3>
        </div>

        <div className="row mt-2 card-wrap">
            {
              SampleBasicData?.map((item, i)=>{
                return(
                  <div key={i} className="col-md-4 ">
                    <div className="card">
                      <img src={item?.Image} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <div className="row"> 
                        <div className="col-md-9"><h5 className="card-title"> {item?.Name} </h5></div>
                        <div className="col-md-3">
                          <img src={item?.PlatformImage} className="card-img-top" alt="..." />
                      </div>
                      </div>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-danger">Buy now</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;