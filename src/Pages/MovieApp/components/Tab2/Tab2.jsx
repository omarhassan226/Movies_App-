import React, { useState } from "react";
import { styles } from "../Tabes/styles";

const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.2,
        duration: 48,
        image: "https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        duration: 46,
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        duration: 45,
        rating: 9.0,
        image: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    }
];

const Tab2 = () => {
    const [operator, setOperator] = useState(false);

    const handleOperator = () => {
        setOperator(!operator);
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1>Tab 2</h1>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div
                        onClick={handleOperator}
                        style={{
                            color: "white",
                            backgroundColor: "#212529",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        {operator ? "+" : "-"}
                    </div>
                </div>
                {operator && (
                    <div
                        style={{
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundColor: "#343A40",
                            margin: "auto",
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            height: "118.8px",
                            color: "white",
                            gap: "10px",
                            justifyContent: "center"
                        }}
                    >
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>
                                    <h3>MOVIES YOU WATCHED</h3>
                                </span>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span>#️⃣</span>
                                <span>{movies.length} movies</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span>⭐</span>
                                <span>6.65</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span>🌟</span>
                                <span>6.50</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span>⏳</span>
                                <span>46.5 min</span>
                            </div>
                        </div>
                    </div>
                )}
                {/* ============================ */}
                {
                    movies.map((movie) => {
                        return (
                            <>
                            <div style={{overflow:'hidden'}}>
                            <div style={{overflow:'scroll', display:'flex', justifyContent:'center'}}>
                                    <div style={{ width: "70%", display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                                        <div>
                                            <img src={movie.image} width={'80px'} alt="" />
                                        </div>
                                        <div
                                            style={{
                                                borderBottom: "1px solid white",
                                                borderRadius: "10px",
                                                padding: "20px",
                                                backgroundColor: "#2B3035",
                                                margin: "auto",
                                                width: "80%",
                                                display: "flex",
                                                flexDirection: "column",
                                                height: "118.8px",
                                                color: "white",
                                                gap: "10px",
                                                // justifyContent: "center"
                                            }}
                                        >
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <span>
                                                        <h3>{movie.title}</h3>
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <span>⭐</span>
                                                    <span>{movie.rating}</span>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <span>🌟</span>
                                                    <span>6.50</span>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <span>⏳</span>
                                                    <span>{movie.duration} min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Tab2;
