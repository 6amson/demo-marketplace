import React from 'react';
// import "./index.scss";
import { Menu, Spin } from 'antd';
import type { NextPage } from 'next';
import { LoadingOutlined } from '@ant-design/icons';
import Image from 'next/image';
import market from '../../public/market.svg';
import user from '../../public/user-solid.svg';
import location from '../../public/location-crosshairs-solid.svg';
import tag from '../../public/tags-solid.svg';
import info from '../../public/circle-info-solid.svg';


import NoSafe from 'components/nosafe';
import SafeInformation from './components/safeinformation';

import { useFetchSafe } from 'hooks/safe/usefetchsafe';

const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;
const Home: NextPage = () => {

  return (
    <div className='container'>
      <div className="sidebarProfile">
        <div className="innerSidebarProfile">
          <div>
            <Image
              alt='marketplace Icon'
              src={market}
              width={20}
              height={20}
            ></Image>
            <p className="textInnerSidebarProfile">
              MARKETPLACE
            </p>
          </div>
        </div>
      </div>
      <div className="listingProfile">
        <div className="innerListingProfile">
          <div className="cardListing">
            <div className="imageListingDiv"></div>
            <div className="infoListingDiv">
              <div>
                <Image
                  width={15}
                  height={15}
                  src={tag}
                  alt='NFT name tag'
                  className='nameIcon'
                ></Image>
                <p className='tagListing'>Bored Ape</p>
              </div>
              <div>
                <Image
                  width={12}
                  height={15}
                  src={user}
                  alt='user tag'
                ></Image>
                <p className='userListing'>Owner 0x</p>
              </div>
              <div>
                <Image
                  width={20}
                  height={15}
                  src={info}
                  alt='information icon'
                ></Image>
                <p className='infoListing'>Nft prediction of MLS winning the league and Messi as the highest goal scorer.
                </p>
              </div>
              <div>
                <Image
                  width={15}
                  height={15}
                  src={location}
                  alt='location icon'
                ></Image>
                <p className='addressListing'>0x2a6ee3dff4e57a46d6cc7e</p>
                </div>
            </div>
          </div>

          <div className="cardListing">
            <div className="imageListingDiv"></div>
            <div className="infoListingDiv">
              <p>Bored Ape</p>
              <p>Owner:</p>
              <p>Nft prediction of MLS winning the league and Messi as the highest goal scorer.</p>
              <p>0x2a6ee3dff4e57a46d6cc7e</p>
            </div>
          </div>

          <div className="cardListing">
            <div className="imageListingDiv"></div>
            <div className="infoListingDiv">
              <p>Bored Ape</p>
              <p>Owner:</p>
              <p>Nft prediction of MLS winning the league and Messi as the highest goal scorer.</p>
              <p>0x2a6ee3dff4e57a46d6cc7e</p>
            </div>
          </div>

          <div className="cardListing">
            <div className="imageListingDiv"></div>
            <div className="infoListingDiv">
              <p>Bored Ape</p>
              <p>Owner:</p>
              <p>Nft prediction of MLS winning the league and Messi as the highest goal scorer.</p>
              <p>0x2a6ee3dff4e57a46d6cc7e</p>
            </div>
          </div>

          <div className="cardListing">
            <div className="imageListingDiv"></div>
            <div className="infoListingDiv">
              <p>Bored Ape</p>
              <p>Owner:</p>
              <p>Nft prediction of MLS winning the league and Messi as the highest goal scorer.</p>
              <p>0x2a6ee3dff4e57a46d6cc7e</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
