import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        
       <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

        <div className="home__rows">
        <Product 
       title="God of War Ragnarok"
       id={3526781}
       image={"https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"}
       rating={5}
       price={70.00}/>

        <Product 
       title="Spider-Man 2 PS5"
       id={8451749}
       image={"https://preview.redd.it/fq7an13n3fq61.png?width=640&crop=smart&auto=webp&s=0c8fd802c6e89e8c2caac263bc68c26c40a5b81a"}
       rating={5}
       price={70.00}/>

        </div>
        <div className="home__rows">
        <Product 
       title="Physiogel Daily Moisture Therapy"
       id={2643728}
       image={"https://cdn.notinoimg.com/detail_thumb/physiogel/phyfacw_kfcr02/physiogel-daily-moisturetherapy-moisturising-cream-for-dry-and-sensitive-skin___17.jpg"}
       rating={4}
       price={12.95}/>
       
        <Product 
       title="Waterpik Water Flosser"
       id={4617893}
       image={"https://media.4rgos.it/s/Argos/8914514_R_SET?$Main768$&w=620&h=620"}
       rating={4}
       price={29.99}/>

       <Product 
       title="Pure Cod Liver Oil"
       id={7251638}
       image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmCraVj-8nkvfVXDjB4C66tnmaYd04PEt_Q&usqp=CAU"}
       rating={5}
       price={2.49}/>

        </div>
        <div className="home__rows">
        <Product 
       title="reMarkable 2 - The Paper Tablet"
       id={5627819}
       image={"https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523555_sd.jpg"}
       rating={5}
       price={299.99}/>

        </div>
      
       

    </div>
  )
}

export default Home