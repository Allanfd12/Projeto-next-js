import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <Link href="/sobre">
                <a>Ir para Sobre</a>
            </Link>
        </div>
        )
}

export default Home
