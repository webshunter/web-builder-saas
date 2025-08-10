// Contoh penggunaan asset statis dari public Express di React
// File: src/LogoPublic.js
import React from 'react';

export default function LogoPublic() {
  return (
    <img src="/images/logo.jpeg" alt="Logo dari public Express" style={{width: 120}} />
  );
}
