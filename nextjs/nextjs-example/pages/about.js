import { useState, useEffect } from "react";

const About = ({ query1 }) => {
  const [name, setName] = useState(query1);
  useEffect(() => {
    console.log('hoho');
    setName('오형남');
  }, []);
  return (
    <>
      <h1> 반갑습니다. {name}입니다. ^~^</h1>
    </>
  );
}

About.getInitialProps = async (context) => {
  console.log('About getInintialProps', context.query.query1);
  return { query1: context.query.query1 };
}
export default About;