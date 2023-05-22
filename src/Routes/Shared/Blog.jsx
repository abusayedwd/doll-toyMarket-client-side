import React from 'react';

const Blog = () => {
        return (
                <div className='w-[75%] mx-auto'>
                        <h1 className='text-3xl font-serif font-bold text-center m-10'>Question & Answer </h1>
                        <div className='mt-8'>
                        <p className='font-bold'><span className=' text-slate-500'>question :</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                        <p className='text-slate-400 font-bold'><span className='font-bold underline'>Answer :</span>
                        hen available for any requests originating from server-side code</p>
                        </div>

                        <div className='mt-8'>
                        <p className='font-bold'><span className=' text-slate-500'>question :</span>Compare SQL and NoSQL databases?</p>
                        <p className='text-slate-400 font-bold'><span className='font-bold underline'>Answer :</span>
                        1.SQL databases are relational, and NoSQL databases are non-relational. <br />
                        2.SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>

                        <div className='my-8'>
                        <p className='font-bold'><span className=' text-slate-500'>question :</span>What is express js? What is Nest JS?</p>
                        <p className='text-slate-400 font-bold'><span className='font-bold underline'>Answer :</span>The main difference between both frameworks is that NestJS is opinionated while ExpressJS is unopinionated. An opinionated framework means that it has a proper style or way of doing things. It has a proper structure and is less diverse</p>
                        </div>

                        <div className='mb-10'>
                        <p className='font-bold'><span className=' text-slate-500'>question :</span>What is MongoDB aggregate and how does it work?</p>
                        <p className='text-slate-400 font-bold'><span className='font-bold underline'>Answer :</span>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                        </div>
                </div>
        );
};

export default Blog;