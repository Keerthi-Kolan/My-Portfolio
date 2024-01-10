const Contact = () => {
    return ( 
        <div className="info">
        <h3>Email:<h4>keerthi.kolan@gmail.com</h4></h3>
            <h3>Phone No.: <h4>+1 510-330-9516</h4></h3>
            <div className="LinkedIn">
            <a href="https://www.linkedin.com/in/keerthi-kolan/"><img src={require(".//Images//LinkedIn.png")} alt="LinkedIn Logo" /></a>
            </div>
           <div className="Github">
           <a href="https://github.com/Keerthi-Kolan" ><img src={require(".//Images//Github.png")} alt="LinkedIn Logo" /></a>
           </div>
        </div>
     );
}
 
export default Contact;