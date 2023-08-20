import axios from 'axios';



async function getData(): Promise<any> {
    try {

        const datum = {
            "page": 1,
            "limit": 5,
            "category": "string"
        }

        const res = await axios.post(`http://165.227.169.25:3000/api/bets/bycategory`, datum, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log(res.data.data.docs)
        // return (res.data.data.docs);
        // setData(res.data.data.docs);
        // console.log(res.data.data.docs);
        return res;

    } catch (err) {
        console.log(err)
    }

}

export default getData;