import { LoadingButton } from '@mui/lab';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SNACKBAR_SEVERITIES } from '../constants';
import ERROR_MESSAGES from '../constants/errors';
import VALIDATORS from '../constants/validators';
import { AppContext } from '../contexts/AppContext';
import ApiService from '../services/ApiService';
import MaskedField from './MaskedField';

export default function UserRequestForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useContext(AppContext);

	const onSubmit = async (data) => {
		if (isLoading) {
			return;
		}

		data.name = data.name.trim();
		data.phoneNumber = data.phoneNumber.trim();
		data.message = data.message.trim();

		try {
			const res = await ApiService.sendUserRequest(data);

			if (res) {
				reset();
				toast(
					'Спасибо! Мы свяжемся с вами в ближайшее время!',
					SNACKBAR_SEVERITIES.SUCCESS
				);
			}
		} catch (e) {
			toast(ERROR_MESSAGES.NETWORK_DEFAULT);
		}
	};

	return (
		<Paper padded component="form" onSubmit={handleSubmit(onSubmit)}>
			<Typography variant="h5" mb={4}>
				Оставить заявку
			</Typography>

			<Grid container spacing={2} mb={2}>
				<Grid item container xs={12} spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="Имя*"
							placeholder="Даниал"
							error={Boolean(errors.name)}
							helperText={errors.name?.message}
							disabled={isLoading}
							{...register('name', VALIDATORS.NAME)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<MaskedField
							fullWidth
							mask="+{7} (000) 000-00-00"
							label="Номер телефона*"
							error={Boolean(errors.phoneNumber)}
							helperText={errors.phoneNumber?.message}
							disabled={isLoading}
							inputProps={{
								inputMode: 'tel',
								...register('phoneNumber', VALIDATORS.PHONE_NUMBER),
							}}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} spacing={4}>
					<TextField
						fullWidth
						label="Сообщение"
						placeholder="Хочу обсудить сотрудничество"
						multiline
						minRows={3}
						maxRows={3}
						disabled={isLoading}
						{...register('message')}
					/>
				</Grid>
			</Grid>

			<LoadingButton
				fullWidth
				variant="contained"
				loading={isLoading}
				type="submit"
			>
				Отправить
			</LoadingButton>
		</Paper>
	);
}
