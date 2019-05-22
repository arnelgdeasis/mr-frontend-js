import React from 'react';

class indexPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {checker:0};
  }

  render() {
      return (
        <div className="container-base">
           <div className="header-container">
              <div className="dropdown">
                <a className="cart-btn">My Cart (4)</a>
                <div className="dropdown-content">
                  <div className="item-selected">
                    <img className="" src={require('../assets/images/classic.JPG')} />
                    <div>
                      <p className="item-name">Classic Tee</p>
                      <p>1 x <b> $75.00 </b></p>
                      <p> Size: S </p>
                    </div>
                  </div>
                  <div className="item-selected">
                    <img className="" src={require('../assets/images/classic.JPG')} />
                    <div>
                      <p className="item-name">Classic Tee</p>
                      <p>3 x <b> $75.00 </b></p>
                      <p> Size: L </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           <div className="item-details">
             <div className="img-con">
               <img className="item-image" src={require('../assets/images/classic-tee.JPG')} />
             </div>
             <div className="item-desc">
              <div className="content">
                 <h2>Classic Tee</h2>
                 <div className="borderx"> </div>
                 <h4 className="item-price">$75.00</h4>
                 <div className="borderx"> </div>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                 <div className="sizes">
                  <div className="size-handler">
                     <span>SIZES<span className="askt">*</span></span>
                     <div className="hidden">
                       <span id="size-s"> S</span>
                       <span id="size-m"> M </span>
                       <span id="size-l"> L </span>
                     </div>
                  </div>
                   <div className="size-selector">
                     <div id="small"  onClick={() => this.addSize('s')}>S</div>
                     <div id="medium" onClick={() => this.addSize('m')}>M</div>
                     <div id="large" onClick={() => this.addSize('l')}>L</div>
                   </div>
                   <button  onClick={() => this.addToCart('s')} >ADD TO CART</button>

                   <p id="error">Please select size.</p>
                   <p id="success">Item successfully added to cart.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      )
  }

  addSize(id) {
    this.state.checker = 0;
    if(id === 's') {
      document.getElementById("small").classList.toggle("borderd");
      document.getElementById("size-s").classList.toggle("d-show");
      if(document.querySelector("#small").classList.contains("borderd")) {
        this.state.checker = 1;
      }
    }
    else if (id === 'm') {
      document.getElementById("medium").classList.toggle("borderd");
      document.getElementById("size-m").classList.toggle("d-show");
      if(document.querySelector("#medium").classList.contains("borderd")) {
        this.state.checker = 1;
      }
    }
    else {
      document.getElementById("large").classList.toggle("borderd");
      document.getElementById("size-l").classList.toggle("d-show");
      if(document.querySelector("#large").classList.contains("borderd")) {
        this.state.checker = 1;
      }
    }
  }

  addToCart() {
    if(this.state.checker == 1) {
        document.getElementById("success").style.display = 'block';
        document.getElementById("error").style.display = 'none';
    } else  {
        document.getElementById("success").style.display = 'none';
        document.getElementById("error").style.display = 'block';
    }
  }

}

export default indexPage;
