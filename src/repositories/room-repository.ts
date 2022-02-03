import { getManager } from "typeorm";
import { Room } from "./../models/room-model";
const getAllRooms = () => {
    return getManager().query(`SELECT * FROM soba`);
}
const getRoomByHidAndNo = (hid: number, no: number) => {
    return getManager().query(`SELECT * FROM soba WHERE 
                               hid = ? AND broj = ? `, [ hid, no ]);
}
const getRoomsByHid = (hid: number) => {
    return getManager().query(`SELECT * FROM soba WHERE hid = ? `, [ hid ]);
}
const insertRoom = (room: Room) => {
    return getManager().query(`INSERT INTO soba (hid, broj, naziv) 
                                VALUES (? ,? ,?)`, 
                                [ room.hid, room.no, room.roomType ]);
}
const updateRoom = (room: Room) => {
    return getManager().query(`UPDATE soba 
                                SET naziv = ? 
                                WHERE hid = ? AND no = ?`, 
                                [ room.roomType, room.hid, room.no ]);
}
const deleteRoom = (hid: number, no: number) => {
    return getManager().query(`DELETE FROM soba WHERE hid = ? AND broj = ?`, 
                                [ hid, no ]);
}
export default { getAllRooms,
                 getRoomByHidAndNo,
                 getRoomsByHid, 
                 insertRoom, 
                 updateRoom, 
                 deleteRoom  }
