import Button from "@mui/material/Button"
import { pressButton, selectGridCellState } from "../../features/game/gameSlice"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useAppDispatch } from "../../app/hooks"

interface GridItemProps {
    id: any
}

export default function GridItem({ id }: GridItemProps) {
    const dispatch = useAppDispatch();
    const itemState: boolean = useSelector((state: RootState) => selectGridCellState(state, id))
    const buttonVariant = itemState ? "contained" : "outlined"

    return (
        <Button onClick={() => dispatch(pressButton(id))} variant={buttonVariant}>{id}</Button>
    )
}