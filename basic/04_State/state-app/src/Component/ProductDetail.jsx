import React from 'react'

const ProductDetail = () => {
  return (
    <div className="product-detail">
        <div className="item img">
            <img src="http://i.imgur.com/1vpSkbW.png" alt="" />
        </div>
        <div className="item info">
            <div className="title">
                <h1>상품명</h1>
            </div>
            <p>
                <span className='txt-pt'>INFO</span> <br />
                - 편안한 착용이 가능한 폴라 디자인
                - 체형 커버가 가능한 베이직한 실루엣
            </p>
            <p>
                <span className='txt-pt'>Color & Size</span> <br />
                Black, Navy <br />
                85, 90, 95 <br />
                - 어깨 53, 가슴 59, 암홀 23, 소매 62, 총장 68 <br />
                ( 측정 방법에 따라 1~3cm 오차가 있을 수 있습니다.)
            </p>
            <span className='item-lg'></span>
            <div className="text-group">
                <div className="item">
                    <span className="txt-pt">판매가</span>
                </div>
                <div className="item">
                    <span className="txt-pt">42,000원</span>
                </div>
            </div>
            <div className="text-group">
                <div className="item">
                    <span>배송비</span>
                </div>
                <div className="item">
                    <span>3,000</span> 원
                </div>
            </div>
            <span className="line-lg"></span>
            <div className="text-group">
                <div className="item">
                    <span>Color</span>
                </div>
                <div className="item">
                    <select name="color" id="color">
                        <option value="Black">Black</option>
                        <option value="Navy">Navy</option>
                    </select>
                </div>
            </div>
            <div className="text-group">
                <div className="item">
                    <span>Size</span>
                </div>
                <div className="item">
                    <select name="size" id="size">
                        <option value="85">85</option>
                        <option value="90">90</option>
                        <option value="95">95</option>
                    </select>
                </div>
            </div>
            <div className="text-group">
                <div className="item">
                    <span>수량</span>
                </div>
                <div className="item flex">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail