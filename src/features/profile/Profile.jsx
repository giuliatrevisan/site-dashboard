import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';

const InputField = ({ label, name, type = 'text', value, onChange }) => (
  <div className="w-full md:w-1/2 px-2 mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default function Profile() {
  const [form, setForm] = useState({
    name: 'Giulia Trevisan',
    email: 'giulia@gmail.com',
    phone: '(85) 90101-0202',
    birthdate: '',
    password: '',
    currentPassword: '',
  });

  const [saved, setSaved] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados atualizados:', form);
    setSaved(true);
  };

  const handleDeleteClick = () => setDeleteDialogOpen(true);
  const handleDeleteCancel = () => setDeleteDialogOpen(false);
  const handleDeleteConfirm = () => {
    setDeleteDialogOpen(false);
    console.log('Conta excluída');
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Editar Meu Perfil</h1>
        <p className="text-gray-600">Atualize suas informações pessoais abaixo.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <img
            src={photo || 'https://ui-avatars.com/api/?name=Giulia+Trevisan&background=random'}
            alt="Foto de perfil"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          <label htmlFor="photoUpload" className="text-sm text-blue-600 hover:underline cursor-pointer">
            Alterar foto
            <input type="file" id="photoUpload" accept="image/*" className="hidden" onChange={handlePhotoChange} />
          </label>
        </div>

        {/* Dados Pessoais */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-inner space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">📋 Dados Pessoais</h2>
          <div className="flex flex-wrap -mx-2 gap-y-4">
            <InputField label="Nome completo" name="name" value={form.name} onChange={handleChange} />
            <InputField label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} />
            <InputField label="Telefone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            <InputField label="Data de nascimento" name="birthdate" type="date" value={form.birthdate} onChange={handleChange} />
          </div>
        </div>

        {/* Segurança */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-inner space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">🔐 Segurança</h2>
          <div className="flex flex-wrap -mx-2 gap-y-4">
            <InputField label="Senha atual" name="currentPassword" type="password" value={form.currentPassword} onChange={handleChange} />
            <InputField label="Nova senha" name="password" type="password" value={form.password} onChange={handleChange} />
          </div>
        </div>


        {/* Mensagem de sucesso */}
        {saved && <p className="text-green-600 text-sm font-medium">Dados salvos com sucesso!</p>}

        {/* Botão de salvar */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Salvar Alterações
        </button>
      </form>

      {/* Exclusão de conta */}
      <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-300">
        <h3 className="text-red-600 font-semibold">Atenção</h3>
        <p className="text-sm text-red-500">Excluir sua conta é uma ação irreversível.</p>
        <button
          onClick={handleDeleteClick}
          className="mt-2 text-sm text-red-600 hover:underline"
        >
          Deletar minha conta
        </button>
      </div>

      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancelar</Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
