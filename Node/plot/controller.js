const fs = require('fs');
const plotNumbers = require('../data');
const filePath = '/home/kuldeep/data/Shikha/Projects/Plot_booking_app/Node/data.json'

exports.fetchPlotData = async (req, res) => {
    // try{
    res.send(plotNumbers);
    // } catch (err){
    //     console.error(err);
    // }
}

exports.plotRegistration = (req, res) => {
    const registrationData = req.body.registrationData;
    const selectedePlotId = req.body.selectedePlotId;
    // const laneId = req.body.laneId;
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        // data[laneId].map(element => {
        //     if (element.plotId === parseInt(selectedePlotId)) {
        //         element.registrationData = registrationData;
        //         elementbookedStatus = 'Yes';
        //     }
        // });
        data = JSON.parse(data);
        Object.keys(data).map(key => {
            data[key].map(element => {
                if (element.plotId === parseInt(selectedePlotId)) {
                    element.registrationData = registrationData;
                    element.bookedStatus = 'Yes';
                }
            })
            fs.writeFile(filePath, JSON.stringify(data), (err, data) => {
                if (err) throw err;
                console.log('Registration is done successfully');
                res.send();
            });
        });
    });
}