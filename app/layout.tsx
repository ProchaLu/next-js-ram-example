import './globals.css';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};
export const dynamic = 'force-dynamic';

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/fruits">Fruits</Link>
              <Link href="/fruits/banana">Banana</Link>
            </div>
          </nav>
        </header>
        {props.children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
