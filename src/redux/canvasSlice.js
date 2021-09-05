import { createSlice } from "@reduxjs/toolkit";

const canvasSlice = createSlice( {
    name: "canvas",
    initialState: {
        width: 1000,
        height: 800,
        zoom: 100,
        offsetX: ( document.documentElement.clientHeight - 800 ) / 2,
        offsetY: ( document.documentElement.clientWidth - 1000 ) / 2,
        displayGrid: true,
        gridInterval: 10,
        dark: false
    },
    reducers: {
        setCanvasDimensions( state, action ) {
            return { ...state, width: action.payload.width || state.width, height: action.payload.height || state.height };
        },
        setZoom( state, action ) {
            return { ...state, zoom: action.payload };
        },
        setCanvasOffset( state, action ) {
            return { ...state, offsetX: action.payload.offsetX || state.offsetX, offsetY: action.payload.offsetY || state.offsetY };
        },
        toggleGridDisplay( state ) {
            return { ...state, displayGrid: !state.displayGrid };
        },
        setGridInterval( state, action ) {
            return { ...state, gridInterval: Math.min( Math.max( Math.round( action.payload ), 5 ), 100 ) };
        },
        toggleDark( state ) {
            return { ...state, dark: !state.dark };
        }
    }
} );

export const {
    setcanvasDimensions,
    setZoom,
    setCanvasOffset,
    toggleGridDisplay,
    setGridInterval,
    toggleDark
} = canvasSlice.actions;

export default canvasSlice.reducer;
