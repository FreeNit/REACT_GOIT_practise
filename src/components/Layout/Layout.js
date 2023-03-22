import { Container } from './Layout.styrled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  );
};
