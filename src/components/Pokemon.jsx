import { Badge } from "react-bootstrap";

export default function pokemon({ pokemonData }) {
  return (
    <div className="my-4" style={{display: "flex", flexWrap: "wrap"}}>
      {pokemonData.map((d) => {
        return <h5 key={d.name} className="mx-1">
          <Badge bg="secondary">{d.name}</Badge>
        </h5>
      })}
    </div>
  );
}
