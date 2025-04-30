# Usar imagen base específica para arquitectura x86_64
FROM --platform=linux/amd64 node:16

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    sqlite3 \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias 
RUN npm install
RUN npm install sqlite3@5.0.2

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
