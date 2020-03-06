import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Card from './Card';
import axios from "axios";

import AliceCarousel from 'react-alice-carousel';

export default function userFeed() {
  const [feed, setFeed] = useState([]);
useEffect(() => {
  
    axios.get('https://disney-parent-api.herokuapp.com/')
   .then((response) => {
    const sliced = response.data.slice(0,10) // grabs only the first 10 results from the response
    return sliced;
   })
   .then(slicedArray => {
     setFeed(slicedArray.map( user => {
       return <Card name={user.username} accountType={user.accountType} />
     }))
   })
   .catch(error => {
     console.error('Server Error', error);
   });
}, []);

const itemBreakPoints = {
  0: {
    items: 1,
  },
  1024: {
    items: 2,
  },
  1500: {
    items: 3
  }
}

const stagePadding = {
  paddingLeft: 50,
  paddingRight: 50
}

  return (
      <div className='carousel-container'>
        <AliceCarousel
          items={feed}
          dotsDisabled={true}
          duration={700}
          responsive={itemBreakPoints}
          buttonsDisabled={false}
          slideToIndex={1}
          stagePadding={stagePadding}
        />
      </div>
  );
}