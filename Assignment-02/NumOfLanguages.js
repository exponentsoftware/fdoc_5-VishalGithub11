import axios from "axios";



var recdata;

const getData = async () => {
    const url = "https://restcountries.eu/rest/v2/all"
    const arr = [];
    const arr2 = [];
    const arr3 = [];
    const res = await axios.get(url)
    recdata = res.data
    //  console.log(recdata);
    let languageLength;
    recdata.map((item, index) => {

     
        const countryName = item.name
        const bhasha = item.languages.map((language) => language.name)
        const numOfBhasha = bhasha.length

        // console.log(countryName + " has " + numOfBhasha + " languages, i.e. " + bhasha);        
    })


 

    
   

    const getLanguage =(way)=>{
    recdata.map((item, index) => {
        const bhasha = item.languages.map((language) => language.name)
        languageLength = bhasha.filter((word) => word == way).length
        arr.push(languageLength)
        // console.log(arr);
    })
    const SumOfALanguage = arr.reduce((a,b)=> a+b)
     
        console.log("language: " + way + ", spoken in " + SumOfALanguage + " countries");
    }
    getLanguage("Spanish")







    const getAllCountries = () => {
        recdata.map((item, index) => {
            const area = item.area;
            const output = item.name + " have area of " + item.area + " sq.km"
            // console.log(output)
            arr3.push(area)
        })
        const values = arr3.sort((a,b) => b-a).slice(0,15)
        console.log(values)
    }
    getAllCountries()


 


}

getData();














// const getAllLaunguage = () => {
    //         recdata.map((item, index) => {
    //             const bhasha = item.languages.map((language) => language.name)
    //             arr2.push(bhasha)
    //         });
    //         const AllLanguage = (arr2.join(",").toString(""))
    //         console.log(AllLanguage)
    //         // const getFinal = () => {
    //         //     const final =   AllLanguage.map((item, index)=>getLanguage(item))
    //         //            console.log('final',final)
    //         //    }
    //         //    getFinal()
    //     }
        
    //    console.log(getAllLaunguage()) 