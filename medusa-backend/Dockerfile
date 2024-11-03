# Usa una imagen base de Node 16
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app/backend

# Copia los archivos de configuración de dependencias
COPY package.json ./
COPY yarn.lock* ./

# Instala las dependencias (como lo haces en local)
RUN yarn install 
    

# Copia el resto de los archivos del proyecto
COPY . .

# Expone los puertos necesarios
EXPOSE 9000 7000 7001
ENV HOST=0.0.0.0

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]