import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const[items,setItems]=useState({item:[],load:false,count:0,show:'SHOW'})
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products',{'method':'get'})
    .then((re)=>{
      return re.json()
    })
    .then((re)=>{
      setItems({...items,item:re,load:true,count:re.length})
    })
  },[])
  console.log(items)
  const show=()=>{
    let v=document.getElementById('view')
    console.log('len')
    if (v.style.width==='0px'){
      v.style.width='300px'
      v.style.padding='10px'
      setItems({...items,show:'HIDE'})
    }
    else{
      v.style.width='0px'
       v.style.padding='0px'
       setItems({...items,show:'SHOW'})
      
    }
    
  }
  const menu=()=>{
    let men=document.getElementById('nav-ul')
    if (men.style.height === '20px' && men.style.padding === '10px') {
      men.style.height = '0px';
      men.style.padding = '0px';
  } else {
      men.style.height = '20px';
      men.style.padding = '10px';
  }
  }
  return (
    <div className="App">
     <nav>
      <ul className='nav-mobile-list' id="nav-ul" type="none">
         <li>SHOP</li>
         <li>STORIES</li>
         <li>SKILLS</li>
         <li>ABOUT</li>
         <li>CONTACT US</li>
      </ul>
      <div className="nav-card">
        <div>
        <img className='menu-silder' onClick={menu} src="https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/solar_hamburger-menu-linear.png?alt=media&token=0af4124a-221c-4afc-937c-a31fad91fdf1"/>
        <img src="https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/Logo.jpg?alt=media&token=002f6bc8-4107-4032-aff3-0754c1e7145c" alt="demo"/>
        </div>
        <h1>LOGO</h1>
        <div>
        <img className="nav-img" src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/search-normal.png?alt=media&token=8f4f0a25-c6dc-4b0b-8350-5a9cf0b1d41e'/>
        <img className="nav-img" src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/heart.png?alt=media&token=472048d4-e4fa-4cfe-ad96-76360d4a695b'/>
        <img className="nav-img" src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/shopping-bag.png?alt=media&token=0118bfeb-6bae-4e0c-9414-04d726698047'/>
        <img className="nav-img" id="img1" src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/profile.png?alt=media&token=ee101c2d-aca3-4e15-ad20-97fa571fd00d'/>
       
        <img className="nav-img" id="img2" src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/Language.png?alt=media&token=da9a5134-0cec-4ed5-aecc-7c94a1ba3d82'/>
     </div>
      </div>
      <div className="nav-menu">
        <h4>SHOP</h4>
        <h4>SKILLS</h4>
        <h4>STORIES</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT US</h4>
      </div>
     </nav>
    <center> <div className='discover'>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
     </div>
     </center>
     <hr/>
     <div className='card-three'>
      
      <div className='card-in'>
      <p className='item'>{items.count}ITEMS</p> <p onClick={show}>{items.show} FILTER </p>
      
      </div>
      <hr/>
      <h5>RECOMMENDED</h5>
      
     </div>
     <hr/>
     <div className='shop-card'>
      <ul type="none" className='ul-ui' id='view'>
        <li className='p'>Customizble</li>
        <li className='li-l'>
          <div>
            <p>IDEAL FOR</p>
            <p>All</p>
          </div>
          >
        </li>
        <li className='li-l'>
          <div>
            <p>occasion</p>
            <p>All</p>
          </div>
          >
        </li>
        <li className='li-l'>
          <div>
            <p>WORK</p>
            <p>All</p>
          </div>
          >
        </li>
        <li className='li-l'>
          <div>
            <p>FABRIC</p>
            <p>All</p>
          </div>
          >
        </li>
        <li className='li-l'>
          <div>
            <p>SEGMENT</p>
            <p>All</p>
          </div>
          >
        </li>
        <li className='li-l'>
          <div>
            <p>RAW MATERIALS</p>
            <p>All</p>
          </div>
          >
        </li>

      </ul>
      {items.load?<div class='shop-items'>
        {items.item.map((each)=><div className='s-card'><img className='items-image' src={each.image}/> <div><h6>{each.title}</h6>
        <p className='items-p'>Sign in or Create an account to see pricing</p></div> </div>)}
      </div>:<p>Loading</p>}
     </div>
     <div className='fot'>
     <center><div className='enuma'>
      <div className='footer-name'>
        <h2>Be the first to know</h2>
        <p>Sign up for updates from mettā muse.</p>
        <div>
          <input type="text" placeholder='ENTER MAIL' />
          <button className='btn'>Subscribe</button>
        </div>
        </div>
        <div className='footer-name2'>
          <h5>CONTACT US</h5>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h5>Currency</h5>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          
        </div>
      </div></center> 
      <hr/>
      <center><div className='indus'>
        <div>
          <p>mettā muse</p>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Return & Refunds</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <div>
            <h4>FOLLOW ME</h4>
            <p>instagram</p>
          </div>
          <img src='https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/image%2FFrame%20136278.png?alt=media&token=1b9e54f1-d3f8-4029-8640-59dca8a1c481'/>
        </div>
      </div></center>
      
      </div>
      <img className='po' src="https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/WhatsApp%20Image%202024-08-12%20at%2010.24.59_29e649d0.jpg?alt=media&token=fbaf67aa-0d74-4a91-897a-0d89be8bec3f"/>
    </div>
  );
}

export default App;
