export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Page is {params.slug}</h1>;
}