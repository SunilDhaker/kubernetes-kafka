FROM node:boron

MAINTAINER Sunil Dhaker <sunil@fretron.com>


#
RUN  npm install -g duplicator
RUN  npm install -g http-server

EXPOSE 55027
EXPOSE 5023


CMD [ "sh"  , "-c" , "http-server & duplicator -f 180.179.207.202:1141 -d fleet.fretron.com:5027 -p 55027  &  duplicator -f fleet.fretron.com:5023 -d localhost:8080 -p 5023" ]
