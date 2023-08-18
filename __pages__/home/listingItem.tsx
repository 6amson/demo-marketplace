'use client'
import Image from "next/image";
import user from '../../public/user-solid.svg';
import location from '../../public/location-crosshairs-solid.svg';
import tag from '../../public/tags-solid.svg';
import info from '../../public/circle-info-solid.svg';
import { useState, useEffect } from 'react';
import Item from "antd/es/list/Item";
import { genComponentStyleHook } from "antd/es/theme/internal";

interface ListItemProps {
    data: any
}

export default function ListItem() {

    const [image, setImage] = useState('');



    return (
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
    )
}

// export async function getStaticProps() {
//     // Fetch data from an API, database, or other sources
//     const data = await fetchData();
  
//     // Pass the fetched data as props to the page component
//     return {
//       props: {
//         data
//       }
//     };
//   }
  