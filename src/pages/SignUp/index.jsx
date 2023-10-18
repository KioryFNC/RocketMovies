import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';



export function SignUp() {
  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Movies</h1>
        <p>Application to follow and save everything that you watched</p>

        <h2>Create Account</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiLogIn}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Create" />

        <Link to="/">
          Back to log in
        </Link>

      </Form>

    </Container>
  );
}