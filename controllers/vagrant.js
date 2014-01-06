/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var vagrant_controller = function(app) {

    app.get('/vagrant', function(req, res){
        var config = pushpath.config.read()['plugins']['vagrant']['config'];
        res.render('vagrant/index', {config: config});
    });

    app.post('/vagrant/update', function(req, res){
        var params = req.body;
        var data_updates = {
            plugins: {
                vagrant: {
                    config: {
                        config_vm_box: params.config_vm_box,
                        config_vm_box_url: params.config_vm_box_url,
                        network: {
                            network_type: params.network_type,
                            network_ip: params.network_ip,
                            network_hostname: params.network_hostname
                        },
                        provider: {
                            type: params.provider_type,
                            name: params.provider_name
                        }
                    }
                }
            }
        };

        pushpath.config.update(data_updates);

        if (params.config_apply && params.config_apply === 'on') {
            pushpath.vagrant.applyConfig();
        }

        res.redirect('/vagrant');
    });

    app.get('/vagrant/command', function(req, res){
        var params = req.query;

        if (params.action) {
            switch(params.action) {
                case 'start':
                    pushpath.vagrant.up();
                    break;
                case 'stop':
                    pushpath.vagrant.halt();
                    break;
                case 'suspend':
                    pushpath.vagrant.suspend();
                    break;
                case 'resume':
                    pushpath.vagrant.resume();
                    break;
                case 'provision':
                    pushpath.vagrant.provision();
                    break;
                case 'destroy':
                    pushpath.vagrant.destroy();
                    break;
                default:
                    // do nothing
                    break;
            }
        }
        res.redirect('/');
    });

};

module.exports = vagrant_controller;

