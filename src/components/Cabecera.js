import React from "react"; 


const Cabecera = () => { 
  const myArray = [ 
    { 
      myTitle: "30-DAY SATISFACTION GUARANTEE", 
      myImage: "/garante.svg", 
    }, 
    { 
      myTitle: "Free delivery on orders over $40.00", 
      myImage: "/truck.svg", 
    }, 
    { 
      myTitle: "50.000+ HAPPY CUSTOMERS", 
      myImage: "/heart.svg", 
    }, 
    { 
      myTitle: "100 % Money Back Gurantee", 
      myImage: "/check.svg", 
    }, 
  ]; 
  return ( 
    <> 
      <div className="hidden md:flex w-full bg-darkslategray-300 flex flex-col justify-around md:flex-row gap-4 items-center md:h-[50px]"> 
        {myArray.map((myItem, index) => ( 
          <div key={index} className="flex justify-around md:justify-between text-white h-[25px] md:p-0 md:h-[22px]"> 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 h-6 block sm:invisible" 
            > 
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /> 
            </svg> 
            <div className="w-full flex"> 
              <img src={myItem.myImage} alt={myItem.myTitle} /> 
              <h5 className="m-0 text-sm ml-4 p-0">{myItem.myTitle}</h5> 
            </div> 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 h-6 block sm:invisible" 
            > 
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> 
            </svg> 
          </div> 
        ))} 
      </div> 
      <div className="block md:hidden w-full bg-darkslategray-300 h-[45px] flex flex-col justify-around md:flex-row gap-4 items-center md:h-[50px]"> 
        <div className="flex w-full justify-center items-center md:justify-between text-white h-[35px] md:p-0 md:h-[22px]"> 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6 block sm:invisible" 
          > 
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /> 
          </svg> 
          <div className="w-[95%] flex items-center justify-center"> 
            <img src="/fluentcheckmarkstarburst20regular.svg" alt="checkmark" /> 
            <h5 className="m-0 text-sm ml-4 p-0">30-DAY SATISFACTION GUARANTEE</h5> 
          </div> 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6 block sm:invisible" 
          > 
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> 
          </svg> 
        </div> 
      </div> 
    </> 
  ); 
}; 
export default Cabecera;