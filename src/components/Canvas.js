import React, { useRef, useEffect } from "react";

import Paper from "paper";

const Canvas = props => {

    const canvasRef = useRef( null );

    useEffect( () => {
        const canvas = canvasRef.current;
        Paper.setup( canvas );
    }, [] );
    
    return <canvas
        { ...props }
        ref={ canvasRef }
        id="canvas"
        resize="true"
    />

};

export default Canvas;
