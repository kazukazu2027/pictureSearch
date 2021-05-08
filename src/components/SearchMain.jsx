import React, { useState } from 'react';
import styled from 'styled-components';
import ImagesList from './ImagesList'
import Button from '@material-ui/core/Button';
import axios from 'axios';

const SearchMain = () => {
    const [word, setWord] = useState('');
    const onChangeWord = (event) => setWord(event.target.value);
    const [images, setImages] = useState([]);
    
    // const classes = useStyles();
    
    const searchImage = async() => {
        const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
        try{
            const params = {
                key: ApiKey,
                q: word,
            };
            const response = await axios.get('https://pixabay.com/api/',{params});
            setImages(response.data.hits)
            if (response.data.total===0) {
                alert('お探しの画像はありませんでした。')
            }
            console.log (response)
        }catch{
            alert('写真の取得に失敗しました')
        }
    }

    return (
        <>
            <SSearchMain>
                <SInput type="text" value={word} onChange={onChangeWord} placeholder='キーワードを入力' word={word} />
                <Button variant="contained" color="primary" onClick={searchImage}>
                    検索
                </Button>    
            </SSearchMain>
            <ImagesList images={images} />   
        </>     
    )
}

const SSearchMain = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`;

const SInput = styled.input`
    border-radius:20px;
    width:30%;
    margin-right: 20px;
    outline:none;
    @media(max-width:426px){
        width:100%;
    }
`;

export default SearchMain;