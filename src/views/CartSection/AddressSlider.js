import React,{useState} from 'react'
import closeBtn from'../../assets/images/Naren/closeBtn.png';
import AddImg from '../../assets/images/Naren/addAdress.png';
import bgImg from '../../assets/images/Naren/bgAddress.png';
import { AddressSlide } from './cartElements';
import { Radio } from './Radio';
import gps from '../../assets/images/Naren/gps.svg';

export default function AddressSlider({SlideAddress}) {
  const [close,setClose] = useState(false);
  const [selected, setSelected] = useState("first");
  const None = {
    display:'none'
  }
  const styleRight = {
    textAlign:'Right !important',
    marginLeft:'100px !important'
  }
  const inputStyle = {
      outline:'none',
      border:'none',
      paddingBottom:'10px',
      borderBottom:'1px solid #D9D9D9',
      fontSize:'16px',
      lineHeight:'19px',
      fontStyle:'normal'
  };
   
    return (
      <AddressSlide className={close === true ? "none" : null}>
           <div className="bg">
             <img onClick={()=>{SlideAddress(false);  setClose(true)}} id="closeBtn" src={closeBtn} alt="" />
           </div>
           <div className="addressContainer">
           
               <div className="addressTitle">
                 <img id="addressImg" src={gps} alt="" />
                 <span>Add address</span>
               </div>
               <hr />
               <div className="FormWrapper">
               <form action="">
                 <div className="name">
                   <input style={inputStyle} type="text" placeholder="First Name" />
                   <input style={inputStyle} type="text" placeholder="Last Name" name="" id="" />
                 </div>
                 <div className="number">
                   <input style={inputStyle} type="text" placeholder="9370474084" name="" id="" />
                   <div className="registeredNumber">
                     
                     <Radio
                       value="first"
                        selected={selected}
                        onChange={setSelected}
                        id="radio1"
                      />
                      <label htmlFor="radio1">Same as registered</label>
                   </div>
                 </div>
                 <div className="address">
                   <input style={inputStyle} placeholder="Address 1" type="text" />
                   <input style={inputStyle} placeholder="Address 2" type="text" />
                 </div>
                 <div className="locality">
                   <input style={inputStyle} type="text" placeholder="Locality / Landmark" name="" id="" />
                 </div>
                 <div className="pincode">
                   <input style={inputStyle} type="text" placeholder="Pincode" name="" id="" />
                 </div>
                 <div className="city">
                   <input style={inputStyle} placeholder="City" type="text" name="" id="" />
                 </div>
                 <div className="State">
                   <input style={inputStyle} placeholder="State" type="text" name="" id="" />
                 </div>
                 <div className="Default">
                 <Radio
                       value="first"
                        selected={selected}
                        onChange={setSelected}
                        className="radioBottom"
                        id="radio2"
                      />
                      <label htmlFor="radio2">Set default</label>
                 </div>
                 <div className="submit">
                   <input type="submit" value="Done" name="" id="" />
                 </div>
               </form>
               </div>
           </div>
      </AddressSlide>
    )
}
