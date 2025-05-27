import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

import {
  LayoutDashboard,
  User,
  HelpCircle,
  Settings,
  LogOut,
} from 'lucide-react';

export default function Sidebar({ isOpen, handleLogout }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const items = [
    { label: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { label: 'Visualizar meus dados', path: '/dados', icon: <User size={18} /> },
    { label: 'Ajuda', path: '/ajuda', icon: <HelpCircle size={18} /> },
    { label: 'Editar meu perfil', path: '/perfil', icon: <Settings size={18} /> },
  ];

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50 
          bg-white text-gray-800 p-6 shadow-lg border-r
          transform transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <h1 className="text-2xl font-bold mb-8 tracking-wide">Flori Tech</h1>
        <ul className="space-y-4 mb-8">
          {items.map(({ label, path, icon }) => (
            <li key={label}>
              <Link
                to={path}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-transparent hover:border-indigo-500 hover:bg-gray-50 hover:shadow transition-all"
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-md border border-transparent text-left text-red-600 hover:border-red-400 hover:bg-red-50 hover:shadow transition-all"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </aside>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Deseja sair?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja encerrar a sessão?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button
            onClick={() => {
              setDialogOpen(false);
              handleLogout();
            }}
            color="error"
            autoFocus
          >
            Sair
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
