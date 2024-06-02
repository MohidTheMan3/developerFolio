FROM node:16

# Create app directory
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Install app dependencies
COPY package*.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

# RUN apk add --no-cache git

# Install any needed packages
RUN npm install

# Audit fix npm packages
RUN npm audit fix --force

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
