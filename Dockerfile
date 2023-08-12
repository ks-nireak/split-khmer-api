# use node 16
FROM node:20-alpine

# set working directory
WORKDIR /app

COPY . .

# using port 3000
EXPOSE 3000

# install dependencies
RUN npm install


# ENTRYPOINT ["/bin/sh", "node main.js"]
ENTRYPOINT ["node", "main.js"]
