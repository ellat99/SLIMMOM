import {   Input, Button,   FormGroup  } from '@mui/material'
import React from 'react'

 

export default function DiaryForm() {
  return (
    <FormGroup>
    <Input placeholder="Enter product name *"   />
    <Input placeholder="Grams  *"   />
    
          <Button             
            variant="contained"
            type="submit"
            color="ochre"
            sx={{
              mb: 1,
              fontFamily: 'Verdana',
              fontSize: '14px',
              
            }}
          >
            Start losing weight
          </Button>
        
    </FormGroup>
  )
}
