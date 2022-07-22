import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Dashboard: Signed in as {session && session.user && session.user.name} <br />
      </>
    )
  }
  return (
    <>
      Not signed in <br />
    </>
  )
}
