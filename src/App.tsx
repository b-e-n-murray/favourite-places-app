import { PageHeader } from "./utils/PageHeader";
import PlaceContent from "./components/PlacesContent";

function App(): JSX.Element {
  return (
  <div>
    <h1>{PageHeader()}</h1>
    <PlaceContent />
  </div>
  )
}

export default App;
