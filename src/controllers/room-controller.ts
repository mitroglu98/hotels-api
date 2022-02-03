import { Request, Response } from 'express'; 
import { Room } from './../models/room-model';
import roomRepository from './../repositories/room-repository';
​
const getAllRooms = async (request: Request, response:Response) => {
    roomRepository.getAllRooms()
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}
​
const getRoomByHidAndNo = async (request: Request, response:Response) => {
    const hid: number = parseInt(request.params.hid);
    const no: number = parseInt(request.params.no);
    roomRepository.getRoomByHidAndNo(hid, no)
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}
​
const getRoomsByHid = async (request: Request, response:Response) => {
    const hid: number = parseInt(request.params.hid);
    roomRepository.getRoomsByHid(hid)
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}
​
const insertRoom = async (request: Request, response: Response) => {
    const room: Room = new Room(request.body.hid, request.body.no, request.body.roomType);
    roomRepository.insertRoom(room)
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
​
const updateRoom = async (request: Request, response: Response) => {
    const room: Room = new Room(parseInt(request.params.hid), 
                                parseInt(request.params.no), 
                                    request.body.roomType);
    roomRepository.updateRoom(room)
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
​
const deleteRoom = async (request: Request, response: Response) => {
    const hid: number = parseInt(request.params.hid);
    const no: number = parseInt(request.params.no);
    roomRepository.deleteRoom(hid, no)
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
​
export default {    getAllRooms,
                    getRoomByHidAndNo,
                    getRoomsByHid, 
                    insertRoom, 
                    updateRoom, 
                    deleteRoom  }