# Usa una imagen base de Node.js para desarrollo
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto de Vite (normalmente 5173)
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo de Vite
CMD ["npm", "run", "dev"]