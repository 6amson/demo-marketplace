'use client'
// import Image from "next/image";
// import user from '../../public/user-solid.svg';
// import location from '../../public/location-crosshairs-solid.svg';
// import tag from '../../public/tags-solid.svg';
// import info from '../../public/circle-info-solid.svg';
import { useState, useEffect } from 'react';
// import Item from "antd/es/list/Item";
// import { genComponentStyleHook } from "antd/es/theme/internal";
// import { log } from "console";
// import getData from './getdata';
// import { InferGetStaticPropsType } from 'next'
// import { GetStaticProps } from 'next'

// // interface ListItemProps {
// //     data: any
// // }
// // data.data.data.docs
// interface Data {
//     data: {
//         data: {
//             data: {
//                 docs: object
//             }
//         }
//     }
// };

// interface PageProps {
//     data: Data;
// };

export default function ListItem( ) {
return (
    <div></div>
    
)
}


// // const DATA = props.data.data.data.docs;
// // console.log(props.data.data.data.docs[0].nft);


// // useEffect(() => {

// //     // type RawDataItem = {
// //     //     nft: object; 
// //     // }

// //     const rawData = props.data;
// //     // Object.values(rawData.map((item) => console.log(item));
// //     // Object.values(rawData).map(item: RawDataItem => console.log(item.nft));
// //     setData(rawData);

// // },  [props.data])

// // console.log(datum)
// // console.log(Object.entries(datum).forEach((item: any, index) => {
// //     console.log(item[1].nft)
// // }));


// //     Object.entries(datum).forEach((item: any, index) => {
// //             console.log(item[1].nft.name);
// //             // setName(item.nft.name)


// //     })

// // let display;

// // return (
// // <div>
// {/* {
//                 display */}

// //     <div key={index} className="cardListing">
// //     <div className="imageListingDiv"></div>
// //     <div className="infoListingDiv">
// //         <div>
// //             <Image
// //                 width={15}
// //                 height={15}
// //                 src={item.nft.image}
// //                 alt='NFT name tag'
// //                 className='nameIcon'
// //             ></Image>
// //             <p className='tagListing'>{item.nft.name}</p>
// //         </div>
// //         <div>
// //             <Image
// //                 width={12}
// //                 height={15}
// //                 src={user}
// //                 alt='user tag'
// //             ></Image>
// //             <p className='userListing'>Owner 0x</p>
// //         </div>
// //         <div>
// //             <Image
// //                 width={20}
// //                 height={15}
// //                 src={info}
// //                 alt='information icon'
// //             ></Image>
// //             <p className='infoListing'>Nft prediction of MLS winning the league and Messi as the highest goal scorer.
// //             </p>
// //         </div>
// //         <div>
// //             <Image
// //                 width={15}
// //                 height={15}
// //                 src={location}
// //                 alt='location icon'
// //             ></Image>
// //             <p className='addressListing'>0x2a6ee3dff4e57a46d6cc7e</p>
// //         </div>
// //     </div>
// // </div>

// //     }
// // </div>
// //     )
// // }

// export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => {
//     // Fetch data from an API, database, or other sources
//     const datum = await getData();
//     const data: Data[] = datum().then((res: any) => { return res })

//     // Pass the fetched data as props to the page component
//     return {
//         props: {
//             data
//         }
//     };
// }


// function ListItem({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
//     // will resolve posts to type Post[]
//     return (
//         <div>
//             <div className="cardListing">
//                 <div className="imageListingDiv"></div>
//                 <div className="infoListingDiv">
//                     <div>
//                         <Image
//                             width={15}
//                             height={15}
//                             src={tag}
//                             alt='NFT name tag'
//                             className='nameIcon'
//                         ></Image>
//                         <p className='tagListing'></p>
//                     </div>
//                     <div>
//                         <Image
//                             width={12}
//                             height={15}
//                             src={user}
//                             alt='user tag'
//                         ></Image>
//                         <p className='userListing'>Owner 0x</p>
//                     </div>
//                     <div>
//                         <Image
//                             width={20}
//                             height={15}
//                             src={info}
//                             alt='information icon'
//                         ></Image>
//                         <p className='infoListing'>Nft prediction of MLS winning the league and Messi as the highest goal scorer.
//                         </p>
//                     </div>
//                     <div>
//                         <Image
//                             width={15}
//                             height={15}
//                             src={location}
//                             alt='location icon'
//                         ></Image>
//                         <p className='addressListing'>0x2a6ee3dff4e57a46d6cc7e</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ListItem