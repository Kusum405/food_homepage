import React, { useState } from 'react';
import Main_navbar from './main/Main_navbar';
import { Container, Image, Card, Row, Col, Button} from 'react-bootstrap';
import Footer from './main/Footer';
import Carousel from 'react-elastic-carousel';

const Landingpage = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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

  const catalog_delicacies = [
    {
      id: 1,
      title: "Breakfast sets",
      image: "./uploads/thakali.png",
    },
    {
      id: 2,
      title: "Nepali lunch set",
      image: "./uploads/nepalilunch.png",
    },
    {
      id: 3,
      title: "Soft Drinks",
      image: "./uploads/drink.png",
    },
    {
      id: 4,
      title: "Sea Foods",
      image: "./uploads/seafood.png",
    },
    {
      id: 5,
      title: "Coffees",
      image: "./uploads/coffee.png",
    },
    {
      id: 6,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/lunch.png",
    },
    {
      id: 7,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/breakfast.png",
    },
    {
      id: 8,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/noodle.png",
    },
    {
      id: 9,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/chips.png",
    },
    {
      id: 10,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/dinner.png",
    },
    {
      id: 11,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/fruit.png",
    },
    {
      id: 12,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/glassdrink.png",
    },
    {
      id: 13,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/cake.png",
    },
    {
      id: 14,
      title: "Lunch,Breakfast,Dinner",
      image: "./uploads/juice.png",
    },
  ]

  const best_deals = [
    {
      id: 1,
      image: "./uploads/specialpizza.png",
      name: "specialpizza",
    },
    {
      id: 2,
      image: "./uploads/burger.png",
      name: "burger",
    },
    {
      id: 3,
      image: "./uploads/weekendfood.png",
      name: "weekendfood",
    },
  ]
const food_cards=[
  {
    id: 1,
    image: "./uploads/specialpizza.png",
    name: "specialpizza",
  },
  {
    id: 2,
    image: "./uploads/burger.png",
    name: "burger",
  },
  {
    id: 3,
    image: "./uploads/weekendfood.png",
    name: "weekendfood",
  },
  {
    id: 3,
    image: "./uploads/weekendfood.png",
    name: "weekendfood",
  },
  {
    id: 4,
    image: "./uploads/weekendfood.png",
    name: "weekendfood",
  },
  {
    id: 5,
    image: "./uploads/weekendfood.png",
    name: "weekendfood",
  },
]
  return (
    <>
      <Main_navbar />
      <Container className='main'>
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
        <h5>Catalog sections<br></br>delicacies</h5>
        <Row className="catalog_row">
          {catalog_delicacies.map(catalogs => (
            <div key={catalogs.id} className="m-2 card_row">
              <Card>
                <Card.Img src={catalogs.image} alt={catalogs.title} />
              </Card>
              <Card.Title className="card_title">{catalogs.title}</Card.Title>
            </div>
          ))}
        </Row>

        <Row className='sider_row'>
          <Col xs={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="fas fa-chevron-left" />
          </Col>
          <Col xs={10} className='slider'>
            <Row>
              <Col xs={6}>
                <h5 className='delicacies'>All Delicacies</h5>
                <h5 className='grilled_lamb'>
                  Grilled <br></br> Lamb
                </h5>
                <p className='delicacy_pgh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi ultrices at pulvinar feugiat. Ultrices consequat eget magna risus, posuere dui. </p>
                <Button className='add_to_cart'>ADD TO CART</Button>
              </Col>
              <Col xs={6}>
                <Image src="./uploads/food.png" alt="Your Image" className="img-fluid food" />
              </Col>
            </Row>
          </Col>
          <Col xs={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="fas fa-chevron-right" />
          </Col>
        </Row>
        <h5>Best Deals</h5>
        <div className='best_deal d-flex flex-wrap'>
          {
            best_deals.map((bestdeal) => {
              return <div className='best_img' key={bestdeal.id}>
                <Image src={bestdeal.image} className={`img-fluid ${bestdeal.name}`} />
              </div>
            })
          }
        </div>
        <Row className='popular_food_row'>
          <Col xs={11}>
            <h5>Popular Foods</h5>
          </Col>
          <Col xs={1}>
            <h5>See All</h5>
          </Col>
          <div className='d-flex'>
          <Carousel itemsToShow={4}>
            {
              food_cards.map((food_cards) => {
                return  <Item  key={food_cards.id}>
                  <Card style={{ width: '18rem', marginRight:'10px' }}>
                    <Card.Img variant="top" src={food_cards.image} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Item>  
              })
            }
         </Carousel>
          </div>
        </Row>

      </Container>
      <Footer />
    </>
  )
}

export default Landingpage;