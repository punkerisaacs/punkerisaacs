import React from 'react';
import './notFound.css';
import notFoundImage from '../../images/notFound.png';

export default function NotFound404View(): JSX.Element {
    return (
        <div id="notFound">
            <div style={{ textAlign: 'center' }}>
                <p className="font-sub">404!</p>
                <p className="font-sub">Not Found!!</p>
                <img src={notFoundImage} alt="notFound" className="img img-fluid" />
            </div>
        </div>
    );
}
