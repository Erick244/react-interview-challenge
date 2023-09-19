import { FaRedo, FaUndo } from "react-icons/fa";
import { Button } from "./components/Button";
import { DotsClickArea } from "./components/DotsClickArea";
import { useDots } from "./hooks/useDots";

function App() {
    const { handlerClickArea, handlerClickRedo, handlerClickUndo, dots } =
        useDots();

    return (
        <div className="app">
            <div className="containerButtons">
                <Button
                    icon={<FaUndo />}
                    className="undo"
                    onClick={handlerClickUndo}
                />
                <Button
                    icon={<FaRedo />}
                    className="redo"
                    onClick={handlerClickRedo}
                />
            </div>
            <DotsClickArea
                dots={dots}
                className="area"
                onClick={handlerClickArea}
            />
        </div>
    );
}

export default App;
