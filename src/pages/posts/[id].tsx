import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'

const Post = ({postData}:{
    postData:{
        title: string,
        date: string,
        contentHtml: string
    }
}) =>{
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 >{postData.title}</h1>
                <div>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </div>
    )
}
export default Post

export const getStaticPaths: GetStaticPaths = function async (){
    const paths = getAllPostIds()
    //[{params: {id:`ore-rendering`},{params...}}]
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async function async({params}){
    const postData = await getPostData(params?.id as string)
    return{
        props: {
            postData
        }
    }
}