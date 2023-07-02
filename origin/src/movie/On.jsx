import React from 'react';
import '../style/on.scss'

const On = ({ onShow, data ,changeChk,on}) => {
    return (
        <div className='on'>
            <p className='type'>
                <button className={on==='all'?'onbtn':''} onClick={() => onShow('all','')}>전체</button>
                <button className={on==='true'?'onbtn':''} onClick={() => onShow(true,'true')}>상영중</button>
                <button className={on==='false'?'onbtn':''} onClick={() => onShow(false,'false')}>상영에정</button>
            </p>
            <p className='onNow'>
                <input className='onlyOn' role="switch" type="checkbox" onChange={changeChk}/>
                <span>개봉작만</span>
                <em>{data.length}개의 영화가 검색되었습니다.</em>
            </p>
        </div>
    );
};

export default On;