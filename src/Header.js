function Header(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{backgroundColor: "beige"}}>
            <h4 className="logo">Horizones Offices</h4>
          </div>
  
          <div className="col-md-2" style={{backgroundColor: "beige"}}>
            <img src="bootstrap images/ghana.png" className="flag-1" />
          </div>
          <div className="col-md-2" style={{backgroundColor: "beige"}}>
            <img src="bootstrap images/nigeria.png" className="flag-2" />
          </div>
          <div className="col-md-2" style={{backgroundColor: "beige"}}>
            <img src="bootstrap images/kenya.png" className="flag-3" />
          </div>
          <div className="col-md-2" style={{backgroundColor: "beige"}}>
            <h4 className="about-us">About Us</h4>
          </div>
        </div>
      </div> 
    )
  }
  
  export default Header;
  