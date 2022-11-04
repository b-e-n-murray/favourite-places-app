import { PageHeader } from "./utils/PageHeader";
import PlaceEntry from "./components/Places";

function App(): JSX.Element {
  return (
  <div>
    <h1>{PageHeader()}</h1>
    <PlaceEntry />
  </div>
}

export default App;
