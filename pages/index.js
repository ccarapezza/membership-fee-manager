import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import Loading from '../src/Loading';

export default function Index() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    } else if (status === "unauthenticated") {
      router.push("/auth/signIn")
    }
  }, [status]);

  return (
    <Container maxWidth="sm" sx={{ display: "grid", height: "100vh", placeItems: "center" }}>
      <Loading />
    </Container>
  );
}