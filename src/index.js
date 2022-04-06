const express = require('express');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');



const app = express();
// Create a new express application instance


app.use(express.json());
//middleware do express para aceitar json


const lecturesDB = [];

const presenterDB = [];

const stationsDB = [];

app.post("/presenter", (request, response) => {

    const { name } = request.body;

    const objeto = {
        presenterId: crypto.randomBytes(8).toString('HEX'),
        name: name,
        created_at: new Date(),
    }

    presenterDB.push({
        presenterId: objeto.presenterId,
        name: objeto.name,
        created_at: objeto.created_at,


    });

    return response.status(200).json({
        message: "presenter created",
        name: objeto.name,
        presenterId: objeto.presenterId,
        created_at: objeto.created_at,

    });


});

app.get("/presenter", (request, response) => {

    const { presenter } = request;



    const objeto = presenterDB.map(presenter => {
        return {
            presenterId: presenter.presenterId,
            name: presenter.name,
            created_at: presenter.created_at, //vou retonar mas nao vou exibir, somente para ordenar por decrescente
        };
    });

    return response.status(200).json({

        length: objeto.length,
        items: objeto.sort((a, b) => { return b.created_at - a.created_at })

    });

});

app.post("/register-station", (request, response) => {

    const { stationAddress, isActive } = request.body;

    const objeto = {
        stationId: uuidv4(),
        stationAddress: stationAddress,
        created_at: new Date(),
        isActive: isActive,
        lectures: []
    };

    stationsDB.push({
        stationId: objeto.stationId,
        stationAddress: objeto.stationAddress,
        created_at: objeto.created_at,
        isActive: objeto.isActive,
        lecturesRegistered: objeto.lectures,

    });


    return response.status(200).json({
        message: "station created",
        stationId: objeto.stationId,
        stationAddress: objeto.stationAddress,
        created_at: objeto.created_at,
        isActive: objeto.isActive,
        lecturesRegistered: objeto.lectures,

    });
});




function IsStationActive(stationId) {

    const station = stationsDB.find(station => station.stationId === stationId);

    if (station.isActive === true) {
        return true;
    } else {
        return false;
    }
}





app.get("/stations/:isActive", IsStationActive,(request, response) => {

    const { station } = request;
    const { isActive } = request.params;



    const objeto = stationsDB.map(station => {
        return {
            stationId: station.stationId,
            stationAddress: station.stationAddress,
            isActive: station.isActive

        };

    });

    return response.status(200).json({
        stationId: objeto.stationId,
        stationAddress: objeto.stationAddress,
        isActive: objeto.isActive
    });
});
//final




//uma Lecture poderia ser criada sem um presenter?
// app.post("/lecture/:presenter", (request, response) => {

//     const { presenter } = request.params;
//     const { lectureName, lectureTheme, isStarted, countdown } = request.body;


//     const objetoLecture = {
//         lectureId: crypto



// }


// });



// PORTA DO APP
app.listen(3333);