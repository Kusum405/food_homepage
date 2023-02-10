import React from 'react'
import Main_navbar from './main/Main_navbar';
import { Container, Image } from 'react-bootstrap';

const Landingpage = () => {

  const coupon = [
    {
      id: 1,
      discount: "20% OFF",
      code: "MONY20",
      class_name: "rect_one"
    },
    {
      id: 2,
      discount: "35% OFF",
      code: "MONY20",
      class_name: "rect_two"
    },
    {
      id: 3,
      discount: "10% OFF",
      code: "MONY20",
      class_name: "rect_three"
    },
    {
      id: 4,
      discount: "5% OFF",
      code: "MONY20",
      class_name: "rect_four"
    },
  ]

  return (
    <div>
      <Main_navbar />
      <Container>
        <Image src="./uploads/bannerimage.png" alt="Your Image" className="img-fluid top_image" />
        <h5>Coupon Code</h5>
        <div className="d-flex flex-wrap rect_row">
          {
            coupon.map((coupon) => {
              return <div key={coupon.id}>
                <div className='front-circle'>

                </div>
                <div className={`${coupon.class_name} d-flex align-items-center`}>
                  <div>
                    <h6 className='discount'> {coupon.discount}</h6>
                  </div>
                  <div className='code'>
                    <h6 className='code_font'>Code:<br></br>{coupon.code}</h6>
                  </div>
                  <div className='copy_code'>
                    <h6 className='code_copy'>Copy Code</h6>
                  </div>
                  <div className='back-circle'>

                  </div>
                </div>

              </div>
            })

          }
        </div>
      </Container>

    </div>
  )
}

export default Landingpage;