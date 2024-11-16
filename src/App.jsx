import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex gap-2 p-5">
        <LikeButton />
        <LikeButton />
      </div>
      
      <Counter className="mb-5" />

      <ClickablePicture className="mb-5"/>
      <Dice />
    </div>
  );
}

export default App;
