import React, { useState, useEffect } from 'react'
import styles from "./EntertinementComponents.module.scss"
import MovieCard from './MovieCard'
import UserChoice from './UserChoice'
import { useNavigate } from 'react-router-dom'


const EntertinementComponents = () => {
    const navigate = useNavigate()

    let cards = [
        { id: 0, color: "rgba(255, 82, 9, 1)", genres: "Action", image: "./src/Assets/actionImage.png" },
        { id: 1, color: "rgba(215, 164, 255, 1)", genres: "Drama", image: "./src/Assets/dramaImage.png" },
        { id: 2, color: "rgba(20, 138, 8, 1)", genres: "Romance", image: "./src/Assets/romance.png" },
        { id: 3, color: "rgba(132, 194, 255, 1)", genres: "Thriller", image: "./src/Assets/thriller.png" },
        { id: 4, color: "rgba(144, 37, 0, 1)", genres: "Western", image: "./src/Assets/western.png" },
        { id: 5, color: "rgba(115, 88, 255, 1)", genres: "Horror", image: "./src/Assets/horrer.png" },
        { id: 6, color: "rgba(255, 82, 9, 1)", genres: "Fantasy", image: "./src/Assets/fantacy.png" },
        { id: 7, color: "rgba(255, 74, 222, 1)", genres: "Music", image: "./src/Assets/music.png" },
        { id: 8, color: "rgba(108, 208, 97, 1)", genres: "Fiction", image: "./src/Assets/fiction.png" }

    ]

    const [userChoice, setUserChoice] = useState([])
    const [error, setError] = useState(false)

    const handleClick = (name) => {
        if (!userChoice.includes(name)) {
            setUserChoice((prevChoice) => [...prevChoice, name]);
        }
    }

    const handleRemove = (name) => {
        setUserChoice((prevChoice) => prevChoice.filter(item => item !== name));
    }

    const nextPageButton = () => {
        if (userChoice.length < 3) {
            setError(true)
        }

        localStorage.setItem("userPreferences",userChoice)
        navigate("/Home")
    }

    useEffect(() => {
        if (userChoice.length >= 3) {
            setError(false)
        }
    }, [userChoice])



    return (
        // Main Section
        <div className={styles.main}>
            {/* LeftSection */}
            <div className={styles.leftSection}>
                <div className={styles.LeftSectionDisplay}>

                    <div className={styles.titleContainer}>
                        <p className={styles.title}>Super app</p>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>Choose your entertainment category</p>
                    </div>


                    <div className={styles.selectionContainer}>

                        {
                            userChoice.map((item, index) => {
                                return <UserChoice
                                    key={index}
                                    genres={item}
                                    onCrossClick={handleRemove} />
                            })
                        }

                        {
                            error ?
                                <div className={styles.warningContainer} >
                                    <img src="./src/Components/EntertinementComponents/Images/Vector.png" alt="" />
                                    <p className={styles.warning}>Minimum 3 category required</p>
                                </div>
                                : ""
                        }

                    </div>


                </div>
            </div>

            {/* RightSection */}
            <div className={styles.rightSection}>
                <div className={styles.rightSectionDisplay}>
                    {
                        cards.map((item) => {
                            return <MovieCard
                                key={item.id}
                                id={item.id}
                                color={item.color}
                                genres={item.genres}
                                image={item.image}
                                onCardClick={handleClick} />
                        })
                    }
                </div>
                <button className={styles.nextpageButton} onClick={() => nextPageButton()} >Next Page</button>

            </div>





        </div>
    )
}

export default EntertinementComponents
