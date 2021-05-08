import React from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';

const ImagesList = (props) => {
    const images = props.images.map((image) => {
        return(
            <SA href={image.pageURL} key={image.id} target='_blank' rel="noreferrer">
                <SImage src={image.webformatURL} alt=""/>
            </SA>
        );
    });
    
    return(
        <Masonry>
            {images}
        </Masonry>

    )


}

const SA = styled.a`
    width:23%;
    text-align:center;
    padding: 0 3px 3px 3px;
`;

const SImage = styled.img`
    width:100%;
    height:100%;
`;


export default ImagesList;