// import React, {Component, useState, onURLChange} from 'react';
// import ImageUploader from 'react-images-upload';
// import Axios from 'axios'; 

// const UploadComponent = props => (
//     <form>
//         <label>
//             File Upload URL: 
//             <input id="urlInput" type='text' onChange={props.onURLChange} value={props.url} />
//         </label>
//         <ImageUploader
//             key='image-uploader'
//             withIcon={true}
//             singleImage={true}
//             withPreview={true}
//             label="Maximum size file: 5MB"
//             buttonText="Choose an Image"
//             onChange={props.onImage}
//             imgExtension={['.jpg', '.png', '.jpeg']}
//             maxFileSize={5242880}></ImageUploader>
//     </form>
// );

// const Images = () => {
//     const [ progress, setProgress ] = useState('getUpload')
//     const [url, setImageURL] = useState(undefined)
//     const [errorMessage, setErrorMessage ] = useState("");

// const onUrlChange = evt => {
//     setImageURL(evt.target.value);
// };

// const onImage = async (failedImages, successImages) => {
//     if (!url){
//         console.log('missing URL')
//         setErrorMessage('missin a URL to upload to')
//         setProgress('uploadError');
//         return
//     }
//     setProgress('uploading')

//     try {
//         console.log('successImages', successImages); 
//         const parts = successImages[0].split(';')
//         const mime = parts[0].split(":")[1];
//         const name = parts[1].split('=')[1];
//         const data = parts[2];
//         const res = await Axios.post(url, {mime, name, image: data}); 

//         setImageURL(res.data.imageURL)
//         setProgress( 'uploaded' )
//     } catch (error) {
//         console.log('error in upload', error); 
//         setErrorMessage(error.message); 
//         setProgress('uploadError');
//     }
// }

//     const content = () => {
//         switch(progress) {
//             case 'getUpload':
//                 return <UploadComponent onURLChange={onURLChange} onImage={onImage} url={url} />
//             case 'uploading': 
//                 return <h2>Uploading...</h2>
//             case 'uploaded':
//                 return <img src={url} alt='uploaded' />
//             case 'uploadError':
//                 return (
//                     <>
//                         <div>Error message = {errorMessage}</div>
//                         <UploadComponent onURLChange={onURLChange} onImage={onImage} url={url} />
//                     </>
//                 )
//         }
//     }

import React, { Component } from 'react'

class Images extends Component {
    state= {
        name: "",
        url: ""
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name] : evt.target.value})
    }

    handleOnClick = async (evt) => {
        evt.preventDefault()
        try {
            let fetchResponse = await fetch("/api/picture", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {name: this.state.name,
                     board: "6088632bdcf2a6c3e143aecf", 
                     url: this.state.url })
            })
            let serverResponse = await fetchResponse.json()
            console.log("Success:", serverResponse)
            alert(serverResponse)
            this.setState({ name: "" })
         } catch (err) {
            console.error("Error:", err)
            }
        };


    render() {
    return(
            <div>Image Uploader 
            {/* {content()} */}
            name ?<input name="name" value={this.state.name} onChange={this.handleChange} />
            URL?<input name="url" value={this.state.url} onChange={this.handleChange} />
            <button onClick = {(evt) => 
            {this.handleOnClick(evt)}}>Add Image</button>
            </div>
    );
    } 
}

export default Images;