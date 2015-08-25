(function (views) {

	function Server(ajax) {
		ajax = ajax || $.ajax
		this.get = function (url, callback) {
			console.log("Server getting ", url)
			ajax({
				method: 'GET',
				url:url,
				headers: {          
                 Accept : "application/json; charset=utf-8"
                },
                timeout: 1000
			})
			.done(function (data, status) {
				if(status == "success") {
					callback(data);
				} else {
					console.log("Got status", status, "Retrying", url);
					setTimeout(500, function () {
						this.get(url, callback);
					})
				}
			});
		}
	}

	function API(ajax) {
		ajax = ajax || $.ajax
		this.get = function (url, callback) {
			ajax({
				method: 'GET',
				url:API_URL + url,
				crossDomain: true,
				type:'GET',
				data: {
					application_name: 'ui',
					application_token: API_TOKEN
				},
				headers: {          
                 Accept : "application/json; charset=utf-8"
                }, 
                timeout: 1000
			})
			.done(function (data, status) {
				if(status == "success") {
					callback(JSON.parse(data));
				} else {
					console.log("Got status", status, "Retrying", url);
					setTimeout(500, function () {
						this.get(url, callback);
					})
				}
			});
		}
	}

	function DevicesRepository(api) {
		api = api || new API();
		this.all = function (callback) {
			api.get('/devices', callback);
		}
		this.find = function (deviceName, callback) {
			api.get('/devices/' + deviceName, callback);
		}
	}

	function ServicesRepository(api) {
		api = api || new API();

		this.all = function (callback) {
			api.get('/services', callback);
		};

		this.find = function (serviceId, callback) {
			api.get('/services/' + serviceId, callback);
		}
	}

	function InterfacesRepository(api) {
		api = api || new API();
		
		this.
		find = function (interface, deviceName, callback) {
			api.get('/devices/' + deviceName + '/interfaces/' + interface +'/latest', callback);
		};
		this.routingInstances = function (interface, deviceName, callback) {
			api.get('/devices/' + deviceName + '/interfaces/' + interface + '/routing_instances', callback);
		};
	}

	function CustomersRepository(api) {
		api = api || new API();
		this.all = function (callback) {
			api.get('/companies', callback);
		}

		this.find = function (customerName, callback) {
			api.get('/companies/' + customerName, callback);
		};
	}


	function DeviceRoutes (devicesRepo, interfacesRepo) {
		
		this.all = function () {
			devicesRepo.all(function (devices) {
				views.render('devices', {devices:devices});
			});
		};

		this.find = function(deviceName) {
			devicesRepo.find(deviceName, function (device) {
				views.render('device', {device:device});

				_(device['interfaces']).forEach(function (interfaceName) {
					interfacesRepo.find(interfaceName, deviceName, function (interface) {
						interfacesRepo.routingInstances(interfaceName, deviceName, function (routingInstances) {
							views.appendPartial('#interfaces', 'interface', {
								interface: interface,
								routingInstances: routingInstances
							});
						});
					});
				}).value();
			});
		};
	}

	function ServiceRoutes (servicesRepo) {

		this.find = function(serviceId) {
			servicesRepo.find(serviceId, function (service) {
				views.render('service', {service:service});
			});
		}
		this.all = function() {
			servicesRepo.all(function (services) {
				if(services.length == 0) {			
					views.render('no_services');
				} else {
					views.render('services', {services:services});
				}
			});
		}
	}

	function CustomerRoutes(customersRepo) {

		this.all = function() {
			views.render('customers');
			customersRepo.all(function (customers) {
				console.log(customers[0].name);
				views.renderPartial('#customers', 'customers-table', {companies: customers});
			});
		};

		this.find = function(customerName) {
			console.log(customerName)
			customersRepo.find(customerName, function (customer) {
				views.render('customer', {customer: customer});
			});
		};
	}

	var devicesRepo = new DevicesRepository(),
		interfacesRepo = new InterfacesRepository(),
		servicesRepo = new ServicesRepository(),
		customersRepo = new CustomersRepository();

	var deviceRoutes = new DeviceRoutes(devicesRepo, interfacesRepo),
		customerRoutes = new CustomerRoutes(customersRepo),
		serviceRoutes = new ServiceRoutes(servicesRepo);

	page('/devices', deviceRoutes.all);
	page('/devices/:device_name', function (options) {
		deviceRoutes.find(options.params.device_name);
	});
	page('/services', serviceRoutes.all);
	page('/services/:service_id', function (options) {
		// serviceRoutes.find(options.params.service_id);
		customerRoutes.find(options.params.customer_name);
	});
	page('/customers', customerRoutes.all);
	page('/customers/:customer_name', function (options) {
		customerRoutes.find(options.params.customer_name);
	});

	page('/', '/customers');
	
	$(document).ready(function () {
		page.start();
	});

})(window.views);