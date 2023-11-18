let searchInputEle = document.getElementById("searchInput");
let searchResultsEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner")


function createAndAppendSearchResult(result){
    //creating result item
    let {title, link, description} = result;

    let resultItemEle =  document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultsEle.appendChild(resultItemEle);

    
    

    // creating title element

    let resultTitleEle = document.createElement("a");
    resultTitleEle.classList.add("result-title");
    resultTitleEle.textContent = title;
    resultTitleEle.href = link;
    resultTitleEle.target = "_blank";
    resultItemEle.appendChild(resultTitleEle);

        // creating break element
    let titleBreak = document.createElement("br");
    resultItemEle.appendChild(titleBreak); 

    //creating url element

    let urlEle = document.createElement("a");
    urlEle.classList.add("result-url");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    resultItemEle.appendChild(urlEle);
    //creating break element

    let linkBreakEl = document.createElement("br");
    resultItemEle.appendChild(linkBreakEl);
    //creating description element
    let descriptionEle = document.createElement("p");
    descriptionEle.classList.add(link-description);
    descriptionEle.textContent = description;
    resultItemEle.appendChild(descriptionEle);

}
function displayResults(searchResults){
    spinnerEle.classList.toggle("d-none");
    // let result = searchResults[0];
    for(let result of searchResults){
        createAndAppendSearchResult(result);
    }
    createAndAppendSearchResult(result);
}
function searchWiki(event){
        if(event.key==="Enter"){
            //aa class name already existance lo vunte remove avthundi. lekapothe add avthundi

            spinnerEle.classList.toggle("d-none");

            //manam yeppudaither enter key press chesthaamo appudu 
            // searchinput yokka value ni return chesela manam oka command ni rayali.



            //very very important command to refresh the content

            searchResultsEle.textContent = "";
            
            let searchInput= searchInputEle.value;
            let url = "https://apis.ccbp.in/wiki-search?search="+ searchInput;

            //req configuration
            let options = {
                method:"GET" //since we are getting info

            }
            fetch(url,options)
            .then(function(response){
                return response.json();

            })
            .then(function(jsonData){
                // console.log(jsonData)   

                //this is called object destructuring
                let {search_results}= jsonData;
                displayResults(search_results);


            })
            // console.log(searchInput);
        }

        //ippativaraku user em search cheyyali ani anukuntunnado manaki baga telisindi.
        // ippudu danni http seaver ki request the pettali.
        // so manaki oka url kavali.
        // https://apis.ccbp.in/wiki-search?search=Rahul

}

searchInputEle.addEventListener("keydown",searchWiki)


// now let us add a loading spinner to this page
//very interesting right !
//add spinner statically in html and hide it
//display spinner dynamically just before fetching an information
//hide spinner dynamically just before displaying the results