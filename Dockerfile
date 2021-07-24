# Specify Base Image
FROM node:alpine

# Set working dir
WORKDIR /app

# add node modules to path
ENV PATH /app/node_modules/.bin:$PATH

# Install Dependencies
COPY ./package.json ./
RUN npm update
RUN npm install yarn
RUN yarn install

# Copy files
COPY ./ ./

EXPOSE 3000

# Default Commands
CMD ["yarn", "start"]