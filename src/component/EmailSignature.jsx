import React, { useEffect, useState } from 'react';
import '../component/css/CopyEmailSignature.css';
// import FacebookImage from '../images/facebook.png';
// import InstagramImage from '../images/instagram.png';
// import LinkedInImage from '../images/linkedin.png';
// import TwitterImage from '../images/twitterx.png';
// import YoutubeImage from '../images/youtube.png';


const EmailSignature = () => {
    
    const [dpicture, setDisplay] = useState('https://dasraa.com/MultiDynamicEmail/MDstrip.png');

    const [name, setName] = useState('Full Name');
    const [designation, setDesignation] = useState('Designation');

    const [tel, setTel] = useState('1800 168 584');
    const [phone, setPhone] = useState('+61 000 000 000');

    const [email, setEmail] = useState('multi.dynamic@multidynami.com.au');

    const [location, setLocation] = useState('https://www.google.com/maps/search/Suite+118,+Level+49,+8+Parramatta+Square+10+Darcy+Street,+Parramatta+NSW+2150,+Australia/@-33.8154916,151.0015198,17z?entry=ttu');
    const [address, setAddress] = useState('Suite 118, Level 49, 8 Parramatta Square 10 DarcyStreet, Parramatta NSW 2150, Australia');

    const [website, setWebsite] = useState('https://www.multidynamic.com.au');

    const [franchise, setFranchise] = useState('Franchise');

    useEffect(() =>{
        if (franchise === 'Ingleburn'){
            setTel('02 9618 6209');
            setWebsite('https://ingleburn.multidynamic.com.au/');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Ingleburn-Kemps+Creek/@-33.9986686,150.8640862,97m/data=!3m1!1e3!4m6!3m5!1s0x6b12ecadac124a9d:0x2fb844822c01af68!8m2!3d-33.9986742!4d150.8641614!16s%2Fg%2F11c8080z54?hl=en&entry=ttu');
            setAddress('Shop 2, 16 Ingleburn Rd, Ingleburn NSW 2565');
        }
        else if(franchise === 'Auburn'){
            setTel('1300 201 330');
            setAddress('Shop 26/22, 20 Northumberland Rd, Auburn NSW 2144');
            setLocation('google.com/maps/place/Multi+Dynamic+-+Auburn/@-33.8492245,151.030662,732m/data=!3m1!1e3!4m6!3m5!1s0x6b12bd24f2d91ce5:0x500165742fb375a6!8m2!3d-33.8480295!4d151.034055!16s%2Fg%2F11h01wsckb?hl=en&entry=tts');
            setWebsite('https://auburn.multidynamic.com.au/');
        }
        else if(franchise === 'Rouse Hill'){
            setTel('02 8678 7123');
            setAddress('Shop 1, 70 The Parkway, Beaumont Hills NSW 2155');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+RouseHill/@-33.6984005,150.9387259,17z/data=!3m2!4b1!5s0x6b12a1c602611177:0xa289b4b696c1ea30!4m6!3m5!1s0x6b129f332080262d:0x24ecee579acfba16!8m2!3d-33.6984005!4d150.9413008!16s%2Fg%2F11t1s6g1tg!5m1!1e1?hl=en&entry=tts');
            setWebsite('https://rousehill.multidynamic.com.au/');
        }
        else if(franchise === 'Southport'){
            setTel('07 5608 9845');
            setAddress('1/55 Nerang Street, Southport 4215 QLD');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Southport/@-27.9685829,153.4113815,825m/data=!3m2!1e3!5s0x6b910ff28920c3a1:0xa1c09382830bbeee!4m6!3m5!1s0x6b910f91e719ee47:0xdc4b69ef9445cccc!8m2!3d-27.9681875!4d153.4123586!16s%2Fg%2F11n6rs5jk0?hl=en&entry=ttu');
            setWebsite('https://southport.multidynamic.com.au/');
        }
        else if(franchise === 'Fitzgibbon'){
            setTel('07 3520 6611');
            setAddress('Shop 6, 545 Roghan Road, Fitzgibbon QLD 4018');
            setLocation('https://www.google.com/maps/place/Multi+Dynamic+Fitzgibbon/@-27.3386977,153.0280493,17z/data=!4m14!1m7!3m6!1s0x6b93e330fc64b05d:0xee5fde94db721747!2sMulti+Dynamic+Fitzgibbon!8m2!3d-27.3386977!4d153.0280493!16s%2Fg%2F11v6dmnppm!3m5!1s0x6b93e330fc64b05d:0xee5fde94db721747!8m2!3d-27.3386977!4d153.0280493!16s%2Fg%2F11v6dmnppm?entry=ttu');
            setWebsite('https://fitzgibbon.multidynamic.com.au/');
        }
        else if(franchise === 'Adelaide'){
            setTel('08 8164 5136');
            setAddress('Unit 2, 325 Hampstead Road, Northfield SA- 5085');
            setLocation('google.com/maps/place/Multi+Dynamic+SA/@-34.8520001,138.6180742,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ab0c928421ee387:0x9abff9c05b44c9ea!8m2!3d-34.8520001!4d138.6180742!16s%2Fg%2F11hsvy3pv_?hl=en&entry=tts');
            setWebsite('https://sa.multidynamic.com.au/');
        }
        else if(franchise === ''){
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

    return (
        <div className="container">
            <div className="form">
                <form id="signatureform" onSubmit={handleSubmit}>
                    <h1>Enter Your Data Here</h1>
                    {/* <h3>Enter the following information</h3> */}

                    <div className="information">
                        <div className='information-child'>
                            <label htmlFor='Display Picture'>Profile Picture</label><br/>
                            <input type='text' id='dpicture' name='dpicture' placeholder='URL' value={dpicture} onChange={(e) => setDisplay(e.target.value)}/><br/>
                        </div>

                        <div className='information-child'>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        </div>

                       <div className='information-child'>
                            <label htmlFor="designation">Designation</label><br />
                            <input type="text" id="designation" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} /><br />
                       </div>

                        {/* <label htmlFor="franchise">Franchise</label><br />
                        <input type="text" id="franchise" name="designation" value={franchise} onChange={(e) => setFranchise(e.target.value)} /><br /> */}
                        <div className='information-child'>
                            <label htmlFor="franchise">Franchise</label><br />
                            <select id="franchise" name="franchise" value={franchise} onChange={(e) => setFranchise(e.target.value)}><br/>
                            <option id='dropdown' value="">Select a Franchise</option>
                            <option id='dropdown' value="Ingleburn">Ingleburn</option>
                            <option id='dropdown' value="Auburn">Auburn</option>
                            <option id='dropdown' value="Rouse Hill">Rouse Hill</option>
                            <option id='dropdown' value="Southport">Southport</option>
                            <option id='dropdown' value="Fitzgibbon">Fitzgibbon</option>
                            <option id='dropdown' value="Adelaide">Adelaide</option>
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
                            <label htmlFor='address'>Address</label><br/>
                            <input type='text' id='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
                        </div>

                        <div className='information-child'>
                            <label htmlFor="website">Website</label><br />
                            <input type="text" id="website" name="email" value={website} onChange={(e) => setWebsite(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="facebook">Facebook</label><br/>
                            <input type="text" id="facebook" name="facebook" value={facebook} onChange={(e) => setfacebook(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="instagram">Instagram</label><br/>
                            <input type="text" id="instagram" name="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="linkedin">LinkedIn</label><br/>
                            <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="twitter">Twitter</label><br/>
                            <input type="text" id="twitter" name="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} /><br />
                        </div>

                        <div className='information-child'>
                            <label htmlFor="instagram">Youtube</label><br/>
                            <input type="text" id="youtube" name="instagram" value={youtube} onChange={(e) => setYoutube(e.target.value)} /><br />
                        </div>

                        <button id="submit-btn" type="submit">Generate</button>
                    </div>
                </form>
            </div>

            <div className="signature">
                <div id="previewArea">

                    <p className='p-top'>If you need any further information, please do not hesitate to contact
                        me.<br/>
                        Kind Regards,
                    </p>
                    
                    <table className='table-strip'>
                        <tr>
                            <td className='dp-strip'>
                                <img className='strip' src={dpicture} alt='person'/>
                            </td>
                        </tr>
                    </table>

                    <table>
                        <tr className='name-media'>
                            <td className='table-name'>
                                <h2 className='name'>{name}</h2>
                                <p className='designation'><i>{designation}</i></p>   
                                <h4><i>{franchise}</i></h4> 
                            </td>
                                    
                            <td className='table-media'>
                                
                                    

                                    {facebook && (
                                        <a href={facebook} target='_blank' rel='noreferrer'>
                                            {/* <img src='https://dasraa.com/MultiDynamicEmail/facebook.png' alt='facebook'/> */}
                                            <img src='https:/dasraa.com/MultiDynamicEmail/MediaIcons/facebook.png' alt='facebook'/>
                                        </a>
                                    )}

                                    {instagram &&(
                                        <a href={instagram} target='_blank' rel='noreferrer'>
                                            {/* <img src='https://dasraa.com/MultiDynamicEmail/insta.png' alt='instagram'/> */}
                                            <img src='https:/dasraa.com/MultiDynamicEmail/MediaIcons/instagram.png' alt='instagram'/>
                                        </a>
                                    )}

                                    {linkedin &&(
                                        <a href={linkedin} target='_blank' rel='noreferrer'>
                                            {/* <img src='https://dasraa.com/MultiDynamicEmail/linkedin.png' alt='linkedin'/> */}
                                            <img src='https:/dasraa.com/MultiDynamicEmail/MediaIcons/linkedin.png' alt='linkedin'/>
                                        </a>
                                    )}

                                    
                                    {twitter && (
                                        <a href={twitter} target='_blank' rel='noreferrer'>
                                            {/* <img src='https://dasraa.com/MultiDynamicEmail/twitter.png' alt='twitter'/> */}
                                            <img src='https:/dasraa.com/MultiDynamicEmail/MediaIcons/twitterx.png' alt='twitter'/>
                                        </a>
                                    )}

                                    {youtube &&(
                                        <a href={youtube} target='_blank' rel='noreferrer'>
                                            {/* <img src='https://dasraa.com/MultiDynamicEmail/youtube.png' alt='youtube'/> */}
                                            <img src='https:/dasraa.com/MultiDynamicEmail/MediaIcons/youtube.png' alt='youtube'/>
                                        </a>
                                    )}

                            </td>
                        </tr>
                    </table>

                                {/* Middle Section */}
                    <table className='middle-section'>
                        <tr>
                            <td className='info-section'>
                              
                                <table>
                                    <tr>
                                        <td id='info-logo'>
                                            <a target='_blank' rel='noreferrer' href = {`tel:${phone}`}>
                                                <img id='contact-info' src='https://dasraa.com/MultiDynamicEmail/phone.png' alt='contact'/>
                                            </a>
                                        </td>

                                        <td>
                                            <p>
                                                <a id='contact-detail' target='_blank' rel='noreferrer' href= {`tel:${tel}`}>{tel} </a>
                                                    &nbsp;&nbsp;•&nbsp;&nbsp;
                                                <a id='contact-detail' target='_blank' rel='noreferrer' href={`tel:${phone}`}>{phone}</a>
                                            </p>
                                        </td>
                                    </tr>

                                    {/* email address */}
                                    <tr>
                                       <td id='info-logo'>
                                        <a target='_blank' rel='noreferrer' href = {`mailto:${email}`}>
                                                <img id='contact-info' src='https://dasraa.com/MultiDynamicEmail/email.png' alt='contact'/>
                                        </a>
                                       </td>

                                       <td>
                                        <p>
                                            <a target='_blank' rel='noreferrer' id='contact-detail' href={`mailto:${email}`}>
                                                {email}
                                            </a>
                                        </p>
                                       </td>
                                    </tr>

                                    {/* location */}
                                    <tr>
                                        <td id='info-logo'>
                                            <a target='_blank' rel='noreferrer' href= {location}>
                                                <img id='contact-info' src='https://dasraa.com/MultiDynamicEmail/location.png' alt='contact'/>
                                            </a>
                                        </td>

                                        <td>
                                            <p>
                                            <a target='_blank' rel='noreferrer' id='contact-detail' href = {location}>
                                                    {address}
                                                </a>
                                            </p>
                                        </td>
                                    </tr>

                                    {/* website */}
                                    <tr>
                                        <td id='info-logo'>
                                            <a href = {website} target= '_blank' rel='noreferrer'>
                                                <img id='contact-info' src='https://dasraa.com/MultiDynamicEmail/website.png' alt='contact'/>
                                            </a>
                                        </td>

                                        <td>
                                            <p>
                                                <a id='contact-detail' href={website} target='_blank' rel='noreferrer'>
                                                    {website}
                                                </a>
                                            </p>
                                        </td>
                                    </tr>

                                            
                                </table>
                            </td>
                        

                            {/* awards section */}
                            <td className='awards-section'>
                                        <img id='awards-image' src='https://dasraa.com/MultiDynamicEmail/awards.png' alt='contact'/>

                            </td>
                        </tr>
                                
                    </table>

                    {/* Bottom Strip */}
                    <table className='bottom-section'>
                        <tr className='strip-bottom'>
                            {/* <img src='https://dasraa.com/MultiDynamicEmail/Footer.png' alt='Strip-bottom'/> */}
                           <td className='strip-bottom-text'>
                                    <p>Your Dream Home Is Our Mission</p>
                           </td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <td>
                                <p className='p-bottom'>
                                    <b>Disclaimer:</b>This email is for its intended recipient only. If this
                                    email has been sent to you by error or contains private or confidential
                                    information, including the contact details of other persons, then you
                                    must not copy and distribute this information. Any views expressed in
                                    this email are those of the individual sender and may not necessarily
                                    reflect the views of &nbsp;Multi&nbsp;Dynamic&nbsp;Pty Ltd. The sender
                                    believes this communication is free from any virus, worm, Trojan horse
                                    and/ or malicious code when sent. By reading this message and opening
                                    any attachments, the recipient accepts full responsibility for taking
                                    protective and remedial action as required.<br/>
                                    <strong>Privacy Policy:</strong>
                                        <a
                                            href="https://multidynamic.com.au/images/Privacy_policies.pdf"
                                            >ClickHere
                                        </a>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default EmailSignature;
