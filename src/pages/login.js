function Login() {
  return <div>Login {process.env.customKey}</div>
}

// This function gets called at build time
export async function getStaticProps() {
// Call an external API endpoint to get posts
const res = await fetch('localhost:8000')
const posts = await res.json()

// By returning { props: posts }, the Blog component
// will receive `posts` as a prop at build time
return {
    props: {
    posts,
    },
}
}

export default Login;
