import React, { useState } from 'react';
import { Menu, LogOut } from 'lucide-react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from '@mui/material';

export default function Navbar({ onMenuToggle, isSidebarOpen }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLogout = () => {
    setDialogOpen(false);
    console.log('Logout confirmado');
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow w-full">
        {!isSidebarOpen && (
          <IconButton onClick={onMenuToggle} className="text-gray-800">
            <Menu />
          </IconButton>
        )}

        <div className="flex-1" />

        <Button
          variant="text"
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 text-gray-800"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </nav>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Deseja sair?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja encerrar a sessão?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleLogout} color="error" autoFocus>
            Sair
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
