require 'bundler/setup'
require 'test/unit'
require 'rack/test'
require "watir-webdriver"

class UserJourneyTest < Test::Unit::TestCase 
	def setup 
		@browser = Watir::Browser.new :phantomjs
	end

	def teardown 
		@browser.close
	end

	def test_search
		@browser.goto ENV['ENVIRONMENT_URI']
		sleep 5
		puts @browser.html
		assert_equal @browser.title, ""
	end
end
