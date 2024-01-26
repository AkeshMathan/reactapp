import "../css/props.css";
function PropsComponent(props) {
  return (
    <div class="css">
      <h3>
        Hai {props.name}
        <br></br>Welcome to {props.course} class
      </h3>
    </div>
  );
}
export default PropsComponent;
