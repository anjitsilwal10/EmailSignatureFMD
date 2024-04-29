import React, { useEffect, useState } from 'react';
import '../component/css/as10.css';
import axios from 'axios';
import './css/uploadSystem.css'



const EmailSignature = () => {

    let [dpicture, setDisplay] = useState('https://dasraa.com/MultiDynamicEmail/ESig-Pics/MeghaRajPoudel.png');

    const [name, setName] = useState('Full Name');
    const [designation, setDesignation] = useState('Designation');

    const [tel, setTel] = useState('1800 168 584');
    const [phone, setPhone] = useState('+61 000 000 000');

    const [email, setEmail] = useState('info@multidynami.com.au');

    const [location, setLocation] = useState('https://www.google.com/maps/search/Suite+118,+Level+49,+8+Parramatta+Square+10+Darcy+Street,+Parramatta+NSW+2150,+Australia/@-33.8154916,151.0015198,17z?entry=ttu');
    const [address, setAddress] = useState('Suite 118, Level 49, 8 Parramatta Square 10 DarcyStreet, Parramatta NSW 2150, Australia');

    const [website, setWebsite] = useState('https://www.multidynamic.com.au');

    const [franchise, setFranchise] = useState('Franchise');

    useEffect(() => {
        if (franchise === 'Multi Dynamic Ingleburn') {
            setTel('02 9618 6209');
            setWebsite('https://ingleburn.multidynamic.com.au/');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Ingleburn-Kemps+Creek/@-33.9986686,150.8640862,97m/data=!3m1!1e3!4m6!3m5!1s0x6b12ecadac124a9d:0x2fb844822c01af68!8m2!3d-33.9986742!4d150.8641614!16s%2Fg%2F11c8080z54?hl=en&entry=ttu');
            setAddress('Shop 2, 16 Ingleburn Rd, Ingleburn NSW 2565');
        }
        else if (franchise === 'Multi Dynamic Auburn') {
            setTel('1300 201 330');
            setAddress('Shop 26/22, 20 Northumberland Rd, Auburn NSW 2144');
            setLocation('google.com/maps/place/Multi+Dynamic+-+Auburn/@-33.8492245,151.030662,732m/data=!3m1!1e3!4m6!3m5!1s0x6b12bd24f2d91ce5:0x500165742fb375a6!8m2!3d-33.8480295!4d151.034055!16s%2Fg%2F11h01wsckb?hl=en&entry=tts');
            setWebsite('https://auburn.multidynamic.com.au/');
        }
        else if (franchise === 'Multi Dynamic Rouse Hill') {
            setTel('02 8678 7123');
            setAddress('Shop 1, 70 The Parkway, Beaumont Hills NSW 2155');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+RouseHill/@-33.6984005,150.9387259,17z/data=!3m2!4b1!5s0x6b12a1c602611177:0xa289b4b696c1ea30!4m6!3m5!1s0x6b129f332080262d:0x24ecee579acfba16!8m2!3d-33.6984005!4d150.9413008!16s%2Fg%2F11t1s6g1tg!5m1!1e1?hl=en&entry=tts');
            setWebsite('https://rousehill.multidynamic.com.au/');
        }
        else if (franchise === 'Multi Dynamic Southport') {
            setTel('07 5608 9845');
            setAddress('1/55 Nerang Street, Southport 4215 QLD');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Southport/@-27.9685829,153.4113815,825m/data=!3m2!1e3!5s0x6b910ff28920c3a1:0xa1c09382830bbeee!4m6!3m5!1s0x6b910f91e719ee47:0xdc4b69ef9445cccc!8m2!3d-27.9681875!4d153.4123586!16s%2Fg%2F11n6rs5jk0?hl=en&entry=ttu');
            setWebsite('https://southport.multidynamic.com.au/');
        }
        else if (franchise === 'Multi Dynamic Fitzgibbon') {
            setTel('07 3520 6611');
            setAddress('Shop 6, 545 Roghan Road, Fitzgibbon QLD 4018');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Fitzgibbon/@-27.3386977,153.0280493,17z/data=!4m14!1m7!3m6!1s0x6b93e330fc64b05d:0xee5fde94db721747!2sMulti+Dynamic+Fitzgibbon!8m2!3d-27.3386977!4d153.0280493!16s%2Fg%2F11v6dmnppm!3m5!1s0x6b93e330fc64b05d:0xee5fde94db721747!8m2!3d-27.3386977!4d153.0280493!16s%2Fg%2F11v6dmnppm?entry=ttu');
            setWebsite('https://fitzgibbon.multidynamic.com.au/');
        }
        else if (franchise === 'Multi Dynamic Adelaide') {
            setTel('08 8164 5136');
            setAddress('Unit 2, 325 Hampstead Road, Northfield SA- 5085');
            setLocation('google.com/maps/place/Multi+Dynamic+SA/@-34.8520001,138.6180742,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ab0c928421ee387:0x9abff9c05b44c9ea!8m2!3d-34.8520001!4d138.6180742!16s%2Fg%2F11hsvy3pv_?hl=en&entry=tts');
            setWebsite('https://sa.multidynamic.com.au/');
        }
        else if (franchise === '') {
            setTel('1800 168 584');
            setAddress('Suite 118, Level 49, 8 Parramatta Square 10 DarcyStreet, Parramatta NSW 2150, Australia');
            setLocation('https://www.google.com/maps/search/Suite+118,+Level+49,+8+Parramatta+Square+10+Darcy+Street,+Parramatta+NSW+2150,+Australia/@-33.8154916,151.0015198,17z?entry=ttu');
            setWebsite('https://www.multidynamic.com.au');

        }
    }, [franchise])

    const [facebook, setfacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    // const [showUploadSys,setShowUploadSys] = useState('true')

    const handleSubmit = (event) => {
        event.preventDefault();

        const previewArea = document.getElementById('previewArea');
        const range = document.createRange();
        range.selectNode(previewArea);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        alert('Signature copied to clipboard!');
    };

    function handleChlidData(clickedImagePath) {
        setDisplay(clickedImagePath);
        console.log(dpicture);
    }

    const handleDeleteData = async (deleteData) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this image?'
        );

        function onDeleteSuccess() {

        }


        if (confirmDelete) {
            try {
                // Send the DELETE request if the user confirms
                const response = await axios.delete(
                     `https://es.multidynamic.com.au/delete/${deleteData}`
                    //`http://localhost:3000/delete/${deleteData}`
                );

                console.log('Server response:', response.data);

                // Notify the user and update the UI if needed
                window.alert('Image deleted successfully');

                // You can trigger additional actions upon successful delete
                if (onDeleteSuccess) {
                    onDeleteSuccess(); // Callback to notify parent component or update state
                }
            } catch (error) {
                console.error('Error sending DELETE request:', error);
                window.alert('Error deleting the image'); // Alert in case of an error
            }
        }
    };

    return (
        <div className="container">
            <div className="form">
                <form id="signatureform" onSubmit={handleSubmit}>
                    <h1>Enter Your Data Here</h1>

                    <div className="information">
                        <div className='information-child'>
                            <label htmlFor="Display Picture">Profile Picture</label><br />
                            <input type='text' id='dpicture' name='dpicture' placeholder='URL' value={dpicture}
                                onChange={(e) => setDisplay(e.target.value)}
                            /><br />


                        </div>

                        <div className='information-child'>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="designation">Designation</label><br />
                            <input type="text" id="designation" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="franchise">Franchise</label><br />
                            <select id="franchise" name="franchise" value={franchise} onChange={(e) => setFranchise(e.target.value)}><br />
                                <option id='dropdown' value="">Select a Franchise</option>
                                <option id='dropdown' value="Multi Dynamic Ingleburn">Ingleburn</option>
                                <option id='dropdown' value="Multi Dynamic Auburn">Auburn</option>
                                <option id='dropdown' value="Multi Dynamic Rouse Hill">Rouse Hill</option>
                                <option id='dropdown' value="Multi Dynamic Southport">Southport</option>
                                <option id='dropdown' value="Multi Dynamic Fitzgibbon">Fitzgibbon</option>
                                <option id='dropdown' value="Multi Dynamic Adelaide">Adelaide</option>
                                <option id='dropdown' value="">None</option>
                            </select><br />
                        </div>



                        <div className='information-child'>
                            <label htmlFor="tel">Telephone</label><br />
                            <input type="text" id="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="phone">Phone</label><br />
                            <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="email">Email</label><br />
                            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="location">Location</label><br />
                            <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor='address'>Address</label><br />
                            <input type='text' id='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="website">Website</label><br />
                            <input type="text" id="website" name="email" value={website} onChange={(e) => setWebsite(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="facebook">Facebook</label><br />
                            <input type="text" id="facebook" name="facebook" value={facebook} onChange={(e) => setfacebook(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="instagram">Instagram</label><br />
                            <input type="text" id="instagram" name="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="linkedin">LinkedIn</label><br />
                            <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="twitter">Twitter</label><br />
                            <input type="text" id="twitter" name="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="instagram">Youtube</label><br />
                            <input type="text" id="youtube" name="instagram" value={youtube} onChange={(e) => setYoutube(e.target.value)} /><br />
                        </div>

                        <button id="submit-btn" type="submit">Generate</button>

                        <div>
                            <FileUpload sendDataToParent={handleChlidData} sendDeleteData={handleDeleteData} />
                        </div>
                    </div>
                </form>
            </div>

            <div className="signature">
                <body style={{ margin: "0", padding: "0", fontFamily: "Tahoma" }}>

                    <div id="previewArea" style={{ color: "#004c98", width: "820px" }}>
                        <p style={{ fontSize: "16px" }}>
                            <b>If you need any further information, please do not hesitate to contact me.<br />
                                Kind Regards,</b>
                        </p>
                        <br />

                        <table style={{ width: "820px", background: "url(https://dasraa.com/MultiDynamicEmail/MDstrip.png) no-repeat" }}>
                            <tbody>
                                <tr style={{ margin: "0", padding: "0", width: "820px" }}>
                                    <td style={{ width: "820px", height: "150px" }}>
                                        <img src={dpicture} alt="Agent" style={{ width: "150px", maxWidth: "150px", height: "150px", display: "block", border: "8px solid #f36421", borderRadius: "50%" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table style={{ margin: "0", padding: "0", width: "820px" }}>
                            <tbody style={{ width: "820px" }}>
                                <tr>
                                    <td style={{ margin: "0", padding: "0", width: "410px" }}>
                                        <h2 style={{ margin: "0", padding: "0", color: "#004c98" }}>{name}</h2>
                                        <p style={{ margin: "0", padding: "0", fontStyle: "italic", fontSize: "medium", color: "#004c98" }}>{designation}</p>
                                        <h4 style={{ margin: "0", padding: "0" }}>{franchise}</h4>
                                    </td>
                                    <td style={{ margin: "0", padding: "0", width: "410px", textAlign: "center" }}>
                                        {facebook && <a href={`${facebook}`} target="_blank" rel="noreferrer"><img src="https://dasraa.com/MultiDynamicEmail/Sig-Icons/facebook.png" alt="facebook" style={{ width: "30px", height: "30px", padding: "2px", margin: "2px" }} /></a>}
                                        {instagram && <a href={`${instagram}`} target="_blank" rel="noreferrer"><img src="https://dasraa.com/MultiDynamicEmail/Sig-Icons/instagram.png" alt="instagram" style={{ width: "30px", height: "30px", padding: "2px", margin: "2px" }} /></a>}
                                        {linkedin && <a href={`${linkedin}`} target="_blank" rel="noreferrer"><img src="https://dasraa.com/MultiDynamicEmail/Sig-Icons/linkedin.png" alt="linkedin" style={{ width: "30px", height: "30px", padding: "2px", margin: "2px" }} /></a>}
                                        {twitter && <a href={`${twitter}`} target="_blank" rel="noreferrer"><img src="https://dasraa.com/MultiDynamicEmail/Sig-Icons/twitterx.png" alt="twitter" style={{ width: "30px", height: "30px", padding: "2px", margin: "2px" }} /></a>}
                                        {youtube && <a href={`${youtube}`} target="_blank" rel="noreferrer"><img src="https://dasraa.com/MultiDynamicEmail/Sig-Icons/youtube.png" alt="youtube" style={{ width: "30pxx", height: "30px", padding: "2px", margin: "2px" }} /></a>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table style={{ margin: "0", padding: "0", width: "820px" }}>
                            <tbody>
                                <tr>
                                    {/* Left side - Contact information */}
                                    <td style={{ margin: "0", padding: "0", width: "50%" }}>
                                        <table style={{ margin: "0", padding: "0", width: "100%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                                                            <img src="https://dasraa.com/MultiDynamicEmail/website.png" alt="contact" style={{ width: "auto", maxWidth: "100%", height: "auto", display: "block" }} />
                                                        </a>
                                                    </td>
                                                    <td style={{ margin: "0", padding: "0", fontSize: "14px" }}>
                                                        <p style={{ margin: "0", padding: "0" }}>
                                                            <a href={`tel:{tel}`} target="_blank" rel="noreferrer" style={{ color: "#004c98", textDecoration: "none" }}>{tel}</a>
                                                            &nbsp;&nbsp;•&nbsp;&nbsp;
                                                            <a href="tel:{phone}" target="_blank" rel="noreferrer" style={{ color: "#004c98", textDecoration: "none" }}>{phone}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                                                            <img src="https://dasraa.com/MultiDynamicEmail/email.png" alt="contact" style={{ width: "25px", maxWidth: "25px", height: "25px", display: "block" }} />
                                                        </a>
                                                    </td>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
                                                            <a href={`mailto:${email}`} target="_blank" rel="noreferrer" style={{ margin: "0", padding: "0", color: "#004c98", textDecoration: "none" }}>{email}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <a href={`${location}`} target="_blank" rel="noreferrer">
                                                            <img src="https://dasraa.com/MultiDynamicEmail/location.png" alt="contact" style={{ width: "25px", maxWidth: "25px", height: "25px", display: "block" }} />
                                                        </a>
                                                    </td>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
                                                            <a href={`${location}`} target="_blank" rel="noreferrer" style={{ color: "#004c98", textDecoration: "none" }}>{address}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <a href={`${website}`} target="_blank" rel="noreferrer" >
                                                            <img src="https://dasraa.com/MultiDynamicEmail/website.png" alt="contact" style={{ width: "25px", maxWidth: "25px", height: "25px", display: "block" }} />
                                                        </a>
                                                    </td>
                                                    <td style={{ margin: "0", padding: "0" }}>
                                                        <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
                                                            <a href={`${website}`} target="_blank" rel="noreferrer" style={{ color: "#004c98", textDecoration: "none" }}>{website}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Right side - Image */}
                                    <td style={{ margin: "0", padding: "0", textAlign: "center" }}>
                                        <img src="https://dasraa.com/MultiDynamicEmail/awards.png" alt="awards" style={{ width: "246px", maxWidth: "246px", height: "130" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <table style={{ margin: "0", padding: "0" }}>
                            <tbody>
                                <tr>
                                    <td style={{ margin: "0", padding: "0" }}>
                                        <img src="https://dasraa.com/MultiDynamicEmail/Footer.png" alt="footer" style={{ width: "820x", maxWidth: "820px", height: "auto", display: "block" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p style={{ fontSize: "9px", color: "#666666", lineHeight: "100%", margin: "0", padding: "0", width: "820px" }}>
                            <b>Disclaimer:</b>
                            This email is for its intended recipient only. If this
                            email has been sent to you by error or contains private or confidential
                            information, including the contact details of other persons, then you
                            must not copy and distribute this information. Any views expressed in
                            this email are those of the individual sender and may not necessarily
                            reflect the views of Multi-Dynamic Pty Ltd. The sender
                            believes this communication is free from any virus, worm, Trojan horse
                            and/ or malicious code when sent. By reading this message and opening
                            any attachments, the recipient accepts full responsibility for taking
                            protective and remedial action as required.
                            <br />
                            <b>Privacy Policy:</b>
                            <a href="https://multidynamic.com.au/images/Privacy_policies.pdf" style={{ color: "#004c98", textDecoration: "none" }}>ClickHere</a>
                        </p>
                    </div>

                </body>

            </div>
        </div>
    );
};
export default EmailSignature;



function FileUpload({ sendDataToParent, sendDeleteData }) {
    const [file, setFile] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]); // Initialize as an empty array
    const [errorMessage, setErrorMessage] = useState('');
    const [showImages, setShowImages] = useState(false); // State variable to track if images should be displayed
    let clickedImagePath;
    let deleteData;

    const [refreshTrigger, setRefreshTrigger] = useState(false); // A state variable to trigger re-render



    useEffect(() => {
        fetchUploadedImages(); // Fetch uploaded images on component mount
    }, []);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
        toggleShowImages();
        console.log(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setErrorMessage('Please select an image');
            toggleShowImages();
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://es.multidynamic.com.au:3000/uploads', formData, {
                //const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            window.alert('Image uploaded successfully');
            setShowImages(true); // Show images after successful upload
            setErrorMessage(); // Clear error message
            fetchUploadedImages(); // Fetch updated list of uploaded images
        } catch (error) {
            console.error('Error uploading file:', error);
            setErrorMessage('Error uploading file');
        }
    };
    const handleImageClick = (imagePath) => {
        clickedImagePath = imagePath;
        sendDataToParent(clickedImagePath);
        setShowImages(false);
    };


    const fetchUploadedImages = async () => {
        try {
           // const response = await axios.get('http://localhost:3000/uploads');
            const response = await axios.get('https://es.multidynamic.com.au:3000/uploads');
            console.log(response.data); // Log response data to verify format

            // Destructure the response data to extract imagePath and fileName
            const uploadedImages = response.data.map(({ imagePath, fileName }) => ({ imagePath, fileName }));
            setUploadedImages(uploadedImages || []); // Set uploaded images state with server response or empty array if response is falsy
        } catch (error) {
            console.error('Error fetching uploaded images:', error);
            setErrorMessage('Error fetching uploaded images');
        }
    };


    const handleDeleteImage = (fileName) => {
        deleteData = fileName;
        sendDeleteData(deleteData);
        console.log("button clicked image Path:", deleteData);
        refreshImages();

    }

    useEffect(() => {
        fetchUploadedImages(); // Fetch images when 'refreshTrigger' changes
    }, [refreshTrigger]); // Dependency array with 'refreshTrigger'

    const refreshImages = () => {
        setRefreshTrigger(!refreshTrigger); // Toggle the refresh trigger to cause re-fetching
    };

    const toggleShowImages = () => {
        setShowImages((prevState) => !prevState); // Toggle 'showImages' using the previous state
      };

    useEffect(() => {
        console.log("Clicked Image Path:", clickedImagePath);
    }, [clickedImagePath]);


    return (
        <div className='container-uploadsys'>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input id='image-input' type="file" onChange={handleChange} />
                <button id='upload-btn' onClick={handleSubmit} type="button">Upload</button>
            </form>

            {file && (
                <div className='render-image'>
                    <img
                        src={URL.createObjectURL(file)}
                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                        alt='Uploaded Preview'
                    />
                </div>
            )}

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {/* <button className='show-button'type='button' onClick={() => setShowImages(true)}>Uploaded Images</button> */}
            <button className='show-button'type='button' onClick={toggleShowImages}>Uploaded Images</button>
            
            {showImages && (
                <div className='uploaded-images'>
                    {Array.isArray(uploadedImages) && uploadedImages.map((image, index) => (
                        <div className='images-container' key={index}>
                            <img
                                src={image.imagePath}
                                alt={image.fileName}
                                onClick={() => handleImageClick(image.imagePath)} // Call handleImageClick function on click
                                className='gallery-image'
                            />
                            <p>{image.fileName}</p>
                            <button id='upload-btn' onClick={() => handleImageClick(image.imagePath)} type='button'>
                                Set Image
                            </button>
                            <button id='btn' type='button' onClick={() => handleDeleteImage(image.fileName)} >Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}