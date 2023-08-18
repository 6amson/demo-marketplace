import React from 'react';
import { Menu, Spin } from 'antd';
import type { NextPage } from 'next';
import { LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import ListItem from './listingItem';
import market from '../../public/market.svg';
import user from '../../public/user-solid.svg';
import location from '../../public/location-crosshairs-solid.svg';
import tag from '../../public/tags-solid.svg';
import info from '../../public/circle-info-solid.svg';


import NoSafe from 'components/nosafe';
import SafeInformation from './components/safeinformation';

import { useFetchSafe } from 'hooks/safe/usefetchsafe';

interface ListItemProps {
  data: object; 
}

const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;
function Home ({ data }:  ListItemProps) {


  // const getData = async (): Promise<any> => {
  //   try {

  //     // const datum = {
  //     //   "page": 1,
  //     //   "limit": 5,
  //     //   "category": "string"
  //     // }

  //     const res = await axios.post(`http://165.227.169.25:3000/api/bets/bycategory`, datum, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     // console.log(res.data.data.docs)
  //     // return (res.data.data.docs);
  //     setData(res.data.data.docs);

  //   } catch (err) {
  //     console.log(err)
  //   }

  // }

  // useEffect(() => {
  //   getData()
  // }, []);

  // console.log(data)

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
                  src={data.nft.image}
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
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const datum = {
    "page": 1,
    "limit": 5,
    "category": "string"
  }

  const res = await axios.post(`http://165.227.169.25:3000/api/bets/bycategory`, datum, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: object = await res.data.data.docs.json();

  return {
    props: {
      data
    }
  };
}

export default Home;
