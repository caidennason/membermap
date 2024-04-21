class ApiDataController < ApplicationController

    require 'rubygems'
    require 'opensecrets'
    require 'net/http'
    require 'uri'


    def show

        @api_key = ENV['OPENSECRETS_API_KEY']

        Rails.logger.info("API Key: #{@api_key}")

        cid = params[:cid]
        cid2 = params[:cid2]
        Rails.logger.info("#{cid}")
        Rails.logger.info("#{cid2}")

        [2022, 2020, 2018, 2016].each do |year|
        begin
        url = URI.parse("https://www.opensecrets.org/api/?method=candIndustry&cid=#{cid}&output=json&cycle=#{year}&apikey=#{@api_key}")
        response = Net::HTTP.get(url)
        url2 = URI.parse("https://www.opensecrets.org/api/?method=candIndustry&cid=#{cid2}&output=json&cycle=#{year}&apikey=#{@api_key}")
        response2 = Net::HTTP.get(url2)

        response_json = JSON.parse(response)
        response2_json = JSON.parse(response2)

        if response.present? || response2.present? 
          render json: { response_json: response_json, response2_json: response2_json }
        return
        end
        
        rescue StandardError => e
          Rails.logger.error("Error fetching API data: #{e.message}")
        end
        end
        render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
      end
    end
