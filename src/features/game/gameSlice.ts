import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type GameplayState = boolean[];

export interface GameState {
    size: number,
    gameString: string,
    state: GameplayState,
    complete: boolean
}

const initialState: GameState = {
    size: -1,
    gameString: "",
    state: [],
    complete: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGame: (state: GameState, action: PayloadAction<number>) => {
            // TODO - Accept game string
            state.gameString = ""
            const gridSize = action.payload
            state.size = gridSize
            state.complete = false
            state.state = Array(gridSize * gridSize).fill(true)
        },
        pressButton: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const size = state.size;
            const gameState = state.state;
            const row = Math.floor(id / size);
            const col = id % state.size;

            let affectedButtons = [id]
            // Neighbouring rows
            if (row > 0) affectedButtons.push(id - size)
            if (row < size - 1) affectedButtons.push(id + size)
            // Neighbouring cols
            if (col > 0) affectedButtons.push(id - 1)
            if (col < size - 1) affectedButtons.push(id + 1)

            console.log('pressButton', row, col)
            affectedButtons.forEach(i => gameState[i] = !gameState[i])

            state.complete = !gameState.includes(true)
        }
    },
})


// Action creators are generated for each case reducer function
export const { newGame, pressButton } = gameSlice.actions

export const selectHasGame = (state: RootState): boolean => state.game.size != -1;
export const selectHasCompleted = (state: RootState): boolean => state.game.complete;
export const selectGridSize = (state: RootState): number => state.game.size;
export const selectGridCellState = (state: RootState, id: number) => id >= state.game.state.length ? false : state.game.state[id]

export default gameSlice.reducer