import React from 'react'
import './LetterFilter.css'
import Button from '../Button/Button'

const LetterFilter = ({ filterByLetter }) => {
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    return (
        <div className="LetterFilter">
            {letters.map(letter =>
                <Button key={letter} handleClick={() => filterByLetter(letter)} character={letter} />
            )}
        </div>
    )
}

export default LetterFilter
