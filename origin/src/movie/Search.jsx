import React from 'react';
import '../style/search.scss'

const Search = ({ changeInput, onSubmit }) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            <input className='input' type="text" onChange={changeInput} placeholder='영화명을 검색하세요' />
            <button className='btn' type='submit'>검색</button>
        </form>
    );
};

export default Search;