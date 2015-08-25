(function () {
	
	function getTemplate(templateName, callback) {
		$.get('/views/' + templateName +'.html', function (template) {
			var compiledTemplate = _.template(template);
			callback(compiledTemplate)
		});
	}
	
	window.views = {
		render: function (templateName, data, callback) {
			this.renderPartial('#main-container', templateName, data, callback);
		},
		renderPartial: function (selector, templateName, data, callback) {
			getTemplate(templateName, function (template) {
				var html = template(data);
				$(selector).html(html);
				if(typeof callback == "function") callback();
			});
		},
		appendPartial: function (selector, templateName, data, callback) {
			getTemplate(templateName, function (template) {
				var html = template(data);
				$(selector).append(html);
				if(typeof callback == "function") callback();
			});
		}
	};
})();