FROM node:16

# Crear directorio de la aplicación
WORKDIR /app/backend

# Crear usuario no-root
RUN groupadd -r medusa && \
    useradd -r -g medusa medusa && \
    mkdir -p /app/backend/dist && \
    chown -R medusa:medusa /app/backend

# Establecer directorio de caché npm
RUN mkdir -p /home/medusa/.npm && \
    chown -R medusa:medusa /home/medusa

# Cambiar al usuario no-root
USER medusa

# Establecer el directorio de caché de npm
ENV NPM_CONFIG_CACHE=/home/medusa/.npm

# Copiar archivos del proyecto con los permisos correctos
COPY --chown=medusa:medusa package.json yarn.lock* ./

# Instalar dependencias
RUN yarn global add @medusajs/medusa-cli@latest
RUN yarn install

# Copiar el resto de los archivos
COPY --chown=medusa:medusa . .

# Asegurarse que el directorio dist tenga los permisos correctos
RUN mkdir -p dist && chmod 755 dist

# Exponer puertos
EXPOSE 9000 7001
ENV HOST=0.0.0.0

# Comando para iniciar la aplicación
CMD ["yarn", "dev"]