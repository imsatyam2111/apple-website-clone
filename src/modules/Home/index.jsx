import React from 'react';
import '../../assets/styles/modules/Home/style.css';
import { AirpodsPro } from './components/AirpodsPro';
import { AppleCards } from './components/AppleCards';
import { AppleTv } from './components/AppleTv';
import { Iphone14 } from './components/Iphone14';
import { Iphone14Pro } from './components/Iphone14Pro';
import { WatchSeries8 } from './components/WatchSeries8';
import { WatchUltra } from './components/WatchUltra';

export const Home = () => {
  return (
    <div className="home-container">
      <Iphone14 />
      <Iphone14Pro />
      <div className="home-productCards">
        <WatchUltra />
        <WatchSeries8 />
        <AirpodsPro />
        <AppleCards />
      </div>
      <div>
        <AppleTv />
      </div>
    </div>
  );
};
