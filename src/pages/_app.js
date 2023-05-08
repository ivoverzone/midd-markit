import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../material/theme";
import createEmotionCache from "../material/createEmotionCache";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  // pageProps,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}) {
  const Footer = styled("footer")(({ theme: styledTheme }) => ({
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: styledTheme.spacing(5),
    paddingTop: styledTheme.spacing(2),
  }));

  // const { data: userSession } = useSession({ required: true });

  // useEffect(() => {
  //   if (userSession) {
  //     if (userSession.user) {
  //       setUser(userSession.user);
  //     }
  //   }
  // }, [userSession]);

  // const handleClick = (button) => {
  //   if (button === "sell") {
  //     router.push("/sellerpage");
  //   }

  //   if (button === "home") {
  //     router.push("/");
  //   }

  //   if (button === "user items" && user) {
  //     router.push(`/users/${user.id}`);
  //   }
  // };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Midd Markit</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main>
          <Container>
            <Typography variant="h2" align="center">
              Midd Markit
            </Typography>
            <SessionProvider session={session}>
              <NavBar />
              <SearchBar />
              <Component {...pageProps} />
            </SessionProvider>
          </Container>
        </main>

        <Footer>CS312 Final Project</Footer>
      </ThemeProvider>
    </CacheProvider>
  );
}
