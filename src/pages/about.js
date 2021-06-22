import Head from 'next/head';
import { Category } from 'components';

function About() {
  const data = [];
  for (let i = 0; i < 100; i ++) {
    data.push({ title: `Test - ${i}` });
  }

  return(
    <div>
      <Head>
        <title>About</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>About {process.env.customKey}</div>
      <Category
        data={data}
        nCol={3}
        nRow={5}
      />
    </div>
  )
}
  
export default About