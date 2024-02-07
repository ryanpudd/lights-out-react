import Box from '@mui/material/Box';
import GridItem from '../GridItem/GridItem';
import { selectGridSize } from '../../features/game/gameSlice';
import { useSelector } from 'react-redux';

export default function LightsOutGrid() {
    const gridSize = useSelector(selectGridSize)
    const gridTemplateString = `repeat(${gridSize}, 1fr)`
    const gridItemSize = gridSize * gridSize

    console.log("Grid", gridSize, gridItemSize)
    let gridItems = [];
    for (let i = 0; i < gridItemSize; i++) {
        gridItems.push(<GridItem key={i} id={i} />)
    }

    return (
        <Box display="grid" gridTemplateColumns={gridTemplateString} gridTemplateRows={gridTemplateString} gap={2}>
            {gridItems}
        </Box>
    );
}
