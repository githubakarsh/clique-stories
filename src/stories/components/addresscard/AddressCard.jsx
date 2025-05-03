import React from 'react';
import './address.css';

/** Primary UI component for user interaction */
export const AddressCard = ({
  address
}) => {
  return (
    <div className="card">
      <div className="card-pill"><div className="address-header">Address line 1</div><span>:</span><div>{address?.addressLineOne}</div></div>
      <div className="card-pill"><div className="address-header">Address line 2 </div><span>:</span><div>{address?.addressLineTwo}</div></div>
      <div className="card-pill"><div className="address-header">Street  </div><span>:</span><div>{address?.street}</div></div>
      <div className="card-pill"><div className="address-header">District  </div><span>:</span><div>{address?.district}</div></div>
      <div className="card-pill"><div className="address-header">State  </div><span>:</span><div>{address?.state}</div></div>
      <div className="card-pill"><div className="address-header">Pincode  </div><span>:</span><div>{address?.pincode}</div></div>
      <div className="card-pill"><div className="address-header">Country  </div><span>:</span><div>{address?.country}</div></div>
    </div>
  );
};

AddressCard.propTypes = {
  /** Is this the principal call to action on the page? */
  
};
