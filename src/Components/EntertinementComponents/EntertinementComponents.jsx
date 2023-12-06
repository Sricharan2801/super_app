import React, { useState, useEffect } from 'react'
import styles from "./EntertinementComponents.module.scss"
import MovieCard from './MovieCard'
import UserChoice from './UserChoice'
import { useNavigate } from 'react-router-dom'
import actionImage from "../../Assets/Images/actionImage.png"
import dramaImage from "../../Assets/Images/dramaImage.png"
import romance from "../../Assets/Images/romance.png"
import thriller from "../../Assets/Images/thriller.png"
import western from "../../Assets/Images/western.png"
import horrer from "../../Assets/Images/horrer.png"
import fantacy from "../../Assets/Images/fantacy.png"
import music from "../../Assets/Images/music.png"
import fiction from "../../Assets/Images/fiction.png"
import Vector from "../../Assets/Images/Vector.png"


const EntertinementComponents = () => {
    const navigate = useNavigate()

    let cards = [
        { id: 0, color: "rgba(255, 82, 9, 1)", genres: "Action", image: actionImage },
        { id: 1, color: "rgba(215, 164, 255, 1)", genres: "Drama", image: dramaImage },
        { id: 2, color: "rgba(20, 138, 8, 1)", genres: "Romance", image: romance },
        { id: 3, color: "rgba(132, 194, 255, 1)", genres: "Thriller", image: thriller },
        { id: 4, color: "rgba(144, 37, 0, 1)", genres: "Western", image: western },
        { id: 5, color: "rgba(115, 88, 255, 1)", genres: "Horror", image: horrer },
        { id: 6, color: "rgba(255, 82, 9, 1)", genres: "Fantasy", image: fantacy },
        { id: 7, color: "rgba(255, 74, 222, 1)", genres: "Music", image: music },
        { id: 8, color: "rgba(108, 208, 97, 1)", genres: "Fiction", image: fiction }

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

        if (userChoice.length >= 3) {
            navigate("/Home")
        }

        localStorage.setItem("userPreferences", userChoice)

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
                                    <img src={Vector} alt="" />
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
