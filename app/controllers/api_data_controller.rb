class ApiDataController < ApplicationController

    require 'rubygems'
    require 'opensecrets'
    require 'net/http'
    require 'uri'


    def show

        @api_key = ENV['OPENSECRETS_API_KEY']

        Rails.logger.info("API Key: #{@api_key}")

        cid = params[:cid]
        Rails.logger.info("#{cid}")
        response_data = []

        # loop through the url to get the most recent year your selected candidate ran for office -- ex: padilla didn't run in 2022, so find the last tiem he ran

        [2022, 2020, 2018, 2016].each do |year|
        begin
        url = URI.parse("https://www.opensecrets.org/api/?method=candIndustry&cid=#{cid}&output=json&cycle=#{year}&apikey=#{@api_key}")
        response = Net::HTTP.get(url)
        Rails.logger.info("#{year}")

        if response.present?
            render json: response
            return
          else
            render json: { error: 'Empty API response' }, status: :unprocessable_entity
            return
        end
        
        rescue StandardError => e
          Rails.logger.error("Error fetching API data: #{e.message}")
          # render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
        end
        end
        render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
      end
    end
