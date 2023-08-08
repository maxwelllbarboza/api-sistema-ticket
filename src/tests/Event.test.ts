import  request  from "supertest";
import { App } from "../app";

const app = new App().app

describe('Event test', ()=> {
    it('/post Event', async ()=> {
        const event = {
            title: 'Jorge e Mateus',
            price: [{sector: 'pista', amount: '20'}],
            description: 'Evento descrição',
            city: 'Belo Horizonte',
            location: {
                latitude: '-19.8658619',
                longitude: '-43.9737064'
            },

            coupons: [],
            date: new Date(),
            participants: [],        

        };
        //const response = await request(app).post('/events').attach('banner');
    });
})

