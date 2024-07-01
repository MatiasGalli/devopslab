FROM node:22-alpine3.19

WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Rebuild bcrypt para la arquitectura de Alpine
RUN npm rebuild bcrypt

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Exponer el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Definir el comando de inicio de la aplicación
CMD ["npm", "run", "start:prod"]
