import React, { useState } from 'react';
import Main_navbar from './main/Main_navbar';
import { Container, Image, Card, Row, Col, Button } from 'react-bootstrap';
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
  const food_cards = [
    {
      id: 1,
      image: "./uploads/chessepizza.png",
      title: "Cheese Pizza - with extra toppines and cheese",
      discount: "50% OFF",
      price: "Rs 500",
    },
    {
      id: 2,
      image: "./uploads/grove.png",
      title: "Koconut Grove - Super Delicious Food ",
      price: "Rs 620",
    },
    {
      id: 3,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 256",
    },
    {
      id: 4,
      image: "./uploads/thakalikhana.png",
      title: "Thakhali Khana Set - Nepali Food",
      price: "Rs 500",
    },
    {
      id: 5,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
  ]

  const breakfast_cards = [
    {
      id: 1,
      image: "./uploads/break1.png",
      title: "Tosted Bread, Massed Eggs, Milk rice",
      discount: "50% OFF",
      price: "Rs 500",
    },
    {
      id: 2,
      image: "./uploads/break2.png",
      title: "Fruits, Rosted Bread, Juice, with cheery",
      discount: "15% OFF",
      price: "Rs 620",
    },
    {
      id: 3,
      image: "./uploads/break3.png",
      title: "Chiken suses, tosted bread, beans with tamato ",
      price: "Rs 256",
    },
    {
      id: 4,
      image: "./uploads/break4.png",
      title: "Buff rosted, french fries, green vegs with picles",
      discount: "10% OFF",
      price: "Rs 500",
    },
    {
      id: 5,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
    {
      id: 6,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
    {
      id: 7,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
    {
      id: 8,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
    {
      id: 9,
      image: "./uploads/chburger.png",
      title: "Chiken Hamburger - French Fries and KFC",
      price: "Rs 500",
    },
  ]

  const drink_cards = [
    {
      id: 1,
      image: "./uploads/drink1.png",
      title: "Choco milk smothi ",
      discount: "50% OFF",
      price: "Rs 500",
    },
    {
      id: 2,
      image: "./uploads/drink2.png",
      title: "CocoCoal 1-ML",
      discount: "15% OFF",
      price: "Rs 620",
    },
    {
      id: 3,
      image: "./uploads/drink3.png",
      title: "Orange juice with ice ",
      price: "Rs 256",
    },
    {
      id: 4,
      image: "./uploads/break4.png",
      title: "Red bear by Arana ",
      discount: "10% OFF",
      price: "Rs 500",
    },
    {
      id: 5,
      image: "./uploads/glassdrink.png",
      title: "Red bear by Arana",
      price: "Rs 500",
    },
    {
      id: 6,
      image: "./uploads/drink2.png",
      title: "CocoCoal 1-ML",
      discount: "15% OFF",
      price: "Rs 620",
    },
    {
      id: 7,
      image: "./uploads/drink3.png",
      title: "Orange juice with ice ",
      price: "Rs 256",
    },
    {
      id: 8,
      image: "./uploads/drink2.png",
      title: "CocoCoal 1-ML",
      discount: "15% OFF",
      price: "Rs 620",
    },
    {
      id: 9,
      image: "./uploads/juice.png",
      title: "Orange juice with ice ",
      price: "Rs 256",
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
          <div className='popular_food_row'>
            <Carousel itemsToShow={4}>
              {
                food_cards.map((food_cards) => {
                  return <Card key={food_cards.id} className='food_card'>
                    <Card.Img variant="top" className='food_card_img' src={food_cards.image} />
                    {food_cards.discount ? <Card.ImgOverlay>
                      <Card.Title className='ribbon'><span>{food_cards.discount}</span></Card.Title>
                    </Card.ImgOverlay> : ''}

                    <Card.Body className='food_card_body'>
                      <Card.Title className='food_card_title'>{food_cards.title}</Card.Title>
                      <Card.Text>
                        <h6 className='food_price'>{food_cards.price}</h6>
                        <del className='cut_price'>Rs 500</del>
                        <Button className='add'>ADD</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                })
              }
            </Carousel>
          </div>
        </Row>

        <Row className='popular_food_row'>
          <Col xs={11}>
            <h5>Breakfast Items</h5>
          </Col>
          <Col xs={1}>
            <h5>See All</h5>
          </Col>
          <div className='popular_food_row'>
            <Carousel itemsToShow={4}>
              {
                breakfast_cards.map((breakfast_cards) => {
                  return <Card key={breakfast_cards.id} className='food_card'>
                    <Card.Img variant="top" className='food_card_img' src={breakfast_cards.image} />
                    {breakfast_cards.discount ? <Card.ImgOverlay>
                      <Card.Title className='ribbon'><span>{breakfast_cards.discount}</span></Card.Title>
                    </Card.ImgOverlay> : ''}
                    <Card.Body className='food_card_body'>
                      <Card.Title className='food_card_title'>{breakfast_cards.title}</Card.Title>
                      <Card.Text>
                        <h6 className='food_price'>{breakfast_cards.price}</h6>
                        <del className='cut_price'>Rs 500</del>
                        <Button className='add'>ADD</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                })
              }
            </Carousel>
          </div>
        </Row>
        <Row className='popular_food_row'>
          <Col xs={11}>
            <h5>Drink Items</h5>
          </Col>
          <Col xs={1}>
            <h5>See All</h5>
          </Col>
          <div className='popular_food_row'>
            <Carousel itemsToShow={4}>
              {
                drink_cards.map((drink_cards) => {
                  return <Card key={drink_cards.id} className='food_card'>
                    <Card.Img variant="top" className='food_card_img' src={drink_cards.image} />
                    {drink_cards.discount ? <Card.ImgOverlay>
                      <Card.Title className='ribbon'><span>{drink_cards.discount}</span></Card.Title>
                    </Card.ImgOverlay> : ''}
                    <Card.Body className='food_card_body'>
                      <Card.Title className='food_card_title'>{drink_cards.title}</Card.Title>
                      <Card.Text>
                        <h6 className='food_price'>{drink_cards.price}</h6>
                        <del className='cut_price'>Rs 500</del>
                        <Button className='add'>ADD</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                })
              }
            </Carousel>
          </div>
        </Row>
        <h5 className='pt-4'>Popular Delicacies</h5>
        <Row className='popular_delic_row'>
          <Col xs={5}>
            <Image src="./uploads/Delicimg.png" alt="Your Image" className="img-fluid delic_img" />
          </Col>
          <Col xs={7}>
            <h6 style={{ paddingTop: '13px', fontSize: '18px', fontWeight: 'bold' }}>
              Simple, tasty and very healthy<br></br>
              vegetable and egg salad
            </h6>
            <h6 style={{ paddingTop: '17px' }}>Recipe:</h6>
            <p className='delic_prgh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis donec bibendum odio. Id et blandit iaculis lectus pellentesque at aliquet odio commodo. Quis cursus facilisis lobortis hendrerit augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus posuere nam nam. Sapien, sit sapien risus, tristique egestas. Nullam feugiat dignissim odio pretium auctor. Ut at tempor, lacinia pellentesque neque lacinia. Justo nulla libero vestibulum aliquam blandit volutpat pretium posuere tristique. Risus dictum turpis bibendum cursus justo, mauris massa, dignissim.
            </p>
            <div className='d-flex'>
            <Button className='readmore'>Read Completely</Button>
            <p className='justify-content-end quantity'>Quantity <i class="fa-solid fa-minus"></i> 2 <i class="fa-solid fa-plus"></i></p>
            </div>
           
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Landingpage;