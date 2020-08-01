import { useEffect } from "react";
import HeaderCompo from "../component/HeaderCompo";

const Layout = ({ Component, pageProps }) => { //next에서 넣어주는 props, 페이지들을 넣어줌
  return (
    <>
      <HeaderCompo>
        <Component {...pageProps}/>
      </HeaderCompo>
    </>
  );
}

Layout.getInitalProps = async (context) => { //next에서 내려주는 context, 안에 페이지나 ctx가 들어있음
  let pageProps = {};
  if(context.Component.getInitalProps) { //페이지에 getInitalProps가 있으면
    pageProps = await context.Component.getInitalProps(context.ctx); // getInitalProps 실행
  }
  return pageProps;
}
export default Layout;