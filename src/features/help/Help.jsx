import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
  Stack
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Help() {
  const faqs = [
    {
      question: 'Como posso alterar meus dados pessoais?',
      answer: (
        <>
          Acesse a aba <Link to="/profile" style={{ color: '#2563eb' }}>Editar meu perfil</Link> no menu lateral e atualize as informações desejadas.
        </>
      ),
    },
    {
      question: 'Onde encontro os relatórios das minhas atividades?',
      answer: (
        <>
          Todos os relatórios estão disponíveis na tela <Link to="/dados" style={{ color: '#2563eb' }}>Visualizar meus dados</Link>.
        </>
      ),
    },
    {
      question: 'Como entro em contato com o suporte?',
      answer: (
        <>
          Você pode clicar nos botões abaixo para enviar uma mensagem pelo <strong>WhatsApp</strong> ou <strong>e-mail</strong>.
        </>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
        Central de Ajuda
      </Typography>

      <Box sx={{ mt: 2 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" fontSize={15}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box textAlign="center" mt={5}>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Ainda precisa de ajuda? Entre em contato:
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            color="success"
            href="https://wa.me/5581999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="mailto:suporte@seudominio.com"
          >
            E-mail
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
