import "../Components/ComponentStyle.css";

export default function Common_Thanks_Page(props) {
  return (
    <>
      <div className="commonThanksPage">
        <div className="container">
          <div id="CTP_heading" className="row">
            <h1>{props.heading}</h1>
          </div>
          <div id="CTP_para1" className="row">
            <h5>{props.para1}</h5>
          </div>
          <div id="CTP_para2" className="row">
            <h5>{props.para2}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
