import styled from "styled-components";
import playBtn from '../../assets/images/Naren/playBtn.png'

export const AuthorWrap = styled.section`
   max-width: 1200px;
   width: 90%;
   margin: 0 auto;
   margin-top: 70px;
   margin-bottom: 70px;
   .bloc-tabs {
      display: flex;
      justify-content: center;
       padding-top: 34px;
       gap: 60px;
       .active-tabs{
        border-bottom: 2px solid #FB9471;
         background: transparent;
        width: auto;
        transition: width .3s;
        font-size: 18px;
         font-weight: 700;
        line-height: 22px;
       color: #404040;
       @media (max-width:412px){
           font-size: 15px;
       }
    }
   }
    .tabs{
        font-size: 18px;
     line-height: 29px;
     color: #A6A6A6;
     font-weight: 700;
     /* padding: 15px; */
     text-align: center;
     background: transparent;
     font-family: var(--font-primary);
     cursor: pointer;
     box-sizing: content-box;
     position: relative;
     outline: none;
     border:none;
    }
    .content{
        width: 100%;
        height: 100%;
        display: none;
    }
    .active-content{
        display: block;
    }
    .authorName h1{
        padding:20px 0 10px 0;
        font-weight: 700;
        font-style: normal;
        font-size: 24px;
        line-height: 28px;
        color: #2f243a;
    }
    @media screen and (max-width:999px){
        margin-top: 160px;
    }
    @media screen and (max-width:699px){
        .bloc-tabs{
            gap:20px;
        }
        .tabs{
            font-size: 14px;
        }
        .active-tabs{
            font-size: 16px;
        }
        .authorName h1{
            font-size: 19px;
            text-align:center;
        }
    }
`
export  const AuthorDesc = styled.div`
  display: flex;
  justify-content: space-between;
  
  img{
      min-height: 326px;
  }
  .m-AuthorDetailsRight{
      padding-left:40px;
  }
  h1{
      font-weight: 700;
      font-style: normal;
      font-size: 44px;
      line-height: 52px;
      margin: 0;
  }
  .m-AuthorGenre{
      max-width: 400px;
      display: flex;
      justify-content:space-between;
      padding: 20px 0 40px 0;
    
  }
  .m-AuthorGenre a{
      text-decoration: none;
      font-weight: 500;
      font-style: normal;
      font-size: 20px;
      line-height: 24px;
      color:#555555;
  }
  p{
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -1%;
      color: #9E9E9E;
  }
  #authorDescPara1{
          padding-bottom: 27px;
   }
   #authorDescPara2{
          padding-bottom: 37px;
   }
    #Awards{
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          font-style: normal;
          color:#555555;
      }
      @media screen and (max-width:999px){    
          
          img{
              margin-bottom: 20px;
          }
    
          h1{
              font-size: 30px;
          }
          p,#Awards{
              font-size: 15px;
          }
          .m-AuthorGenre a{
             font-size: 18px;
           }
           img{
               width: 250px;
           }
      }
      @media screen and (max-width:699px){
          p,#Awards{
              font-size: 12px;
          }
          .m-AuthorGenre a{
             font-size: 14px;
           }
           h1{
               font-size: 25px;
           }
      }
      @media screen and (max-width:599px){
          flex-direction: column;
          .m-AuthorDetailsRight{
               padding-left:0px;
             }
      }
      @media screen and (max-width:480px){
        .m-AuthorDetailsLeft{
            margin: 0 auto;
        }
      }
`
export const AuthorBookWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    text-align:center;
    .card-body{
       margin:10px 30px 30px 0;
       max-width: 170px;
       #title{
           padding-top: 17px;
       }
    }
    .reviewBox{
        display: flex;
        justify-content:space-evenly;
        margin:20px 0 30px 0;
        p{
            color:#FF725E;
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 19px;
            margin-left: -10px;
        }
        img{
           padding-left: 10px;
        }
    }
    #viewBtn{
        padding:5px 60px;
        color: #363636;
        background-color: #FAC9B8;
        border-radius: 4px;
        margin:30px 0 60px 0;
        
    }
    img{
        max-width: 100%;
    }

    @media screen and (max-width:999px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width:799px){
        grid-template-columns: 1fr 1fr;
        margin: auto;
        .card-body{
            padding:10px 30px 30px 0;
            margin: auto;
        }
        .reviewBox p{
            font-size: 12px;
        }
    
    }
    @media screen and (max-width:400px){
      margin:auto;
      display: flex;
      flex-direction: column;
    }
    
`
{/*export const AuthorBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    max-width: 170px;
    #book1{
        min-height: 260px;
    }
    .reviewBox{
        display: flex;
        justify-content: space-evenly;
    }
    a{
        padding:5px 60px;
        color: #363636;
        background-color: #FAC9B8;
        border-radius: 4px;
    }
`*/}
export const SlideContainer = styled.div`
    max-width: 440px;
    margin: 0 auto;
    margin-top: 74px;
    nav{
        ul{
            display: flex;
            justify-content: space-between;
        }
        #slideBtn{
            font-weight: 600;
            font-style: normal;
            font-size: 16px;
            line-height: 19px;
            padding:5px 20px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;;
        }
    }
`
/*-----------author interview  and news page stylees -----------*/

export const AuthorInterviewWrap = styled.div`
   width: 100%;
   margin-top: 77px;
   p{
       
       font-style: normal;
       font-size: 18px;
   }
   #p1{
    line-height: 21px;
    font-weight: 700;
    color: #424242;
   }
   #p2{
      line-height: 24px;
      font-weight: 400;
      letter-spacing: -1%;
      color:#9E9E9E;
      padding-top: 8px;
   }
`
export const AuthorInterviewContainer =  styled.div`
  width: 80%;
  padding: 29px 20px 32px 36px;
  border:1px solid #eeeeee;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  a{
      color: #424242;
      text-decoration: none;
  }
  @media screen and (max-width:999px){
      p{
          font-size: 14px;
      }
  }
`

/*-------------author video section styles --------------*/

export const AuthorVideoWrap = styled.div`
   width: 100%;
   margin-top: 77px;
`
export const AuthorVideoContainer = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin:auto;
   .videoTile img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      &:hover{
        filter: brightness(30%);
        transition: 0.2s all ease-in-out;
        
      }
  }
  .videoTile{
      max-height: 200px;
      max-width: 300px;
      margin-bottom: 20px;
      transition: 0.3s all ease-in;
      cursor: pointer;
      position: relative;
  }
  .videoTile::after{
      content:url(${playBtn});
      height: 30px;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      display: none;  
  }
  .videoTile:hover::after{
      display: block;
      transition: 0.3s ease-in-out all;
  }
  @media screen and (max-width:699px){
      grid-template-columns: 1fr 1fr;
  }
  
`