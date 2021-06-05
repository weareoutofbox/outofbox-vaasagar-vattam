import styled from "styled-components";

export const CartWrap = styled.div`
   font-family: 'lato',sans-serif;
   max-width: 1200px;
   width: 90%;
   margin: 0 auto;
   margin-top: 70px;
   margin-bottom: 70px;
   .headerListItem{
       display: none;
   }
   @media screen and (max-width:999px){
       margin-top: 100px;
   }

`

export const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
   margin-top: 30px !important;
   margin: 0 auto;
   @media screen and (max-width:768px){
       flex-direction: column;
   }
`
export const CartLeft = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 767px;
   width: 100%;
  
   p{
       font-weight: 600;
       font-style: normal;
       font-size: 24px;
       line-height: 28px;
       color: #555555;
   }
   #p2{
       font-size: 18px;
       padding:12px 0 25px 0;
   }
   hr{
       width: 100%;
       color:rgba(217, 217, 217, 1);
       opacity: 50%;
   }
   .cartItemDisplay{
       padding:17px 0 10px 10px;
       span{
           padding-left: 20px;
           font-weight: 400;
           font-style: normal;
           font-size: 18px;
           line-height: 0px;
           display: block;
           transform: translate(30px,-20px);
       }
       @media (max-width:490px){
           padding: 8px;
           margin-left: 0;
       }
   }
   .cartItemDisplay0{
    padding:17px 0 10px 10px;
    box-shadow: 0px 20px 21px 0px rgba(200, 199, 199, 0.25);
    span{
           padding-left: 20px;
           font-weight: 400;
           font-style: normal;
           font-size: 18px;
           line-height: 0px;
           display: block;
           transform: translate(30px,-20px);
       }
       @media (max-width:490px){
           padding: 8px;
           margin-left: 0;
       }
   }
   .cartItemDisplay0Container{
       padding-left: 10px;
       
   }
   #emptyCart{
       margin-top: 30px;
       padding-left: 10px;
       max-width: 100%;
       @media (max-width:490px){
         max-width: 150px;
       }
   }
   .BookDetails{
       padding-top: 20px;
   }
   .BookPrice{
       display: flex;
       justify-content: space-between;
   }
   .BookPriceContainerLeft{
       display: flex;
       justify-content: space-evenly;
   }
   .removeCartBtnContainer{
       display: flex;
       justify-content: space-between;
       span{
           cursor: pointer;
       }
       #removeLnk{
           color:#FF725E;
           font-weight:400;
           font-style: normal;
           font-size: 18px;
           line-height: 21px;
           padding:0px 0px 0px 20px;
           display: block;
           transform: translateY(-20px);
       }
   }
   .addCartBtn{
       max-width:100px;
       padding:6px 32px;
       background-color:#ffffff;
       display: flex;
       justify-content: space-around;
       margin-left: 30px;
       border-radius:4px;
       box-shadow: 0px 10px 21px 0px rgba(161, 161, 161, 0.25);
       #count{
          font-weight: 700;
          font-style: normal;
          font-size: 18px;
          line-height: 21px;
          color: #2f243a;
          padding:0 15px 0 15px;
       }
       #minus{
         transform: translateY(-4px);
       }
   }
   .BookPriceContainerRight{
       p{
           padding:20px 15px 0 0;
       }
   }
   @media screen and (max-width:999px){
       .BookDetails{
           #p1{
               font-size: 14px;
           }
           #p2{
               font-size: 12px;
           }
           #removeLnk{
               font-size: 12px;
           }
           #count{
               font-size:13px;
           }
           .addCartBtn img{
               width: 12px;
           }
       }
       .BookPriceContainerRight p{
          font-size: 20px;
       }
       .cartItemDisplay span{
           font-size: 14px;
       }
       .cartItemDisplay0 span{
            font-size: 14px;
       }
       .cartItemDisplay0Container{
           h1{
               font-size: 20px;
           }
           p{
               font-size: 13px;
           }
           
          
       }

   }
  
 
 
   @media screen and (max-width:440px){
    .addCartBtn{
        padding:2px 7px;
        margin-left: 0;
        margin-top: 10px;
    }
    .removeCartBtnContainer{
        flex-direction: column;
    }
    .BookPriceContainerRight p{
          font-size: 15px;
       }
   
   }
  
`
export const BookPrice = styled.div`
 box-shadow: 0px 10px 21px 0px rgba(200, 199, 199, 0.25);
   
`
export const CartRight = styled.div`
   max-width: 400px;
   width: 100%;
   margin-bottom: 40px;
   .cartRightTop{
       display: flex;
       justify-content: space-between;
   }
   #payLogo{
       transform: translateY(-10px);
   }
  /*addressbar*/
  .address{
      display: none;
  }
  .adress-active{
      color: black;
      display: block;
      p,a{
        font-weight: 400;
        font-style: normal;
        font-style: normal;
        font-size:16px;
        color: red;
      }
  }
  /*cartrighttopbar*/
  .cartRightTop{
      box-shadow:0 10px 21px 0 rgba(200, 199, 199, 0.25);
      padding:29px 18px 0px 21px;
      p{
          font-weight: 400;
          font-style: normal;
          font-size: 18px;
          line-height: 21px;
          color: #8a8a8a;
          cursor: pointer;
      }
      span{
          color:#ff725e;
          font-weight: 400;
          font-style: normal;
          font-size: 18px;
          line-height: 21px;
          cursor: pointer;
      }
  }
    /*--payment summary stylinggs ---*/
    .paymentTab{
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          margin-top: 40px;
          box-shadow: 0 10px 21px 0 rgba(200, 199, 199, 0.25);
          #paySvg{
              transform: translateY(-10px);
          }
          @media (max-width:468px){
              width: 90%;
              margin:auto;
              margin-top: 20px;
             
          }
      }
      #proceedtoPay{
          display: block;
          text-align: center;
          padding: 11px 0;
          width: 100%;
          border-radius: 4px;
          font-weight: 600;
          font-style: normal;
          margin-top: 10px;
          font-size: 16px;
          line-height: 19px;
          color: #363636;
          background-color: #FAC9B8;
          transition: 0.3s all ease;
          
          &:hover{
              transform: scale(1.1);
              
          }
      }
      #continueShop{
          color:#ff725e;
          font-size: 18px;
          line-height: 21px;
          font-style: normal;
          display: block;
          font-weight: 700;
          margin-top: 28px;
         padding-bottom: 28px;
         text-align: center;
      }
      hr{
          width: 100%;
          color: #D9D9D9;
      }
    .paymentTabWrapper{
          width: 90%;
          margin:auto;
          p{
            font-style: normal;
            font-size: 18px;
            line-height: 21px;
            @media (max-width:999px){
                  font-size: 15px;
              }
          }
          .summaryTitle{
              display: flex;
              padding:17px 0 0px 0;
              p{
                  padding-left: 20px;
                  font-style: normal;
                  font-size: 18px;
                  line-height: 21px;
                  color: #8A8A8A;
              }
          }
          #availPoints{
              font-size: 14px;
              font-style: normal;
              line-height: 16px;
              font-weight: 400;
              color:#A5A5A5;
              padding-left: 23px;
              padding-top: 10px;
              @media (max-width:999px){
                  font-size: 15px;
              }
          }
          #pointImg{
              margin-right:8px;
          }
          .cartTotal,.Shipping,.summaryTotal{
              display: flex;
              justify-content:space-between;
          }
          #cartPrice{
              font-weight: 700;
              font-style: normal;
              font-size: 18px;
              line-height: 21px;
              color: #555555;
              @media (max-width:999px){
                  font-size: 13px;
              }
          }
          .cartTotal,.Shipping,.summaryPoints{
              font-weight: 400;
              padding: 23px 0 27px 0;;
          }
          .summaryTotal{
              padding:26px 0;
          }
    }
      @media screen and (max-width:999px){
          .cartRightTop{
              max-width: 400px;
          }
          .cartRightTop p{
              font-size: 14px;
          }
          .cartRightTop span{
              font-size: 14px;
          }
          .paymentTabWrapper .summaryTitle p{
              font-size: 17px;
          }
          .cartTotal,.Shipping,.summaryTotal{
              font-size: 15px;
          }
          .SummaryPoints span{
            font-size: 15px;
          }
          .SummaryPoints #availPoints{
              font-size: 15px;
          }
          #proceedtoPay,#continueShop{
              font-size: 15px;
          }
          .paymentTabWrapper .summaryTotal{
              padding:10px 0;
          }
      }
      @media screen and (max-width:768px){
          margin:auto;
          margin-top: 70px;
      }
`
export const PromoCode = styled.div`
   max-width: 600px;
   width: 100%;
   margin-top: 50px;
   margin-bottom: 170px;
   #promo{
       transform: translateY(-9px);
   }
   .PromoCodeContainer{
       width: 96%;
       margin: auto;
   }
   .promoTop{
       display: flex;
       justify-content: flex-start;
       p{
           padding-left: 17px;
           font-size: 18px;
           
           font-weight: 400;
           color: #555555;
       }
       @media (max-width:768px){
           p{
               font-size: 14px;
           }
       }
   }
   .promoForm input::placeholder{
       font-weight: 400;
       font-style: normal;
       font-size: 14px;
       line-height: 14px;
       color: #b4b4b4;
   }
   .promoForm input#code{
       padding: 10px 0 10px 10px;
       max-width: 280px;
       font-size: 14px;
       line-height: 14px;
       color: #b4b4b4;
       width: 100%;
       outline: none;
       border: 1px solid #d9d9d9;
       border-radius: 4px;
       margin:25px 17px 20px 0;
   }
   .promoForm input[type=submit]{
       padding: 6px 60px;
       background-color: #FAC9B8;
       border: none;
       outline: none;
       font-size: 16px;
       cursor: pointer;
       line-height: 19px;
       font-style: normal;
       font-weight: 600;
       color: #363636;
       border-radius: 4px;
       transition: 0.3s all ease;
       &:hover{
           transform: scale(1.1);
       }
   }
   a{
       text-decoration: none;
       font-weight: 400;
       font-style: normal;
       font-size: 14px;
       line-height: 14px;
       color:#fb9471;
   
   }
   @media screen and (max-width:768px){
       a{
           margin-top: 10px;
           display: block;
       }
       margin:0 auto;
       margin-top: 50px;
       margin-bottom: 0;
   }
   @media screen and (max-width:478px){
       padding-left: 12px;
   }

`
export const AddressSlide = styled.div`
   position:absolute;
   transition:0.4s all;
   top: 0;
   right: 0;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: flex-end;
  
   .bg{
     max-width: 1600px;
     width: 100%;
     min-height: 150vh;
     background-color: #000000;
     opacity: 60%;
     position: relative;
   }
   .addressContainer{
       background-color: #fff;
       display: block;
       max-width: 493px;
       width: 100%;
       min-height: 150vh;
   }
   .addressTitle{
        padding: 0px 0 10px 10px;
        span{
           display: inline-block;
           vertical-align:middle;
           padding:0 0 10px 8px;
           font-weight: 400;
           font-style: normal;
           font-size: 18px;
           color: #8a8a8a;
        }
    }
    #addressImg{
          transform: translateY(10px);
      }
   #closeBtn{
       position: absolute;
       right: 20px;
       top: 10px;
       cursor: pointer;
       width: 25px;
   }
   .FormWrapper{
       width: 90%;
       margin: 0 auto;
       display: flex;
       flex-direction: column;
       input{
           margin-top: 26px;
           cursor: pointer;
           font-weight: 400;
           font-style: normal;
           font-size: 16px;
           line-height: 19px;
           color: #494747;
           
       }
       input[type=submit]{
            font-weight: 600;
            font-style: normal;
            font-size: 16px;
            line-height: 19px;
            color: #363636;
            border: none;
            background-color: #FAC9B8;
            padding:14px 169px;
            border-radius: 4px;
            transition: 0.3s all ease;
            &:hover{
                transform: scale(1.1);
            }
       }
       .registeredNumber,.Default{
           display: flex;
           label{
               font-size: 14px;
               color: #666;
               @media (max-width:389px){
                   font-size: 12px;
               }
           }
       }
       .registeredNumber{
           justify-content: flex-end;
           margin-top: 10px;
       }
       .name{
           display: flex;
           justify-content: space-between;
       }
       .submit{
           text-align: center;
       }
       .address,.city,.pincode,.State,.locality{
           display: flex;
           flex-direction: column;
       }
       .number{
           display: flex;
           flex-direction: column;
           div{
               text-align: right;
           }
       }
      .Default{
          margin:40px 0px 20px 0;
          
      }
     
   }
   @media screen and (max-width:999px){
      margin-top: 100px;
      .FormWrapper input{
          font-size: 14px !important;
      }
      #closeBtn{
          width: 18px;
      }
   }
   @media screen and (max-width:699px){
       .FormWrapper input{
           font-size: 12px !important;
       }
   }
   @media screen and (max-width:390px){
    .FormWrapper input[type=submit]{
        padding: 5px 60px;
    }
    .addressContainer{
        flex-basis:140%;
    }
    .name{
        flex-direction: column;
    }
    .FormWrapper{
        object-fit: contain;
    }
   }
`