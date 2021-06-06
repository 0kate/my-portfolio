/* import Link from 'next/link'
 * import Layout from '../components/Layout'
 * 
 * const IndexPage = () => (
 *   <Layout title="Home | Next.js + TypeScript Example">
 *     <h1>Hello Next.js 👋</h1>
 *     <p>
 *       <Link href="/about">
 *         <a>About</a>
 *       </Link>
 *     </p>
 *   </Layout>
 * )
 * 
 * export default IndexPage */
import React from 'react';
import Background from '../components/background';
import Introduction from '../components/introduction';

export default function IndexPage() {
  return (
    <React.Fragment>
      <Background />
      <Introduction />
    </React.Fragment>
  );

}
