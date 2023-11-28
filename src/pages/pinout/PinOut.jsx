import React from 'react'
import { pinouts } from '../../data';
import FolderList from '../../components/folderlist/FolderList';


const PinOut = () => {
  return (
   <FolderList folders={pinouts} />
  )
}

export default PinOut