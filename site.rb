require 'bundler/setup'
require 'json'
require 'sinatra'
require 'sass'
require 'erb'
require 'sinatra/assetpack'
require 'omniauth-authic'
require 'rack/ssl-enforcer'
require 'uri'

configure { set :server, :puma }

require 'uri'

class App < Sinatra::Application
	register Sinatra::AssetPack
	assets do
		js :application, [
			'js/*.js'
		]

		css :application, [
			'css/*.css'
		]

		js_compression :jsmin
		css_compression :sass
	end

	not_found do
	  status 404
	  erb :not_found, :layout => :error_layout
	end
	
	error do
	  erb :error, :layout => :error_layout
	end

	def initialize(app=nil)
		super(app)
	end

	get '/' do
		status 200
	end
end