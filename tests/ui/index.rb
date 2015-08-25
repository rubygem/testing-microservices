require 'bundler/setup'
require 'test/unit'
require 'rack/test'

require_relative '../../site'

class IndexPage < Test::Unit::TestCase

	def test_returns_ok
		browser = Rack::Test::Session.new(Rack::MockSession.new(App.new))
    	browser.get('/')

    	puts browser.last_response.errors

    	assert browser.last_response.ok?, "expected OK but was #{browser.last_response.status}"
	end
end
