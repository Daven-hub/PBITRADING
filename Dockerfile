# ─────────────────────────────────────────
# Stage 1 : Build de l'application React
# ─────────────────────────────────────────

FROM node:20-alpine AS builder

# On définit le dossier de travail dans le container
WORKDIR /app

# On copie package.json et package-lock.json EN PREMIER
# (astuce DevOps : Docker met en cache cette couche si ces fichiers
# n'ont pas changé → npm install ne se relance pas à chaque build)
COPY package*.json ./

# On installe les dépendances
RUN npm install

# On copie tout le reste du code source
COPY . .

# On compile l'app React/Vite → génère le dossier /app/dist
RUN npm run build

# ─────────────────────────────────────────
# Stage 2 : Serveur de production (Nginx)
# ─────────────────────────────────────────
FROM nginx:alpine AS production

# On copie UNIQUEMENT le /dist compilé depuis le stage 1
# (node_modules, src, etc. ne sont pas copiés → image légère)
COPY --from=builder /app/dist /usr/share/nginx/html

# On expose le port 80 (port standard HTTP de Nginx)
EXPOSE 80

# Nginx démarre automatiquement, pas besoin de CMD explicite