import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedBox from '../../components/featuredbox/FeaturedBox';
import FeaturedImage from '../../components/featuredimg/FeaturedImage';

const Home = () => {


  return (
    <div>
      <Featured/>
      <FeaturedBox/>
      <FeaturedImage/>
      <img src='https://firebasestorage.googleapis.com/v0/b/phone-dcbd2.appspot.com/o/614px-Bosch_EDC_7_VOLVO_PENTA.jpg?alt=media&token=25c7b5c3-d20e-4235-a9bb-71833d4e1e2e'
      alt='' />
    </div>
  )
}

export default Home