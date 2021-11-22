import React from 'react';
import Card from '@mui/material/Card';

export default function MainCard({userTask}) {

    return (
      userTask.map(user => <Card sx={{ maxWidth: 400 }} key={userTask.id}>
        {user.userId} - {user.title}
        </Card>)
    );
  
}