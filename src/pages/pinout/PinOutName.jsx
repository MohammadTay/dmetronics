import React from 'react'
import { pinouts } from '../../data';
import { useParams } from 'react-router-dom';
import FolderImg from '../../components/folderimg/FolderImg';

const PinOutName = () => {
    const {name} =useParams()
    const tt = pinouts.find(i=>i.name === name )
    
  return (

   <FolderImg folder={tt.item} />
   
  )
}

export default PinOutName