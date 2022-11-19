import React, { useState, useRef } from 'react'
import Image from 'next/image'
import img1 from '../public/1.png'
import img2 from '../public/2.png'
import mini1 from '../public/mini1.png'
import { useSwitchTransition } from 'transition-hook'

const Home = () => {
  let images = ["/1.png", "/2.png", "/3.png"]
  const [div1, setDiv1] = useState({ src: "/1.png", alt: "1" })
  const [div2, setDiv2] = useState({ src: "/2.png", alt: "1" })
  const [show1, setShow1] = useState(true)

  const [style2, setStyle2] = useState('')
  const handleImage2 = () => {

    setStyle2('active')
    setTimeout(() => {
      setShow1(!show1)
    }, 500)

  }

  const [isHappy, setIsHappy] = useState(false)
  const transition = useSwitchTransition(isHappy, 500)


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      <div style={{ display: 'flex', justifyContent: "space-around" }}>






        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {transition((state, stage) => (
            <h1
              style={{
                transition: '.5s',
                marginTop: 40,
                fontSize: '5em',
                position: 'absolute',
                opacity: stage === 'enter' ? 1 : 0,
                transformOrigin: 'center bottom',
                transform: {
                  from: 'translateX(100%) ',
                  enter: 'translateX(0%)',
                  leave: 'translateX(-100%)',
                }[stage],
              }}
            >
              {state ?
                <div>
                  suv
                  <Image src={div2.src} alt="img1" width={300} height={300} />
                </div>
                :
                <div>
                  passenger
                  <Image src={div1.src} alt="img1" width={300} height={300} />
                </div>
              }
            </h1>
          ))}
        </div>

        {/* <button
          onClick={() => {
            setIsHappy(!isHappy)
          }}
        >
          Toggle
        </button> */}

        <Image src={isHappy ? div1.src : div2.src} alt="img1" width={300} height={300} onClick={() => {
          setIsHappy(!isHappy)
        }} />


        {/* {show1 ?
          <div id='img2' className={setStyle2}>
            <Image src={div1.src} alt="img1" width={300} height={300} />
          </div>
          :
          <div  >
            <Image src={div2.src} alt="img1" width={300} height={300} />
          </div>} */}
        {/* <div>
          {show1 ?
            <div id='img2' className={setStyle2}>
              <Image src={div1.src} alt="img1" width={300} height={300} />
            </div>
            :
            <div id='img1' >
              <Image src={div2.src} alt="img1" width={300} height={300} />
            </div>}
        </div>



        <div >
          <Image src={div2.src} alt="Picture of the author" width={300} height={300} onClick={handleImage2} />
        </div> */}

      </div>


    </div>
  )
}

export default Home







// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { useRouter } from 'next/router'
// import { useState } from 'react';
import { getServerSideProps } from './products/index';


// export default function Home() {
//   const router = useRouter()
//   const { locale } = router
//   // console.log("LOcal", router)
//   const [style1, setStyle1] = useState({})
//   const [image1, setImage1] = useState('/1.png')
//   const [image2, setImage2] = useState('/mini2.png')
//   const [image3, setImage3] = useState('/mini3.png')


//   const handleCLick1 = () => {
//     if (image1 === '/1.png') {
//       console.log("111111")
//     } else if (image2 === "/2.png") {
//       console.log("222222")
//     } else {
//       console.log("333333")
//     }
//     // setImage1('/2.png')

//   }

//   const handleCLick2 = () => {
//     if (image2 === '/mini2.png' && image3 !== '/mini1.png') {
//       setImage1('/2.png')
//       setImage2('/mini1.png')
//       setStyle1({ width: "200px", transition: " width 2s, height 4s; " })
//     }
//     // else if (image2 === '/mini1.png' && image3 === '/mini2.png') {
//     //   setImage1('/1.png')
//     //   setImage2('/mini3.png')
//     // } else if (image2 === '/mini1.png' && image3 === '/mini1.png') {
//     //   setImage1('/2.png')
//     //   setImage2('/mini3.png')
//     // }
//     else if (image2 === '/mini1.png' && image1 === '/2.png') {
//       setImage1('/1.png')
//       setImage2('/mini2.png')
//     }

//   }

//   const handleCLick3 = () => {
//     if (image3 === '/mini3.png' && image2 === '/mini2.png') {
//       setImage1('/3.png')
//       // setImage2('/mini1.png')
//       setImage3('/mini1.png')
//     }
//     // else if ((image3 === '/mini2.png') && (image2 === '/mini1.png')) {
//     //   setImage1('/2.png')
//     //   setImage2('/mini3.png')
//     //   setImage3('/mini1.png')
//     // } else if ((image3 === '/mini1.png') && (image2 === '/mini3.png')) {
//     //   setImage1('/1.png')
//     //   setImage2('/mini2.png')
//     //   setImage3('/mini3.png')
//     // }
//     // else if ((image3 === '/mini1.png') && (image2 === '/mini2.png')) {
//     //   setImage1('/1.png')
//     //   setImage2('/mini1.png')
//     //   setImage3('/mini2.png')
//     // }
//     else if (image2 === '/mini1.png') {

//     }

//     else {
//       setImage1('/1.png')
//       // setImage2('/mini1.png')
//       setImage3('/mini3.png')
//     }

//   }





//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <h1>Home</h1>
//       <hr />



//       <div style={{ display: "flex" }}>
//         <div style={{ width: "40%" }}>
//           <Image style={style1} onClick={() => handleCLick1()} id='image1' src={image1} width={500} height={500} alt="" />
//         </div>

//         <div style={{ width: "30%", display: "flex", "flexShrink": "flexShrink" }}>
//           <Image style={{ width: "200px" }} id='image2' onClick={() => handleCLick2()} src={image2} width={500} height={500} alt="" />
//           <Image style={{ width: "200px" }} id="image3" onClick={() => handleCLick3()} src={image3} width={500} height={500} alt="" />
//         </div>

//       </div>
//     </div>
//   )
// }
