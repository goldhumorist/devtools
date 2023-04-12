# use lightweight distro
FROM node:alpine
# home dir in container for subsequent instructions
WORKDIR /home/app
# copy this app to container dir
COPY package*.json .
# execute in workdir
RUN npm ci
#
COPY . .
# app and debug ports exposed on a container EXPOSE 3000
EXPOSE 3000

RUN npm run build

# default command executed
CMD ["npm","start"]