const service = require('./math.service');

exports.add = (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const response = service.add(a, b)
    res.json({
        success: true,
        sum: response
    })
}