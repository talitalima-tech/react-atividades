import React, { useState } from 'react';

const FeedbackForm = () => {
  // Inicializando o estado com um objeto para organizar os campos
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    comentario: ''
  });

  // Função genérica para atualizar qualquer campo do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, // Mantém os valores anteriores
      [name]: value // Atualiza apenas o campo que mudou
    });
  };

  // Função de envio
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    if (!formData.nome || !formData.email || !formData.comentario) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Exibição dos dados
    alert(`Feedback Enviado com Sucesso! \n
      Nome: ${formData.nome} \n
      Email: ${formData.email} \n
      Comentário: ${formData.comentario}`);

    // Limpa o formulário após o envio
    setFormData({
      nome: '',
      email: '',
      comentario: ''
    });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Deixe seu Feedback</h2>

        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          style={styles.input}
          placeholder="Seu nome completo"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="seu@email.com"
        />

        <label>Comentário:</label>
        <textarea
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="O que você achou?"
        />

        <button type="submit" style={styles.button}>Enviar Feedback</button>
      </form>
    </div>
  );
};

// Estilização básica (CSS-in-JS)
const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px' },
  form: { display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  textarea: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' },
  button: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default FeedbackForm;