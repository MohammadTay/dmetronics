import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
const images = import.meta.glob('../../../public/images/**')
import './PinOutImg.css'
import ImagePreview from '../../components/imagepreview/ImagePreview'


const PinOutImg = () => {
    const {name}=useParams()
    const location =useLocation()

   const father = location.pathname.split('/')[3]
   console.log(name);

  const array = Object.keys(images);
  const ll = array.map(i => i)
  // console.log(ll);
  const search = ll.filter(i => i.split('/')[6] === name)
console.log(search);



  
 
  return (
    <div className='bb-list'>

    {search.map(i => (
      
      
      <ImagePreview
        imageUrl={i}
        altText=''
        key={i}
      />

    

      ))}
    </div>
  )
}

export default PinOutImg