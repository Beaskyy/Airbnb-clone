import { data, icons } from '../data/data'
import './Listing.css'

// import Swiper core and required modules
import { Navigation, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import { useEffect, useState } from 'react';



const Listing = () => {
  const [loading, setLoading] = useState(true)
  const [isActive, setActive] = useState(null);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [isActive])

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector('#header');
      if(window.pageYOffset > 0) {
        nav.classList.add('add-shadow')
      }else {
        nav.classList.remove('add-shadow')
      }
    })
  }, [])
  
  return (
    <>
      <div className='container-fluid' id='header' style={{marginTop: '100px'}}>
      <div className="row">
      <div className="col-md-11">
          <div className="row">
      <div className="col main-menu">

        {
          loading ? (
            <div className="col-md-12">
              <div className="row">
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              <div className="col">
              <div className=" mb-2 skeleton skeleton-circle"></div>
              <div className="mb-3 skeleton skeleton-p"></div>
              </div>
              </div>
            </div>
          ) : (
            
          <Swiper
      modules={[Navigation, EffectFade, ]}
      spaceBetween={10}
      slidesPerView={12}
      navigation
      effect
      speed={500}
      
    >
          {
            icons.map((icon, index) => {
              const {image, name} = icon
              return (
                <SwiperSlide key={index}>
        <div className={`menu ${isActive === index && 'active'} text-center mt-3`} onClick={() => setActive(index)}>
          <span><img src={image} className='img-fluid mb-2' width={25} alt="" /></span>
          <p className='icons'>{name}</p>
        </div>
      </SwiperSlide>
              )
            })
          }
    </Swiper> 
        
          
          )
        }
        </div>

        </div>
        </div>
        <div className="col-md-1">
          <div className="filter" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <img src="https://cdn-icons-png.flaticon.com/512/6514/6514708.png" width={15} alt="" />
          Filters
          </div>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Filters</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  This is where the filter item will be
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-dark">Show 645 homes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid mt-3'>
      {
        loading ? (
          <div className="row">
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-img"></div>
              <div className="row">
                <div className="col-md-5">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
              <div className="mb-2 skeleton skeleton-head"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
              <div className="mb-5 skeleton skeleton-head"></div>
                </div>
              </div>
            </div>
          </div>
        ) : <div className="row">
        {
          data.map((item, index) => {
            const {images, state, host, price, date, rating} = item
            return (
              <div className='col-md-3 mb-4' key={index}>
                <Swiper
    // install Swiper modules
    modules={[Navigation, EffectFade, ]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    effect
    speed={500}

  >
    {
      images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
      <img src={image} className='list' alt="" />
    </SwiperSlide>
        )
        
      })
    }
  </Swiper>
                
                <div className="address">
                  <div className="row mt-2">
                    <div className="col-md-9">
                      <span className='city'>{state}</span>
                    </div>
                    <div className="col-md-3">
                      <span className='rating'><i className="fa-solid fa-star"></i>{rating}</span>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span className='host'>{host}</span>
                    </div>
                    <div className="col-md-12">
                      <span className='host'>{date}</span>
                    </div>
                    <div className="col-md-12">
                      <span className='city'>{price} <span className='price'>night</span></span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
      }
      
    </div>
    </>
  )
}

export default Listing