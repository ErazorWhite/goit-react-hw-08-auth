import { Helmet } from "react-helmet";
import { HomeContainer, HomeTitle } from "./Home.styled";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <HomeContainer style={styles.container}>
      <Helmet>
        <title>Phonebook - home</title>
      </Helmet>
      <HomeTitle style={styles.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
}
