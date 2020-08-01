//메인화면
//import React from 'react' 없어도 됨 next 안에 다 들어가 있음
import React, { useEffect } from 'react';
import Link from 'next/link';
const Home = () => {
  return (
    <>
    <Link href={{pathname: 'about', query: { query1: 'hi'}}} as={'about/hi'}><a>about</a></Link>
      <div>Hello, Next!</div>
    </>
  );
}
export default Home;