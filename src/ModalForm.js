import React from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';


export default function ModalForm() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());


  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <form className='inputForm'>


      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">

            <TextField
              autoFocus
              id="standard-helperText"
              label="Name"
              defaultValue=""
              helperText="Your Name Here"
            />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline-start"
            label="Plan starting date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline-end"
            label="Event Date (ending date)"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

    </form>
  )
}