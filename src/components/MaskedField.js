import { TextField } from '@mui/material';
import React from 'react';
import { IMaskMixin } from 'react-imask';

const MaskedField = IMaskMixin(({ inputRef, ref, ...props }) => (
	<TextField {...props} inputRef={inputRef} ref={ref} />
));

export default MaskedField;
