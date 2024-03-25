require_relative "boot"

require "rails/all"

require 'dotenv/load'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Membermap
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore, key: '_membermap_session'

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001' # Replace with the actual URL of your frontend
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: true # This is important for cookies and session persistence
      end
    end

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end

