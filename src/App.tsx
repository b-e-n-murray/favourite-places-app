import { PageHeader } from "./utils/PageHeader";
import { PageFooter } from "./utils/PageFooter";
import PlaceContent from "./components/PlacesContent";

function App(): JSX.Element {
  return (
  <div>
    <h1>{PageHeader()}</h1>
    <PlaceContent />
    <p>{PageFooter()}</p>
  </div>
  )
}

export default App;
