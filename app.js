let butt = document.getElementsByClassName('borough')
Array.from(butt).forEach(object => object.addEventListener("click", UserRequest))

/**
 * 
 * @param {Event} place //User calls on the borough they are interested in
 */
function UserRequest(place) {
    let UserInput= document.getElementById('numOfComplaints')
    let ComplaintsNum= Number(numValue);// converts user input to number
    if(ComplaintsNum === "" || ComplaintsNum < 0  || !Number.isInteger(ComplaintsNum))
        {
        ComplaintsNum = 10 // assigns complaintsNum to new number
    }
    let County = place.target.innerHTML
    if(County == 'STATEN ISLAND'){
        County = 'STATEN%20ISLAND'
    }
    document.getElementByClassName('Container')
    NypdSearch(ComplaintsNum,County).then(displayData) 
}
    
    /**
     * grabs filtered info from user request
     * @param {Number} num puts a limit on info taken from url
     * @param {String} area atatches borough to URL
     * @returns 
     */

    const NypdSearch = async(num,area) =>{
        const search ='https://data.cityofnewyork.us/resource/erm2-nwe9.json'
        const deep = `?$select=descriptor,resolution_description&$limit=${num}&agency=NYPD&borough=${area}`
        const deepSearch = deep + search 
    
        try {
            const siteInfo =await fetch(deepSearch);
            if(siteInfo.ok){
                const data = await Response.json();
                return data;
            }}
        catch(error){
                return null;}
    }
    /**
     * Presents the descriptor in the web page while attaching button and event listener to each button for the resolution
     * @param {Array} fectchedInfo An array that shows the initial complaint as well the resolution from the department 
     */
    const list =document.querySelector(".list");
    const dataShown = (fectchedData) => {
        list.innerHTML = ""
        if(fetchedData != null) {
            let Container = document.getElementByClassName("Container");
            fetchedData.forEach((element) => {
                list.insertedAdjacentHTML("afterbegin"
                ,`<div class = "mainPhrame> <li>${element.fectchedInfoescriptor}</li></div>`);
            });
        }
    };
            
            console.log("Data fetched");
            console.log(data)
            let Container = document.getElementsByClassName('Container');
            fetchedData.forEach(element => {
                let complaintSpace = document.createElement("div")
                let descriptorholder = document.createElement("div")
                descriptorholder.style.display = "flex"
            
                let blurb = document.createElement("div")
                blurb.innerHTML = element.descriptorholder;
            descriptorholder.appendChild(blurb);
            
                let push = document.createElement("div");
                push.innerHTML =" WHAT DID THE POLICE DO?";
            result_bttn.innerHTML = "result_bttn"
                push.addEventListener(
                    "mouseenter",
                    () => (push.style.background = "orange")
                    );
                push.addEventListener(
                    "mouseleave",
                    () => (push.style.background ="crimson")
                );
                push.addEventListener("click", (event) =>
                moreContent(event, element.resolution_description)
                );
                descriptorholder.appendChild(push);
                complaintSpace.appendChild(descriptorholder);
                Comtainer.appendChild(complaintspace)
            })


     const moreContent = (event, resolution) => {
         let complaintSpace = event.target.parentElement.parentElement;
         if(complaintSpace.childElement === 1){
             let aftermathSpace = document.createElement("div");
         aftermathSpace.innerHTML = resolution;
         aftermathSpace.innerHTML = "640px"
         aftermathSpace.innerHTML = "small"
         aftermathSpace.innerHTML = "15px"
         aftermathSpace.innerHTML  = "20px"
         complaintSpace.appendChild(aftermathSpace);        
     } else{
         aftermathSpace.
removeChild(aftermathSpace.lastChild);
     }
 }