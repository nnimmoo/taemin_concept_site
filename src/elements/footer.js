import "../style/footer.css"

function Footer() {
  return (
    <div className="footer">
      <hr/>
      <div className="inside">
        <div className="left">
          <h1>Get all The <br/> new Information</h1>
          <input type="email" placeholder="email"/>
          <button>subscribe</button>
        </div>
        <div className="right">
          <h3>Check Out on Social Media</h3>
          <ul>
            <li>instagram</li>
            <li>facebook</li>
            <li>Twitter</li>
          </ul>

        </div>
      </div>
      <center>
        <p>@nnimmoo All Rights Reserved 2022</p>
      </center>
    </div>
  );
}

export default Footer;
