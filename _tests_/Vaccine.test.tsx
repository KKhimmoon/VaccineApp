import HospitalCatalog from "@/components/HospitalCatalog";
import {render,screen,waitFor} from "@testing-library/react"
const mockResult = {
    success:true,
    count: 3,
    "data": [
        {
          "_id": "652275910fec1f6615e163db",
          "name": "Chulalongkorn Hospital",
          "address": "1873 Rama IV Rd",
          "district": "Pathum Wan",
          "province": "Bangkok",
          "postalcode": "10330",
          "tel": "026494000",
          "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
          "__v": 0,
          "id": "652275910fec1f6615e163db"
        },
        {
          "_id": "652275eb0fec1f6615e163de",
          "name": "Rajavithi Hospital",
          "address": "2 Phaya Thai Rd, Thung Phaya Thai",
          "district": "Ratchathewi",
          "province": "Bangkok",
          "postalcode": "10400",
          "tel": "022062900",
          "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
          "__v": 0,
          "id": "652275eb0fec1f6615e163de"
        },
        {
          "_id": "652276d70fec1f6615e163e1",
          "name": "Thammasat University Hospital",
          "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
          "district": "Khlong Luang",
          "province": "Pathum Thani",
          "postalcode": "12120",
          "tel": "029269999",
          "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
          "__v": 0,
          "id": "652276d70fec1f6615e163e1"
        }]
}
describe('HospitalCatalog',()=> {
    it('should have 3 of hospital image',async () => {
        const hospitalCatalog = await HospitalCatalog({hosJson:mockResult})
        render(hospitalCatalog)
        await waitFor(
            ()=>{
                const hospitalImage = screen.queryAllByRole('img')
                expect(hospitalImage.length).toBe(3)
            }
        )
    })
})