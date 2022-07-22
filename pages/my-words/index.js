import { useSession } from "next-auth/react"

export default function MyWords() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session && session.user && session.user.name} <br />
      </>
    )
  }
  return (
    <>
      Not signed in <br />
    </>
  )
}
