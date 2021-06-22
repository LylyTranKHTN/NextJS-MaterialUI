import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import {
  Cart,
  Carousel,
  CartSlider,
  GridList,
  VideoPlayer,
} from '../components';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

export default function Home(props) {
  console.log(props.isOK);
  const router = useRouter();
  const handleClickGirdItem = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
      </Head>
      <GridList onClick={handleClickGirdItem}/>
      <VideoPlayer />
      <Carousel />
      <Grid container>
        <Grid item xs={4}>
          <Cart />
        </Grid>
        <Grid item xs={4}>
          <Cart />
        </Grid>
        <Grid item xs={4}>
          <Cart />
        </Grid>
      </Grid>
      <CartSlider />
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/images/img1.jpg");
  await res.ok;
  if (res.ok) {
    return {
      props: { isOK: true },
    }
  } else {
    return {
      props: { isOK: false },
    }
  }
}
