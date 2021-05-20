import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { Chat } from './Chat';

export const ChatFab = () => {
  const [opened, setOpen] = useState()

  const toggle = () => setOpen( prev => !prev )

  return <div style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
    <div style={{
      position: 'relative', bottom: '60px', right: '0px',
      display: opened ? 'block' : 'none',
      animation: 'showNav 250ms ease-in-out both'
    }}>
      <Chat />
    </div>
    <Fab
      style={{ position: 'fixed', bottom: '25px', right: '25px' }}
      color="secondary" aria-label="edit"
      onClick={toggle}
    >
      <EditIcon />
    </Fab>
  </div>
}