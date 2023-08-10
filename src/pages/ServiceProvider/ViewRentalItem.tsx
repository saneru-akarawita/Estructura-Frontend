import { Add, Favorite, Remove, ShoppingCart } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import { Typography } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { string } from 'yup';

import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import {
  fetchRentingItemById,
  getRentingItemError,
  getRentingItemStatus,
  selectRentingItem,
} from '../../redux/Renting/SingleRentingItemReducer';
import { mobile } from '../../responsive';
const Container = styled.div``;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BigImageContainer = styled.div`
  width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SmallImageContainer = styled.div`
  width: 60px;
  height: 60px;
  object-fit: cover;

  margin: 0 10px;
  cursor: pointer;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
  color: #304422;
  margin-bottom: 5px;
`;

const DateText = styled.p`
  font-size: 15px;
  color: #808080;
  margin-top: 5px;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #435834;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
  color: #9d6432;
  margin-right: 10px;
`;
const Duration = styled.span`
  font-weight: 200;
  font-size: 30px;
  color: #9d6430;
  margin-right: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #435834;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #435834;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Contact = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #000;
  margin-right: 10px;
  margin-left: 10px;
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

const ViewRentalItem: FunctionComponent = () => {
  const itemId = parseInt(useParams<{ id: string }>().id ?? '0');
  const dispatch: ThunkDispatch<RentingItem, void, AnyAction> = useDispatch();

  const item = useSelector(selectRentingItem);
  const itemStatus = useSelector(getRentingItemStatus);
  const itemError = useSelector(getRentingItemError);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (itemStatus === 'idle') {
      dispatch(fetchRentingItemById(itemId));
    }
    if (item) {
      setSelectedImage(
        `http://localhost:8080/files/renting-item-files/${item?.createBy}/${item?.id}/${item?.mainImageName}`,
      );
      setImageUrl(
        `http://localhost:8080/files/renting-item-files/${item?.createBy}/${item?.id}/`,
      );
      console.log(item);
    }
  }, [dispatch, item, itemId, itemStatus]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <Container>
      <TopAppBar />
      {itemError ? (
        <h1>ERROR: {itemError}</h1>
      ) : itemStatus === 'loading' ? (
        <h1>Loading...</h1>
      ) : item ? (
        <Wrapper>
          <ContainerImg>
            <BigImageContainer>
              {item.mainImage ? <BigImage src={selectedImage} /> : <></>}
            </BigImageContainer>
            <SmallImagesContainer>
              {item.mainImage ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.mainImageName) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.mainImageName)
                  }
                >
                  <SmallImage src={imageUrl + item.mainImageName} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage1 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage1Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage1Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage1Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage2 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage2Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage2Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage2Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage3 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage3Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage3Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage3Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
            </SmallImagesContainer>
          </ContainerImg>
          <InfoContainer>
            <Title>{item.name}</Title>
            <DateText>{''}</DateText>
            <Desc>{item.description}</Desc>
            <PriceContainer>
              <Price>LKR. {item.price}</Price>
              <Duration>{item.scale}</Duration>
            </PriceContainer>

            <ContactContainer>
              <StoreIcon></StoreIcon>
              <Contact>Engineering Technocracy (Pvt) Ltd</Contact>
            </ContactContainer>

            <ContactContainer>
              <CallIcon></CallIcon>
              <Contact>0773394082</Contact>
            </ContactContainer>

            <ContactContainer>
              <LocationOnIcon></LocationOnIcon>
              <Contact>No. 54/3A, Madapatha , Piliyandala , Colombo</Contact>
            </ContactContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <h1>Project is Not Found</h1>
      )}

      <Footer />
    </Container>
  );
};

export default ViewRentalItem;
