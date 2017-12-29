FROM ubuntu

MAINTAINER Sunil Dhaker <sunil@fretron.com>

RUN apt-get update
RUN  apt-get install -y  git




COPY ./version_increase.sh /version_increase.sh 

ENTRYPOINT ["/version_increase.sh"]