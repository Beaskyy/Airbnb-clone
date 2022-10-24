import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid fixed-bottom bg-white pt-3" style={{borderTop: '1px solid #dddddd'}}>
        <div className="row">
          <div className="col-md-5">
            <div className="copy">
              <div className="col"><p className='foot'>&copy; 2022 Airbnb, Inc.</p> </div>
              <div className="col">
                <p className='foot'>Privacy</p>
              </div>
              <div className="col">
                <p className='foot'>Terms</p>
              </div>
              <div className="col">
                <p className="foot">Sitemap</p>
              </div>
            </div>
               
          </div>
          <div className="col-md-7">
            <div className="float-end">
              <div className="row">
                <div className="col-md-3">
                  <p className='foot'>English(US)</p>
                </div>
                <div className="col-md-3">
                  <p className='foot'>$USD</p>
                </div>
                <div className="col-md-6">
                  <p className='foot'>Support & resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer