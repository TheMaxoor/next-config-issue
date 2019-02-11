import React from 'react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Home = () => (
  <div>
    <div className="hero">
      <h1 className="title">Hello !</h1>
      <p className="description">Here is foo : {publicRuntimeConfig.foo}</p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
