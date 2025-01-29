import { Card } from "./Card";
import { ChatBox } from "./ChatBox";

export const Solumegle = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h3 style={{ paddingBottom: "30px", marginTop:"2px" }}>
              <span style={{ color: "black" }}>Sou</span>
              <span style={{ color: "purple" }}>lMegle</span>
            </h3>

            <Card />

            <span>
              <p style={{ paddingTop: "150px" }}>
                <a
                  href="#"
                  className="btn btn-lg disabled"
                  role="button"
                  aria-disabled="true"
                  style={{
                    background: "purple",
                    color: "white",
                    height: "50px",
                    marginTop: "3px",
                    display: "inline-block",
                    textAlign: "center",
                    marginBottom: "3px",
                  }}
                >
                  Search Soulmate
                </a>
                <a> <img src="/image/image.png" alt="Description" style={{height:'25px'}}  /></a>
                <a> <img src="/image/video.png" alt="Description" style={{height:'25px'}}  /></a>




                <a style={{marginLeft:"500px"}}>  <img src="/image/circle.png" alt="Description" style={{height:'16px',marginRight:'13px'}}  />Connected</a>



              </p>


            </span>
            
          </div>

          <div className="col-md-3">
            <ChatBox />
          </div>

        



        </div>
      </div>

      <div></div>
    </>
  );
};
