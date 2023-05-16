export async function getStaticProps() {
  return {
      props: {
          pageTitle: 'home',
      }
  }
}

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <h1 className="text-4xl font-bold text-center"> Hello World! </h1>
    </main>
  )
}
