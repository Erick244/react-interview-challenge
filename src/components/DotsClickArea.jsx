import { Dot } from "./Dot";

export function DotsClickArea(props) {
    const { dots } = props;

    return (
        <div {...props}>
            {dots &&
                dots.map((dot, index) => {
                    const dotStyle = {
                        top: `${dot.positions.y}px`,
                        left: `${dot.positions.x}px`,
                        backgroundColor: dot.backgroundColor,
                    };

                    return <Dot key={index} style={dotStyle} />;
                })}
        </div>
    );
}
