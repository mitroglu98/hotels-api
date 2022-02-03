import{Router} from "express";
import roomController from "../controllers/room-controller";

const roomROuter: Router = Router();

roomROuter.route('/') //rooms
            .get(roomController.getAllRooms)
            .post(roomController.insertRoom);


roomROuter.route('/:hid')
            .get(roomController.getRoomsByHid);

roomROuter.route('/:hid/:no')
.get(roomController.getRoomByHidAndNo)
.put(roomController.updateRoom)
.delete(roomController.deleteRoom);


export default roomROuter;