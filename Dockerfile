# ==== DEVELOPMENT =====
FROM node:18.15-alpine as development

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Copy app files
COPY . .

# start app
ENTRYPOINT ["npm"]
CMD ["start"]
# ==== DEVELOPMENT =====

# ==== BUILD =====
FROM development as build
RUN npm run build
ENTRYPOINT ["npm", "run"]

# ==== BUILD =====