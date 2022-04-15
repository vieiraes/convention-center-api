const express = require('express');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const { request } = require('http');



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

    const { stationAddress, stationName, isActive } = request.body;

    const objeto = {
        stationId: uuidv4(),
        stationAddress: stationAddress,
        stationName: stationName,
        created_at: new Date(),
        isActive: isActive,
        lectures: []
    };

    stationsDB.push({
        stationId: objeto.stationId,
        stationName: objeto.stationName,
        stationAddress: objeto.stationAddress,
        created_at: objeto.created_at,
        isActive: objeto.isActive,
        lecturesRegistered: objeto.lectures,

    });


    return response.status(200).json({
        message: "station created",
        stationId: objeto.stationId,
        stationName: objeto.stationName,
        stationAddress: objeto.stationAddress,
        created_at: objeto.created_at,
        isActive: objeto.isActive,
        lecturesRegistered: objeto.lectures,

    });
});




// TODO: corrigir esse middleware
function verifyStationStatus(request, response, next) {


    const parametroDoRequest = request.params.isActive;

    const VarclassificaArray = function classificaArray(algo) {

        if (parametroDoRequest === true) {
            const arrayResultados = stationsDB.filter(station => station.isActive === true);
            return array = arrayResultados;




        } else if (parametroDoRequest === false) {
            const arrayResultados = stationsDB.filter(station => station.isActive === false);
            return array = arrayResultados;



        } else {
            return array = null;

        }

    };
    return VarclassificaArray


    const arrayGeral = function retorno(arrayResultados) {


        const calculosInternos = function () {
            if (parametroDoRequest === true) {
                arrayResultados = stationsDB.filter(station => station.isActive === true);
                response = arrayResultados;
                return next(arrayResultados);


            } else if (parametroDoRequest === false) {
                arrayResultados = stationsDB.filter(station => station.isActive === false);
                response = arrayResultados;
                return next(arrayResultados);


            } else {
                response = arrayResultados;
                return next(arrayResultados = null);

            }

        }
    };
    retorno(parametroDoRequest);






    return arrayGeral;

};



// const stationStatusTrue = stationsDB.filter(station => station.isActive === true);
// const stationStatusFalse = stationsDB.filter(station => station.isActive === false);


/* 
    if (stationStatusTrue.length > 0) {
 
        return response.status(200).json({
            message: "active stations",
            stationName: stationStatusTrue.stationName,
            stationAddress: stationStatusTrue.stationAddress,
            isActive: stationStatusTrue.isActive,
 
        });
    } else if (stationStatusFalse.length > 0) {
        return response.status(200).json({
            message: "inactive stations",
            stationName: stationStatusFalse.stationName,
            stationAddress: stationStatusFalse.stationAddress,
            isActive: stationStatusFalse.isActive,
 
        });
    }
 
    return next();
 */

// como fazer uma variavel dentro de uma functions ficar exposta para outras functions?
//resposta: usar o module.exports

// como uar o module.exports dentro de uma function?
//resposta: usar o return


// exemplo de um module.exports dentro de uma function
// module.exports = function() {
//     return {
//         message: "hello world"
//     }


// response = stationsFilterTrue.length > 0 ? response.status(200).json({
//     message: "stations active found",
//     stations: stationsFilterTrue
// }) : response.status(404).json({

//     message: "no stations active found",
// });




/* 

app.get('/datas', async (req: Request, res: Response)) => {
    const datas = await Accidents()
    return res.json({datas})

*/

//TODO: corrigir esse middleware
app.get("/stations/:isActive", verifyStationStatus, (request, response) => {





    //    const { isActive } = request.params;

    const objeto = arrayResultados.map(station => {
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