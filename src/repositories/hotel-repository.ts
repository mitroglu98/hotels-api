import { getManager } from "typeorm";
import { Hotel } from "./../models/hotel-model";

const getAllHotels = () => {
    return getManager().query("SELECT * FROM hotel");
}

const getHotelByID = (hid: number) => {
    return getManager().query(`SELECT * FROM hotel WHERE hid = ?`, [ hid ]);
}

const insertHotel = (hotel: Hotel) => {
    return getManager().query(`INSERT INTO hotel (naziv, godina_gradnje) 
                                VALUES (?, ?)`, [ hotel.name, hotel.year ]);
}

const updateHotel = (hotel: Hotel) => {
    return getManager().query(`UPDATE hotel SET naziv = ?, godina_gradnje = ?
                                WHERE hid = ?`, [ hotel.name, hotel.year, hotel.hid ]);
}

const deleteHotel = (hid: number) => {
    return getManager().query(`DELETE FROM hotel WHERE hid = ?`, [ hid ]);
}

export default { getAllHotels, getHotelByID, insertHotel, updateHotel, deleteHotel }