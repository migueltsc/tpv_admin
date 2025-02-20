import React, { useState } from 'react';
import { Avatar, IconButton, Popover, Typography, Box, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; // Import DeleteIcon from @mui/icons-material
import { useDataProvider, useNotify, useRefresh, useRecordContext, useUpdate } from 'react-admin';

const ImageWithUploadAndPreview = ({ source, entity }) => {
    const refresh = useRefresh();

    const record = useRecordContext();
    console.log(record)
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const open = Boolean(anchorEl);
    const id = open ? "image-upload-popover" : undefined;

    const [update, { isPending }] = useUpdate();

    const handleImageClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                notify('Por favor, selecciona un archivo de imagen válido', { type: 'error' });
                return;
            }

            const formData = new FormData();
            formData.append("image", file);
            setIsLoading(true);

            try {
                // Get the token from localStorage
                const token = localStorage.getItem('token');

                // Ajusta la URL de subida según tu API
                const response = await fetch(import.meta.env.VITE_IMAGE_UPLOAD_URL, {
                    method: 'POST',
                    body: formData,
                    headers: { // Add the Authorization header
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al subir la imagen');
                }

                const data = await response.json();
                const newImageUrl = data.url;

                const patchData = `{ "${source}": "${newImageUrl}" }`;
                console.log(source, entity, patchData)


                const response2 = await fetch(`${import.meta.env.VITE_API_URL}/${entity}?id=eq.${record.id}`, {
                    method: 'PATCH',
                    body: patchData,
                    headers: { // Add the Authorization header
                        'content-type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                refresh();

                notify('Imagen Actualizada', { type: 'info' });
                handleClose();
            } catch (error) {
                console.error("Error al subir la imagen:", error);
                notify('Error al subir la imagen', { type: 'error' });
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleDeleteImage = async () => {
        setIsLoading(true);
        try {
            // Get the token from localStorage
            const token = localStorage.getItem('token');

            // Actualizar el registro a través del dataProvider
            //await dataProvider.update(entity, {
            // id: recordId,
            //     data: { [source]: null },
            // headers: { // Add the Authorization header
            //     'Authorization': `Bearer ${token}`,
            //     },
            //});

            notify('Imagen Eliminada', { type: 'info' });
            handleClose();
        } catch (error) {
            console.error("Error al eliminar la imagen:", error);
            notify('Error al eliminar la imagen', { type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const absoluteImageUrl = record.image_url
        ? record.image_url
        : import.meta.env.VITE_DEFAULT_AVATAR_URL;

    return (
        <div>
            <IconButton onClick={handleImageClick} disabled={isLoading}>
                <Avatar alt="User Image" src={absoluteImageUrl} >
                    {isLoading && <CircularProgress size={24} />}
                </Avatar>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Typography>Opciones de imagen:</Typography>
                    <label htmlFor="image-upload">
                        <IconButton component="span" disabled={isLoading}>
                            <EditIcon /> Cambiar
                        </IconButton>
                    </label>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="image-upload"
                        type="file"
                        onChange={handleImageChange}
                        disabled={isLoading}
                    />
                    {record.image_url && (
                        <IconButton onClick={handleDeleteImage} disabled={isLoading}>
                            <DeleteIcon /> Eliminar
                        </IconButton>
                    )}
                    {isLoading && <CircularProgress />}
                </Box>
            </Popover>
        </div>
    );
};

export default ImageWithUploadAndPreview;