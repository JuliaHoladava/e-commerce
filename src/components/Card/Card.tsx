import React, { ReactElement, useState } from 'react';
import './Card.scss';
import { IPropsCard } from '@/types/componentsInrefaces';
import Button from '../Button/Button';

const Card = ({ imagePath, rating, text, price, priceBefore, bonus, discount }: IPropsCard): ReactElement => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        {discount != null && discount > 0 ? (
          <div className="product-card__discount">
            <p className="product-card__discount-text">{`-${discount}%`}</p>
          </div>
        ) : null}
        <div className="product-card__image">
          <img className="product-card__image-image" src={imagePath} alt="Product Image" />
        </div>
      </div>
      <div className="product-card__rating-container">
        <div className="product-card__rating-icon"></div>
        <p className="product-card__rating-text">{rating}</p>
      </div>
      <p className="product-card__text">{text}</p>
      <div className="product-card__price-info">
        <div className="product-card__price-container">
          <p className="product-card__price">{`${
            price !== undefined ? Math.round(price).toLocaleString('ru-RU') : 'Не доступно'
          }₽`}</p>
          {priceBefore !== price ? (
            <p className="product-card__priceBefore">{priceBefore?.toLocaleString('ru-RU')}</p>
          ) : null}
        </div>
        <div className="product-card__bonus-container">
          <div className="product-card__bonus-icon"></div>
          <p className="product-card__bonus-text">{`+${bonus}`}</p>
        </div>
      </div>
      <div className="product-card__button-container">
        <Button className="button" type="button" text="В корзину" onClick={(): void => {}} />
        <Button
          className={`iconButton ${isSelected ? 'iconButton__selected' : ''}`}
          type="button"
          onClick={(): void => {
            setIsSelected(!isSelected);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
