// Contoh komponen React untuk load gambar garuda.jpeg dari public Express
import React from 'react';

export default function GarudaImage() {
  return (
    <img src="/garuda.jpeg" alt="Garuda" style={{width: 200, borderRadius: 8, boxShadow: '0 2px 8px #0002'}} />
  );
}
