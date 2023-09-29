import React, { useState } from 'react';
import styled from 'styled-components';
import CpfInput from './CpfInput';

const AppTitle = styled.h1`
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  padding: 100px;
  border-radius: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin: 50px auto 0;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCpfChange = (formattedCpf) => {
    setCpf(formattedCpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de cadastro
    console.log(`Nome: ${nome}, Email: ${email}, CPF: ${cpf}`);
  };

  return (
    <div>
      <AppTitle>FOME ZERO</AppTitle>
      <Container>
        <Title>Cadastro</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome:</Label>
            <Input
              type="text"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Nome Completo"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="exemplo@email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>CPF:</Label>
            <CpfInput cpf={cpf} onChange={handleCpfChange} />
          </FormGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Home;
