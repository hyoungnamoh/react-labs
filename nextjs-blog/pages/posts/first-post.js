import Link from 'next/link';
import Header from 'next/head';
import Layout from '../../components/layout';


export default function firstPost() {
  return (
    <Layout>
      <Header>
        <title>First Post</title>
      </Header>
      <h2>
        <Link href="/">
          <a>Back to home!</a>
        </Link>
      </h2>
    </Layout>
  );
}