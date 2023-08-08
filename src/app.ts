import express, { Application } from "express"
import { connect } from "./infra/database";
import { EventRoutes } from "./routes/event.routes";
import { errorMiddleware } from "./middlewares/erro.middleware";


class App{
    public app: Application;
    private eventRoutes = new EventRoutes()
    
    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }  
    
    private initializeRoutes(){
        this.app.use('/events', this.eventRoutes.router)
    }

    private interceptionError(){
        this.app.use(errorMiddleware);
    }

    private middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true})); //text=Hello%20Word
    }

    listen(){
        this.app.listen(3333, ()=> console.log("Server is running."))
    }
}

export{App};