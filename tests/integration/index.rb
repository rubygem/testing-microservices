# require 'bundler/setup'
# require 'test/unit'
# require 'rack/test'
# require "watir-webdriver"

# require_relative '../site'

# class GetDevicesPage < Test::Unit::TestCase 
# 	def setup 
# 		@browser = Watir::Browser.new :phantomjs
# 	end

# 	def teardown 
# 		@browser.close
# 	end

# 	def test_search
# 		@browser.goto "localhost:3000"
# 		sleep 5
# 		puts @browser.html
# 		assert_equal @browser.title, "watir - Google Search"
# 	end
# end
