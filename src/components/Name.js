export default function Name(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <h5 style={{ color: "black" }}>{props.position}</h5>
      </div>
    );
  }