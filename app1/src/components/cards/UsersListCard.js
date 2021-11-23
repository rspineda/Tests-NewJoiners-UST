import React from 'react';
import Card from '@mui/material/Card';

export default function UsersListCard({userTask}) {

  const muestraEstadoTarea = () => {
    if(userTask.completed){
      return 'true';
    }else{
      return 'false';
    }
  };

    return (
      userTask.map(task => <Card sx={{ maxWidth: 400 }} key={userTask.id}>
        {task.userId} - {task.title} - {muestraEstadoTarea()}
        </Card>)
    );
  
}