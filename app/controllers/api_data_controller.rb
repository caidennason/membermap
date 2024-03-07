class ApiDataController < ApplicationController

    require 'rubygems'
    require 'opensecrets'
    require 'net/http'
    require 'uri'


    def show

        @api_key = ENV['OPENSECRETS_API_KEY']

        Rails.logger.info("API Key: #{@api_key}")

        cid = params[:cid]

        url = URI.parse("https://www.opensecrets.org/api/?method=candIndustry&cid=#{cid}&output=json&cycle=2020&apikey=#{@api_key}")

        response = Net::HTTP.get(url)

        if response.present?
            render json: response
          else
            render json: { error: 'Empty API response' }, status: :unprocessable_entity
          end
        rescue StandardError => e
          Rails.logger.error("Error fetching API data: #{e.message}")
          render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
        end

    end
