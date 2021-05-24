import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

const QuestionPopup = ({open, setClose, question})=>{
    return(
        <Dialog
        open={open}
        onClose={setClose(false)}
      >
        <DialogTitle>Atenção!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setClose(false)} color="primary">
            Não
          </Button>
          <Button onClick={() => setClose(false)} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default QuestionPopup