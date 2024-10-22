import React, {useState} from "react";
import '../FavouriteModal.css';

export function FavouriteModal({modalHandler, modalDisplay}) {

  return (
    <div className='FavouriteModal' style={{display:modalDisplay}}>
        <button className='closeBtn' onClick={modalHandler}>X</button>
      <h1 className='ModalTitle'>Favourite Modal</h1>
    </div>
  );
}
