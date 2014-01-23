`Pushpath` in its simplest form is like a self-service Paas(Platform as a Service) build tool via web interface.
Using an existing technologies eg. Docker.io, Vagrant, Puppet, Virtualbox, or VMWare - they'll be glued together to form a platform that suits your needs.
Such platform could be a [LAMP](http://en.wikipedia.org/wiki/LAMP_%28software_bundle%29), [LYME](http://en.wikipedia.org/wiki/LYME_%28software_bundle%29) or [MEAN](http://mean.io/)

### Goals

* Provision lightweight virtual machines w/ tools for Devs, QA, production or staging deployment environment
* Build virtual machines for LAMP, LYME or MEAN stack

### System Requirements

* [Node.js](http://www.nodejs.org)
* [Vagrant](http://vagrantup.com/)
* [Virtualbox](http://virtualbox.org/)

### Installation

Install Pushpath CLI

    $> npm install pushpath -g

### Howto

Create a project directory and change to the new directory

    $> mkdir test-vm-project && cd test-vm-project/

Run Pushpath

    $> pushpath

By default, Pushpath will listen on port 3000

    http://localhost:3000

Type the URL in your browser and configure your new project via the web interface


### Current Status

The project is still in early development stages. I’ve only been working on it for about 3 weeks as of this writing (9/Jan/2014)

### I found some English errors on the web site or in the documentation

Our apology for that. English is not the mother tong of the main author. And he didn't work enough at school at english subjects, he used to skip classes :). However, he will be very happy to receive your help to fix English errors.

### License

Code licensed under [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0)

