import React, {Component, useState, onURLChange} from 'react';
import ImageUploader from 'react-images-upload';

const UploadComponent = props => (
    <form>
        <label>
            File Upload URL: 
            <input id="urlInput" type='text' onChange={props.onURLChange} value={props.url} />
        </label>
        <ImageUploader
            key='image-uploader'
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum size file: 5MB"
            buttonText="Choose an Image"
            onChange={props.onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}></ImageUploader>
    </form>
);


const Images = () => {
    const [ progress, setProgress ] = useState('getUpload')
    const [url, setImageURL] = useState(undefined)
    const [errorMessage, setErrorMessage ] = useState("");

const onUrlChange = evt => {
    setImageURL(evt.target.value);
};

const onImage = async (failedImages, successImages) => {
    if (!url){
        console.log('missing URL')
        setErrorMessage('missin a URL to upload to')
        setProgress('uploadError');
        return
    }
    setProgress('uploading')

    try {
        console.log('successImages', successImages)
    } catch (error) {
        console.log('error in upload', error); 
        setErrorMessage(error.message); 
        setProgress('uploadError');
    }
}

    const content = () => {
        switch(progress) {
            case 'getUpload':
                return <UploadComponent onURLChange={onURLChange} onImage={onImage} url={url} />
            case 'uploading': 
                return <h2>Uploading...</h2>
            case 'uploaded':
                return <img src={url} alt='uploaded' />
            case 'uploadError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadComponent onURLChange={onURLChange} onImage={onImage} url={url} />
                    </>
                )
        }
    }

    return(
            <div>Image Uploader Testing
            {content()}
            </div>
    );
};


export default Images;