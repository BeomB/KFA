import React, { useState } from 'react'



const GoalKeeper = () => {
    const [GoalKeeper, etGoalKeeper] = useState("김승규")

    return (
        <h1>{GoalKeeper}</h1>
    )
}

export default GoalKeeper