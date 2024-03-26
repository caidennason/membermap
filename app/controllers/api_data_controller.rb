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

        if response.present? && response2.present? 
          Rails.logger.info("this is the response: #{response}")
          Rails.logger.info("this is the second response: #{response2}")
            render json: response
            render json: response2
        # elsif response2.present? 
        #   Rails.logger.info("this is the second response: #{response2}")
        #   render json: response2
        else
          render json: { error: 'Empty API response' }, status: :unprocessable_entity
        end

        # if response2.present? 
        #   Rails.logger.info("this is the response: #{response2}")
        #   render json: response2
        #   return
        # else
        #   render json: { error: 'Empty API response' }, status: :unprocessable_entity
        #   return
        # end
        
        rescue StandardError => e
          Rails.logger.error("Error fetching API data: #{e.message}")
          # render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
        end
        end
        render json: { error: 'An error occurred while fetching API data' }, status: :unprocessable_entity
      end
    end
