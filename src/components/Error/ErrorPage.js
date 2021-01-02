/* eslint-disable react/prop-types */
import React from 'react';

export function ErrorPage({ error }) {
  const styleErr = {
    'color': '#f00',
    'display': 'flex',
    'flexDirection': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'minHeight': '60vh',
  };
 return (
   <React.Fragment>
     <div style={styleErr}>
       <h1>{error.message}</h1>
       <p style={{ color: '#fff' }}>попробуйте зайти позже</p>
     </div>
   </React.Fragment>
 );
}
