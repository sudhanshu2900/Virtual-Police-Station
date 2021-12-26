import "../Components/ComponentStyle.css";

export default function FormInternalComp(props) {
  return (
    <>
      <div id="FIC" className="container">
        <label>
          <div id="FIC_Form" className="row">
            <div id="FIC_first" className="col-lg-6 col-md-6 col-sm-12">
              <div id="FIC_first_box">
                <p>{props.first}</p>
              </div>
            </div>
            <div id="FIC_second" className="col-lg-6 col-md-6 col-sm-12">
              <input
                style={{
                  width: "300px",
                  borderRadius: "50px",
                  border: "1px solid gray",
                  padding: "3px"
                }}
                type={props.type}
                name={props.third}
                placeholder=" Enter here..."
              />
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
