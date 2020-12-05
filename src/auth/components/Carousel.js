import react from 'react';
import Carousel from 'react-elastic-carousel'


const banner_images = [
    'https://r2.community.samsung.com/t5/image/serverpage/image-id/707049i64371843D376A130/image-size/large?v=1.0&px=999',
    'https://www.applestore.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg'
  ];

const OurCorosel = () => {
    return(
    <>    
     <Carousel itemsToShow={1}>
      {
        banner_images.map( address => 
          
          <div className = 'corousel__image'>
            <img src = {address}/>
          </div>
          )
      }
    </Carousel>
    </>
    )
}

export default OurCorosel;