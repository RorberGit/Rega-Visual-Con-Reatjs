import React from 'react'
import { useEffect } from 'react'


function Home(){
  useEffect(()=>{
    console.log("dsdsdsd");
  }, [])
return(
  <section className="Home">
    <h3>Hello Home</h3>
  </section>
  );
}

export default Home