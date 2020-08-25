import React, { useState } from 'react';
import { storage } from '../firebase/firebase';
// import { Switch } from 'react-router';

function ImageUpload() {
  const allInputs = { imgUrl: '' };
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleImageAsFile = (e) => {
    // const image = e.target.files[0];
    // console.log(image)
    // setImageAsFile((imageFile) => image);
    setImageAsFile(e.target.files[0]);
  };
  console.log(imageAsFile);

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log('start of upload');
    // async magic goes here...
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    setUploading(true);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      (snapshot) => {

        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(progress)
        console.log(progress)
        console.log(percent)

        // var progress = (snapShot.bytesTransferred/snapShot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // Switch (snapShot.state) {
        //     case firebase.storage.TaskState.PAUSED;
        //     console.log('Upload is Paused');
        // }
        // switch (snapshot.state) {
        //     case firebase.storage.TaskState.PAUSED: // or 'paused'
        //       console.log('Upload is paused');
        //       break;
        //     case firebase.storage.TaskState.RUNNING: // or 'running'
        //       console.log('Upload is running');
        //       break;
        //   }

        //takes a snap shot of the process as it is happening
        console.log(snapshot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref('images')
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
              console.log(fireBaseUrl)
            setImageAsUrl((prevObject) => console.log(prevObject) ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
        });
      }
      );
  };
  console.log(imageAsUrl)

  return (
    <div className="App">
      <form>
        <input type="file" onChange={handleImageAsFile} />
        <button onClick={handleFireBaseUpload}>upload to firebase</button>
      </form>
      <br></br>


      {uploading 
          ? <div>
              <div className='load-bar'/>
              <span>Uploading: {percent}%</span>
            </div>
          : ''
        }
        <img src={imageAsUrl.imgUrl} alt="tag" />
    </div>
  );
}

export default ImageUpload;
