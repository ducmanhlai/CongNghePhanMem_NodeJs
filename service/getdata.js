
const { request } = require('express');
const sql = require('mssql')
class getdata{
    async getyear(req,res) {
        var result;
        try {
            await sql.connect('Server=localhost;Database=CNPM;User Id=ducmanh;Password=1234;Encrypt=false;TrustServerCertificate=True')
            let year= req.body.data
            result  = await sql.query`exec [dbo].[sp_ThongKeTheoNam] @nam =${year}`
        } catch (err) {
            console.log(err)
        }
        res.send(result.recordset);
    }
    async getmonth(req,res){
        var result;
        try {
            await sql.connect('Server=localhost;Database=CNPM;User Id=ducmanh;Password=1234;Encrypt=false;TrustServerCertificate=True')
            let year= req.body.year
            let month= req.body.month
            result  = await sql.query`exec [dbo].[sp_ThongKeTheoThang] @nam =${year}, @thang=${month}`
        } catch (err) {
            console.log(err)
        }
        res.send(result.recordset);
    }
    async countTk(req,res){
        var result;
        try {
            await sql.connect('Server=localhost;Database=CNPM;User Id=ducmanh;Password=1234;Encrypt=false;TrustServerCertificate=True')
            
            result  = await sql.query`select count(*) as tk from taikhoan`
        } catch (err) {
            console.log(err)
        }
        res.send(result.recordset);
    }
    async countBv(req,res){
        var result;
        try {
            await sql.connect('Server=localhost;Database=CNPM;User Id=ducmanh;Password=1234;Encrypt=false;TrustServerCertificate=True')
            
            result  = await sql.query`select count(*) as bv from baiviet where tinhtrang=0`
        } catch (err) {
            console.log(err)
        }
        res.send(result.recordset);
    }
}
module.exports = new getdata;
