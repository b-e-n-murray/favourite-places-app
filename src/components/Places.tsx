interface PlacesEntryProps {
  title: string;
  entrynum: number;
  image: string;
  description: string;
  mapslink: string;
}

function PlaceEntry(props: PlacesEntryProps): JSX.Element {
  return (
    <div>
      <h2>This webpage will showcase some of my top recommended spots</h2>
      <h3>
        Location {props.entrynum}:{" "}
        <a href="https://www.tripadvisor.ie/">{props.title}</a>
      </h3>
      <img
        src={props.image}
        alt="aesthetic location"
        height="600"
        width="800"
      ></img>
      <p>{props.description}</p>
      <p>
        Find this spot on Google Maps<a href={props.mapslink}>here</a>
      </p>
    </div>
  );
}

export default PlaceEntry;

/*const objArr = [{title: PortoSanto}, {entryNum: 1}, {image:""}, {description: ""}, {mapslink:""}] */
/*const mappedArr = objArr.map()*/
