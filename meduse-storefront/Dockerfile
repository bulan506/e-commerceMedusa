# Usa una imagen base de Node 16
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app/storefront

# Copia los archivos de configuración de dependencias
COPY package.json ./
COPY yarn.lock* ./


# Instala las dependencias
RUN yarn install 
    

# Copia el resto de los archivos del proyecto
COPY . .


# Expone el puerto necesario
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["yarn", "dev"]