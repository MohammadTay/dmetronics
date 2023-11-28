import React from 'react'
const images = import.meta.glob('../../../public/images/**')



const Test = () => {

  const array = Object.keys(images);
  const ll = array.map(i => i)
  console.log(ll);
  const search = ll.filter(i => i.split('/')[6] === "Bosch EDC 7 (DAF Truck)")
  console.log(search[0]);

  return (
    <div>

      {search.map(i => (

        <img src={i} alt='' key={i}/>
      ))}
</div>

  )
}

export default Test