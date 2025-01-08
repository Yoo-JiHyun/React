import React from 'react'
import Card from './card'

const CardList = () => {

    // Card 컴포넌트에 전달할 데이터
    const cardData = [
        { no : 1, title: '드림카카오', content: '82%', likeCount: 82, img: 'https://img.danawa.com/prod_img/500000/498/398/img/10398498_1.jpg?shrink=500:*&_v=20200121100319'},
        { no : 2, title: '카카오', content: '72%', likeCount: 72, img: 'https://img.danawa.com/prod_img/500000/433/467/img/4467433_1.jpg?shrink=500:*&_v=20181106085700'},
        { no : 3, title: '카오', content: '56%', likeCount: 56, img: 'https://image.homeplus.kr/rtd/ef7e56da-ee3b-488e-b041-69e14620023c?w=750'}
    ]

  return (
    <>
        <h1>상품 목록</h1>
        <div style={{
            display: "flex"
        }}>
        {
            cardData.map( (card, index) => {
                // return <Card key={card.no} title={card.title} content={card.content} />
                return <Card key={card.no} card={card} />
            })
        }
        </div>
    </>
  )
}

export default CardList