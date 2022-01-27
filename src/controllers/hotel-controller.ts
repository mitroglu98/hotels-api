import { Request, Response } from 'express';
import { Hotel } from '../models/hotel-model';
import hotelRepository from './../repositories/hotel-repository';

// ORM - Object Relational Mapper

const getAllHotels = async (request: Request, response:Response) => {
    hotelRepository.getAllHotels()
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

const getHotelByID = async (request: Request, response: Response) => {
    hotelRepository.getHotelByID(parseInt(request.params.hid))
        .then(data => {
            response.send(data[0]);
        }) 
        .catch(err => {
            response.status(500).send(err);
        })
}

const insertHotel = async (request: Request, response: Response) => {
    const hotel: Hotel = new Hotel(-1, request.body.name, request.body.year);
    hotelRepository.insertHotel(hotel)
        .then(data => {
            if (data.affectedRows == 1) {
                response.send({insertId: data.insertId});
            }
            else {
                response.status(500).send(data);
            }
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

const updateHotel = async (request: Request, response: Response) => {
    const hotel: Hotel = new Hotel(parseInt(request.params.hid), 
                                    request.body.name, 
                                    request.body.year);
    hotelRepository.updateHotel(hotel)
        .then(data => {
            if (data.affectedRows == 1) {
                response.send({success: true});
            }
            else {
                response.status(404).send(data);
            }
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

const deleteHotel = async (request: Request, response: Response) => {
    hotelRepository.deleteHotel(parseInt(request.params.hid))
        .then(data => {
            if (data.affectedRows == 1) {
                response.send({success: true});
            }
            else {
                response.status(404).send(data);
            }
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

export default { getAllHotels, getHotelByID, insertHotel, updateHotel, deleteHotel }