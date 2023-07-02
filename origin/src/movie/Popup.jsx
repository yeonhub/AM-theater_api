import React from 'react';
import '../style/popup.scss'

const Popup = ({ popData,setIsPop }) => {
    const { imageURL, movieNm, grade } = popData.length > 0 ? popData[0] : {};
    return (
        <div className='popup'>
            <img className='poster' src={imageURL} alt="" />
            <p>
                <img className='grade' src={`./images/${grade}.jpg`} alt="" />
                <h2>{movieNm}</h2>

            </p>
            <button>예매 바로가기</button>
            <button onClick={()=>setIsPop(false)}>닫기</button>
        </div>
    );
};


export default Popup;