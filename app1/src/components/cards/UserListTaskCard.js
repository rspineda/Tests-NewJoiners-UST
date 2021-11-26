import React from 'react';
import Card from '@mui/material/Card';

export default function UserListTaskCard({oneUserTask}){
  const muestraEstadoTarea = () => {
      if(oneUserTask.completed){
        return 'true';
      }else{
        return 'false';
      }
    };
    const aux =[oneUserTask];
      return (
        aux.map(task => <Card sx={{ maxWidth: 400 }} key={aux.id}>
          {task.userId} - {task.title} - {muestraEstadoTarea()}
          </Card>)
      );
   }