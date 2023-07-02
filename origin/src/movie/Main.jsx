import React, { useState, useEffect } from 'react';
import Search from './Search';
import On from './On';
import List from './List';
import axios from 'axios'
import '../assets/css/reset.css'
import '../style/main.scss'
import Popup from './Popup';


const Main = () => {
    const [data, setData] = useState([])
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')
    const [isChk, setIsChk] = useState(false)
    const [isPop, setIsPop] = useState(false)
    const [popData, setPopData] = useState([])
    const [on, setOn] = useState('all')

    const get = () => {
        const url = `https://gist.githubusercontent.com/yeonhub/9ccd94d053e5e07750f1972b4a7a3afe/raw/e4c32b5573468e6e42cc34123cbc436ea1fa7268/tem.json`
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setData(res.data)
                setDataList(res.data)
                setLoading(true)
                setError(null)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError('-- ERROR --')
            })
    }

    useEffect(() => {
        get();
    }, [])

    const onSearch = text => {
        setData(dataList.filter(item => item.movieNm.indexOf(text) !== -1))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) return
        setText('')
        onSearch(text)
    }
    const changeInput = (e) => {
        setText(e.target.value)
    }
    const onShow = (on, bul) => {
        if (on === 'all') {
            get()
            setOn('all')
        } else {
            setOn(bul)
            setData(dataList.filter(item => item.on === on))
        }
    }
    const changeChk = (e) => {
        setIsChk(e.target.checked)
        if (!isChk) {
            setData(dataList.filter(item => item.on === true))
            setOn('true')
        } else {
            setData(dataList.filter(item => item.on === false))
            setOn('false')
        }
    }
    const onPoster = (rank) => {
        setIsPop(true)
        setPopData(data.filter(item => item.rank === rank))
    }

    const onLike = rank => {
        setData(data.map(item => item.rank === rank ? { ...item, scrnCnt: !item.done ? item.scrnCnt + 1 : item.scrnCnt - 1, done: !item.done } : item))
    }

    return (
        <>
            <div className='top'>
                {/* {isPop && <Popup popData={popData} setIsPop={setIsPop} />} */}
                <div className='wrap'>
                    <div className='inner'>
                        <Search text={text} changeInput={changeInput} onSubmit={onSubmit} />
                        <On onShow={onShow} data={data} changeChk={changeChk} on={on} />
                        <List data={data} onPoster={onPoster} onLike={onLike} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;