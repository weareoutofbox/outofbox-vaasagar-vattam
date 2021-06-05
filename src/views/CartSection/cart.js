import React,{useState,useEffect} from 'react'
import Header from '../../components/header/header'
import HeaderFirst from '../../components/header/headerFirst'
import {CartWrap,CartContainer,CartLeft,CartRight,BookPrice,PromoCode,AddressSlide} from './cartElements';
import shoppingCart from '../../assets/images/Naren/shopping-cart.svg';
import RemoveBtn from '../../assets/images/Naren/remove.svg';
import Book1 from '../../assets/images/Naren/book1.svg';
import minus from '../../assets/images/Naren/minus.svg';
import plus from '../../assets/images/Naren/plus.svg';
import Pagination from '../authorPage/pagination';
import Footer from '../../components/footer/footer';
import AddressImg from '../../assets/images/Naren/addressImg.svg';
import EmptyCart from '../../assets/images/Naren/emptyCart.png';
import rupee from '../../assets/images/Naren/rupee.png';
import { Link } from 'react-router-dom';
import vaasagarPoint from '../../assets/images/Naren/vaasagarPoints.png';
import PromoImg from '../../assets/images/Naren/promo.svg';
import paySvg from '../../assets/images/Naren/pay.svg';
import payLogo from '../../assets/images/Naren/payLogo.svg';
import AddressSlider from './AddressSlider';

export default function Cart() {
    const [count,setCount] = useState(0);
    const [SlideAddress,setSlideAddress] = useState(false);
    const [address,setAddress] = useState(false);
    const price = 0;
    const Inc = () =>{
        setCount(count+1);
    }
    const Dec = () =>{
        setCount(count-1);
    }
    useEffect(()=>{
       
    },[]);

    const paymentSummary = {
        shipping:12,
        total:0,
    }
    const [posts, setPosts] = useState([
        {
          productId: 1,
          id: 1,
          image:Book1,
          BookTitle: "Pulli Aadu Pullukattu",
        },
        {
            productId: 1,
            id: 2,
            image:Book1,
            BookTitle: "Pulli Aadu Pullukattu",
        },
        {
            productId: 1,
            id: 3,
            image:Book1,
            BookTitle: "Pulli Aadu Pullukattu",
        },
        {
            productId: 1,
            id: 4,
            image:Book1,
            BookTitle: "Pulli Aadu Pullukattu",
        },
        {
            productId: 1,
            id: 5,
            image:Book1,
            BookTitle: "Pulli Aadu Pullukattu",
        },
        {
            productId: 1,
            id: 6,
            image:Book1,
            BookTitle: "Pulli Aadu Pullukattu",
        },
      ]);
      const [showPerPage, setShowPerPage] = useState(2);
      const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
      });
      const itemCount = showPerPage;
      const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
      };
    return (
        <div className="cartPageWrap">
        <HeaderFirst/>
        <Header/>
        <CartWrap>
            <CartContainer>
                <CartLeft>
                {itemCount != 0 ?
                    <BookPrice>
                    <div className="cartItemDisplay">
                        <img src={shoppingCart} alt="" />
                        <span>{itemCount} Item in your cart</span>
                    </div>
                    <hr />

                      {posts.slice(pagination.start, pagination.end).map((post) => (
                       <div className="BookPrice" key={post.id}>
                        <div className="BookPriceContainerLeft">
                            <div>
                                <img id="BookImg" src={Book1} alt="" />
                            </div>
                            <div className="BookDetails">
                                <p id="p1">{post.BookTitle}</p>
                                <p id="p2">by: Krishnan Swaminathan</p>
                                <div className="removeCartBtnContainer">
                                    <div>
                                        <img src={RemoveBtn} alt="" />
                                        <span id="removeLnk">Remove</span>
                                    </div>
                                    <div className="addCartBtn">
                                       <span id="minus" onClick={Dec}><img src={minus} alt="" /></span>
                                       <span id="count">{count}</span>
                                       <span id="plus" onClick={Inc}><img src={plus} alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BookPriceContainerRight">
                           <p>{price}</p>
                        </div>
                       </div>))}
                    </BookPrice> :
                    <div className="cartItemDisplay0Container">
                        <div className="cartItemDisplay0">
                          <img src={shoppingCart} alt="" />
                          <span>{itemCount} Item in your cart</span>
                        </div>
                        <div className="emptyCartBottom">
                        <img id="emptyCart" src={EmptyCart} alt="empty" />
                       <h1>Your cart is empty!</h1>
                       <p>Looks like you haven’t add any products yet.</p>
                        </div> 
                      
                    </div>    
                    }
                 <PromoCode>
                     <div className="PromoCodeContainer">
                         <div className="promoTop">
                             <img id="promo" src={PromoImg} alt="" />
                             <p>Apply promocode</p>
                         </div>
                         <div className="promoForm">
                         <form action="">
                            <input id="code" type="text" placeholder="Have a promocode? Enter here"/>
                             <input type="submit" name="Apply" value="Apply" id="" />
                         </form>
                         </div>
                        <Link to="/offers">View all Offers</Link>
                     </div>
                 </PromoCode>
                   
                </CartLeft>
                <CartRight>
                   <div className="cartRightTop">
                     <img id="payLogo" src={payLogo} alt="addresslogo" />
                      <p>Select Delivery address</p>
                      <span onClick={()=>setSlideAddress(true)}>Add address</span>
                    </div>
                    <div className={address ? "address-active":"address"}>
                        <div>
                            <p>Shradha maheshwari</p>
                            <p>
                              Pipariya, Madhya Pradesh<br/>
                              Narmada Colony<br/>
                              Bhopal - 461775<br/>
                              Madhya Pradesh
                            </p>
                            <p>Mobile: 9370474084</p>
                            <a href="javascript:void(0)">Edit</a>
                        </div>
                        <div>
                            <a href="#">Select</a>
                        </div>
                    </div>
                    <div className="paymentTab">
                        <div className="paymentTabWrapper">
                        <div className="summaryTitle">
                            <img id="paySvg" src={paySvg} alt="" />
                            <p>Payment Summary</p>
                        </div>
                        <hr/>
                        <div className="cartTotal">
                            <p>Cart Total</p>
                            <p id="cartPrice">₹ {price}</p>
                        </div>
                        <div className="Shipping">
                            <p>Shipping Charges</p>
                            <p id="cartPrice">₹ 0</p>
                        </div>
                        <div className="SummaryPoints">
                            <span id="pointImg"><img src={vaasagarPoint} alt="" /></span>
                            <span>Vasaagar Vattam points</span>
                            <p id="availPoints">Available points: 12</p>
                        </div>
                        <hr/>
                        <div className="summaryTotal">
                            <p>Total</p>
                            <p id="cartPrice">₹ {paymentSummary.total}</p>
                        </div>
                        <hr/>
                        <Link id="proceedtoPay" to="/payment">Proceed to pay</Link>
                        <Link id="continueShop" to="/product">Continue Shopping</Link>
                        </div>
                    </div>
                </CartRight>
            </CartContainer>
       </CartWrap>
       {SlideAddress ? <AddressSlider SlideAddress={setSlideAddress}/> : null}
        <div className='productReaderSec'>
        <div className='container readerSecWrap'>
          <p className='readers-title'>Welcome to the Reader's Club.</p>
          <p className='readers-detail'>
            A community for book lovers, where you can discuss about your
            favourite books,
            <br /> participate in events and discover.
          </p>
          <button className='join-btn'>Join</button>
        </div>
      </div>
      <Footer />
      </div>
    )
}
