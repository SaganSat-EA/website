import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../pages/_footer'
import Header from '../pages/_header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SaganSat-EA</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="SaganSat-EA website" />

        <link rel="icon" type="image/x-icon" href="assets/img/imagem_planeta.jpeg" />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
      </Head>

      <Header />

      <Footer />

      <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <script src="js/scripts.js"></script>
    </div>
  )
}
