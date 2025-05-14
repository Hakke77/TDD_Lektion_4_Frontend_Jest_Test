/* TODO - Have we interacted with the button?
 *   Check for states, for hover, clicked and idle
 *   Classname TEST
 */

import { useState } from "react";

// ENUM - 3 different states for button
// Idle Hover Clicked
export enum ButtonState {
    idle = "idle",
    hover = "hover",
    clicked = "clicked"
}

// You lose on: Refactor capabilities, Immutability (Gain in performance)
type ButtonStateTwo = "idle" | "hover" | "clicked";

// INTERFACE - PROPS
interface CustomButtonProps {
    buttonTest: string
}

export default function CustomButton(props: CustomButtonProps) {
    const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
    const [buttonStateTwo, setButtonStateTwo] = useState<ButtonStateTwo>("idle")

    return (
        <input
            type="button"
            value={props.buttonTest}
            className={buttonState}
            onMouseLeave={() => {
                setButtonState(ButtonState.idle)
            }}
            onMouseEnter={() => {
                setButtonState(ButtonState.hover)
            }}
            onClick={() => {
                setButtonState(ButtonState.clicked)
            }}
        />
    )
}
