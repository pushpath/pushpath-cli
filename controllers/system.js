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

var system_controller = function(app) {

    app.get('/system', function(req, res){
        var config = pushpath.config.read();

        res.render('system/index', {config: config});
    });

    app.post('/system/update', function(req, res){
        var params = req.body;
        var data_updates = {
            name: params.config_name,
            date_created: new Date().getTime(),
            date_updated: new Date().getTime()
        };

        pushpath.config.update(data_updates);

        res.redirect('/system');
    });
};

module.exports = system_controller;