import Button from "@mui/material/Button";
import { newGame } from "../../features/game/gameSlice";
import { useAppDispatch } from "../../app/hooks";

interface NewGameButtonProps {
    size: number
}

export default function NewGameButton({ size }: NewGameButtonProps) {
    const dispatch = useAppDispatch()

    return (<Button variant="contained" onClick={() => dispatch(newGame(size))}>New {size}x{size} Game</Button>)
}