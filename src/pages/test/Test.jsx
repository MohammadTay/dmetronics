import React, { useState } from 'react'

import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const images = import.meta.glob('../../images/**', { as: 'raw' })

const Test = () => {
  const [aa, setAa] = useState()
  console.log(images)
  const array = Object.keys(images);
  console.log(array[0]);

  // const ll = array.map(i => i)
  // console.log(ll[0]);


  // const path = ll.map(i => i.split('/').slice(5).join('/'))
  // console.log(path);





  const upload = async (file) => {
    console.log('pass');
    const storageRef = ref(storage, `${file}`);
    await uploadBytesResumable(storageRef, file)

    const imageUrl = await getDownloadURL(storageRef)
    console.log(imageUrl)

  }

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   console.log(ll[0]);
  //   console.log(e.target);
  //   upload(ll[0])
  //   // ll.map(i => {
  //   //   console.log(i[0]);
  //   //   // console.log(i.split('/').slice(5).join('/'));
  //   // })
  // }
  const handleUpload = async (e) => {

    e.preventDefault();
    upload(aa)
  }

  // function handleFile(e) {
  //   setAa(e.target.files)
  //   const bb = e.target.files
  //   console.log(bb);
  //   const cc = Object.entries(bb)
  //   cc.map(i =>
  //     upload(i[1]))
  //   console.log("finished")
  // }

  // var imagePath = array[0];
  // var img = new Image();
  // img.src = imagePath;
  // img.onload = function () {
  //   console.log(img.src);
  // };


  return (
    <div>

      {/* <div>
        <form>
          <input multiple type="file" name='file' onChange={handleFile} />
          <button>upload</button>
        </form>


      </div> */}

      <img src='' />
      <div style={{ width: "auto" }}>
        lets upload image
        <input
          type='file'
          onChange={(e) => setAa(e.target.files[0])}
        />
        <br />
        {aa && <img width={50} height={50} src={aa} />}
        <br />
        <button onClick={handleUpload}>upload</button>
      </div>
    </div>

  )
}

export default Test