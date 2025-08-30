import React from 'react';
 function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  
    }) {
    return ( 
        <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
          <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft:"50px" ,textDecoration: "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          
          
        </div>
        <div className="col-6">
          <img src={imageURL}/>
        </div>
      </div>
    </div>
     );
 }
 
 export default RightSection;