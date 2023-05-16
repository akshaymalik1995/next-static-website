export async function getStaticProps() {
    return {
        props: {
            pageTitle: 'essays',
        }
    }
}



export default function Essays() {
    return (
        <main className="flex flex-col items-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-4">Essays</h1>
            <ul className="list-disc list-inside">
                <li>
                    <a href="/essays/essay1" className="text-blue-500 hover:text-blue-700">
                        Essay 1
                    </a>
                </li>
                <li>
                    <a href="/essays/essay2" className="text-blue-500 hover:text-blue-700">
                        Essay 2
                    </a>
                </li>
                <li>
                    <a href="/essays/essay3" className="text-blue-500 hover:text-blue-700">
                        Essay 3
                    </a>
                </li>
            </ul>
        </main>
    );
}

