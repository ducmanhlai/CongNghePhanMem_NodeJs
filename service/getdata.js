
const { request } = require('express');
const sql = require('mssql')
class getdata{
    async test(req,res) {
        var result;
        try {
            await sql.connect('Server=localhost;Database=CNPM;User Id=ducmanh;Password=1234;Encrypt=true;TrustServerCertificate=True')
            let year= req.body.data
            result  = await sql.query`exec [dbo].[sp_ThongKeTheoThang] @nam =${year}`
        } catch (err) {
            console.log(err)
        }
        res.send(result.recordset);
    }
}
module.exports = new getdata;
