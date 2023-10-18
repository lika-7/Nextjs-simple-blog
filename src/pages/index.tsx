import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/post'
import homeStyles from '../styles/Home.module.css'

export default function Home({allPostsData}:{
  allPostsData:{
    date: string,
    title: string,
    id: string
  }[]
} ){
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Hone Ahn</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Jhon Ahn Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headinglg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id, title, date}) =>
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className={homeStyles.lightText}>
              {date}
            </small>
          </li>
          )}
        </ul>
      </section>
    </div>
  )
}

//getStaticProps는 Next.js 13에서 에러가 남
export const getStaticProps:GetStaticProps= async function(){
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
}
