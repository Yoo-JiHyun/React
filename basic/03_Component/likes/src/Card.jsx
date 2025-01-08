import { Favorite, FavoriteBorder } from '@mui/icons-material'
import React, { useState } from 'react'

// const Card = (props) => {
// const Card = ({title, content}) => {
const Card = ({ card }) => {
    const { no, title, content, likeCount, img } = card

    // ⭐ state 선언
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(likeCount)

    // ⭐ 이벤트 핸들러
    const handleLike = () => {
        setLike( !like )
        setCount( !like ? count +1 : count -1 )

        // !like ?
        // setCount( count +1 )
        // :
        // setCount( count -1 )

        console.log(`like : ${like}`);
    
    }


  return (
    <div style ={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
        margin: "0 20px"
    }}>
        {/* 상품 이미지 */}
        <img src={ img } 
             style={{width: '200px', height: '200px'}}
             alt="상품이미지" />
        {/* 컨텐츠 */}
        <div style={{ padding: "10px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                {/* {props.title} */}
                { title }
            </h3>
            <p style={{ color: "#666", fontSize: "14px" }}>
                {/* {props.content} */}
                { content }
            </p>
            <button style={{
                border: "none",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
                onClick={ handleLike }    
            >
                {
                    like ? 
                        <Favorite style={{
                            color: "red",
                            fontSize: "40px"
                        }} />
                    :
                        <FavoriteBorder style={{
                            color: "red",
                            fontSize: "40px"
                        }} />
                }
                <span style={{
                    marginLeft: "5px",
                    fontSize: "24px"
                }}>{count}</span>
            </button>
        </div>
    </div>
  )
}

export default Card