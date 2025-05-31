import Order from "../models/Order.js";
import { transporter, sendZayavka } from "../models/Mailer.js";

const getmessage = (body, order) => {
    return `
        Площадь склада (м²): ${body.squareWarehouse ? body.squareWarehouse : '--//--'}
        Высота склада (м): ${body.heightWarehouse ? body.heightWarehouse : '--//--'}
        Высота паллета (м): ${body.heightPallet ? body.heightPallet : '--//--'}
        Вес паллета (г): ${body.weightPallet ? body.weightPallet : '--//--'}
        Тип паллета: ${body.typePallet ? body.typePallet : '--//--'}
        Тип технологии: ${body.typeTech ? body.typeTech : '--//--'}
        Тип паллеты: ${body.type ? body.type : '--//--'}
        Номер телефона: ${body.userPhone ? body.userPhone : '--//--'}
        Имя: ${body.userName ? body.userName : '--//--'}
        Номер заявки: ${order._id ? order._id : '--//--'}
    `
}

export const createOrder = async (req, res, next) => {
    try {
        const body = req.body;
        const order = await Order.create(body);
        const message = getmessage(body, order);
        const zayavka = await sendZayavka({ message, subject: `Заявка рассчет заказа от ${body.userName}. Номер телефона: ${body.userPhone}. Номер заявки: ${order._id}`});
        res.status(201).send({message: 'Order created', data: order, zayavka});
    } catch (error) {
        next(error);
    }
}

export const createZayavka = async (req, res, next) => {
    try {
        const body = req.body;
        const responce = await sendZayavka({ message: body.message, subject: 'Заявка на получения информации о товаре'});
        res.status(201).send({message: 'Zayavka sent', data: responce});
    } catch (error) {
        next(error);
    }
}