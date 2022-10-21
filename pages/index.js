import styles from '../styles.module.css'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>next/link <Code style={{ fontSize: '33px' }}>as</Code> prop throw an error with optional catch all routes using URL Object syntax</h1>
      <hr className={styles.hr} />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/news" as="/blog">
              This works: <Code>/news</Code> as <Code>/blog</Code>
            </Link>{' '}
            (or at least it seems to work, but prefetch fails, see{' '}
            <Link href="https://github.com/vercel/next.js/issues/35696">this issue</Link>
            )
          </li>
          <li>
            <Link href={{ pathname: '/news/[[...slug]]' }} as="/blog">
              This does not work:{' '}
              <Code>{`{ pathname: '/news/[[...slug]]' }`}</Code>{' '}
              as{' '}
              <Code>/blog</Code>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/news/[[...slug]]', query: { slug: [] } }} as="/blog">
              Neither this:{' '}
              <Code>{`{ pathname: '/news/[[...slug]]', query: { slug: [] } }`}</Code>{' '}
              as{' '}
              <Code>/blog</Code>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        The last two throw the following error on click:{' '}
        <Code>
          Error: The provided `as` value (/blog) is incompatible with the `href` value (/news/[[...slug]]). Read more:{' '}
          <Link href="https://nextjs.org/docs/messages/incompatible-href-as">
            https://nextjs.org/docs/messages/incompatible-href-as
          </Link>
        </Code>
        .
      </p>
      <hr className={styles.hr} />
    </div>
  </div>
)

export default Index
