// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pivetis FC - Pro Clubs',
  description: 'Bem-vindo ao Pivetis FC • Pro Clubs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/" className="brand" aria-label="Home Pivetis FC">
              <Image
                src="/Real_Madrid.png"
                alt="Logo do time"
                width={28}
                height={28}
                priority
                style={{ borderRadius: 6, background: '#0b0b0b' }}
              />
              <span className="brand-title">Pivetis FC</span>
            </Link>

            <div className="nav-actions">
              <Link href="/login" className="btn btn-login" aria-label="Ir para página de login">
                Entrar
              </Link>
              {/* Se quiser um outro botão escuro, ele já herda o tema */}
              {/* <Link href="/sobre" className="btn btn-dark">Sobre</Link> */}
            </div>
          </nav>
        </header>

        <main className="section">{children}</main>

        <footer className="footer section">
          <small>© {new Date().getFullYear()} Pivetis FC • Pro Clubs</small>
        </footer>
      </body>
    </html>
  );
}