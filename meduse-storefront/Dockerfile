# Usa una imagen base de Node 16
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app/storefront

# Copia los archivos de configuración de dependencias
COPY package.json ./
COPY yarn.lock* ./ 


# Instala las dependencias
RUN npm install
RUN yarn

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto para el frontend
EXPOSE 8000

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]