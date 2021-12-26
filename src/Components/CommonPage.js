import "../Components/ComponentStyle.css";

export default function Common_Page(props) {
  return (
    <>
      <div className="commonPage">
        <div className="container">
          <div id="CP_heading" className="row">
            <h1>{props.heading}</h1>
          </div>
          <div id="CP_para" className="row">
            <p>{props.para}</p>
          </div>
          <div id="CP_subheading" className="row">
            <h5>{props.subHeading}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
