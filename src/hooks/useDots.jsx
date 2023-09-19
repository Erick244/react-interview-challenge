import { useState } from "react";
import { genHexColor } from "../functions/dots/color";
import { existDots } from "../functions/dots/validation";

export function useDots() {
    const [dots, setDots] = useState([]);
    const [removedDots, setRemovedDots] = useState([]);

    function handlerClickArea(e) {
        const mousePositionY = e.clientY;
        const mousePositionX = e.clientX;

        const newDot = {
            positions: {
                y: mousePositionY,
                x: mousePositionX,
            },
            backgroundColor: genHexColor(),
        };

        setDots([...dots, newDot]);
    }

    function handlerClickUndo() {
        const notExistDots = !existDots(dots);
        if (notExistDots) return;

        const dotsClone = [...dots];
        const undoDot = dotsClone.pop();

        setRemovedDots([...removedDots, undoDot]);
        setDots(dotsClone);
    }

    function handlerClickRedo() {
        const notExistDots = !existDots(removedDots);
        if (notExistDots) return;

        const removedDotsClone = [...removedDots];
        const redoDot = removedDotsClone.pop();

        setDots([...dots, redoDot]);
        setRemovedDots(removedDotsClone);
    }

    return {
        handlerClickArea,
        handlerClickUndo,
        handlerClickRedo,
        dots,
    };
}
