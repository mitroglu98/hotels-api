import { Router } from 'express'; 
import hotelController from './../controllers/hotel-controller';

const router: Router = Router(); 

// router.get('/hotels', hotelController.getAllHotels);
// router.post('/hotels', hotelController.insertHotel);
router.route('/')
        .get(hotelController.getAllHotels)
        .post(hotelController.insertHotel);
    
// router.get('/hotels/:id', hotelController.getHotelByID);
// router.put('/hotels/:id', hotelController.updateHotel);
// router.delete('/hotels/:id', hotelController.deleteHotel);
router.route('/:hid')
        .get(hotelController.getHotelByID)
        .put(hotelController.updateHotel)
        .delete(hotelController.deleteHotel);

export default router;