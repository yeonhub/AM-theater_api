import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Numeral from 'numeral';
import '../style/list.scss'


const List = ({ data, onPoster,onLike }) => {
    return (
        <ul className='list'>
            {
                data.map((item, idx) => <li key={idx}>
                    <span className='rank'>{item.rank}</span>
                    <img className='poster' src={item.imageURL} alt={item.movieNm} onClick={() => onPoster(item.rank)} />
                    <img className='grade' src={`./images/${item.grade}.jpg`} alt="" />
                    <span className='name'><em>{item.movieNm}</em></span>
                    <p>
                        <strong>예매율 : {item.salesShare}% |</strong>
                        <strong>개봉일 : {item.openDt}</strong>
                    </p>

                    <p className='bot'>

                        <em className='like' onClick={()=>onLike(item.rank)}>
                            {
                                item.done ? <FcLike /> : <FcLikePlaceholder />
                            }
                            <span>{Numeral(item.scrnCnt).format(0, 0)}</span>
                        </em>


                        <button onClick={() => onPoster(item.rank)}>예매</button>
                    </p>
                </li>)
            }

        </ul>
    );
};

export default List;