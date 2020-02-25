class TicketsController < ApplicationController

    def index
        tickets = Ticket.all
        render json: tickets, :except => [:created_at, :updated_at]
    end

end
