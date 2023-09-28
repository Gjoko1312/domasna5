import { useState, useEffect } from "react";

export const Car = () => {

  const [car1likes, setcar1likes] = useState(0);
  const [car2likes, setcar2likes] = useState(0);
  const [car3likes, setcar3likes] = useState(0);
  const [car4likes, setcar4likes] = useState(0);

  useEffect(() => {
    const cars = {
      car1: car1likes,
      car2: car2likes,
      car3: car3likes,
      car4: car4likes,
    };
  
    for (const car in cars) {
      if (cars[car] === 4) {
        console.log("This is the car of the year!!!");
      }
      console.log(`${car}: ${cars[car]}`);
    }
  }, [car1likes, car2likes, car3likes, car4likes]);
  

  return(
    <div className="mainContainer" >
      <div className="containerLeft">
        <div className="firstCar">
          <h3>1. Mercedes C200</h3>
          <img src="https://www.driving.co.uk/wp-content/uploads/sites/5/2014/07/Mercedes-C-Class-2014-featured-image.jpg" style={{ width: 300, height: 200 }} alt="car1"/>
          <br/>
          <button onClick={() =>{            
            setcar1likes(car1likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar1likes(car1likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar1likes(car1likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car1likes}</h3>
        </div>
        <div className="secondCar">
          <h3>2. Rav4</h3>
          <img src="https://hips.hearstapps.com/autoweek/assets/s3fs-public/130229859.jpg" style={{ width: 300, height: 200 }} alt="car2"/>
          <br/>
          <button onClick={() =>{            
            setcar2likes(car2likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar2likes(car2likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar2likes(car2likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car2likes}</h3>
        </div>
      </div>
      <div className="containerRight">
        <div className="thirdCar">
          <h3>3. Fiat Punto EVO </h3>
          <img src="https://www.carbodydesign.com/archive/2009/09/01-fiat-punto-evo/_Fiat-Punto-Evo-1-lg-720x540.jpg" style={{ width: 300, height: 200 }} alt="car3"/>
          <br/>
          <button onClick={() =>{            
            setcar3likes(car3likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar3likes(car3likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar3likes(car3likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car3likes}</h3>
        </div>
        <div className="fourthCar">
        <h3>4. VW Passat </h3>
          <img src="https://img.autoabc.lv/Volkswagen-VW-Passat/Volkswagen-VW-Passat_2014_Sedans_162843230_11.jpg" style={{ width: 300, height: 200 }} alt="car4"/>
          <br/>
          <button onClick={() =>{            
            setcar4likes(car4likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar4likes(car4likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar4likes(car4likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car4likes}</h3>
        </div>
      </div>
    </div>
  )
}