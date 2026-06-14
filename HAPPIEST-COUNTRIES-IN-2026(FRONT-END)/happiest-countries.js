const resultsContainerEl = document.getElementById("resultsContainer");
const inputEl = document.getElementById("inputEl");
const loaderEl = document.getElementById("loader");

const supabase_URL = "https://qyixkhfuwpmfbipiqtah.supabase.co/rest/v1/The_happiest_countries";
const supabasePublishableKey = "sb_publishable_iIi3mDXBAV7320ADfc8VXw_msFr1ehk";

const countriesCallingCasually = { //Map common casual country names and aliases to their official database names
  "russia": "Russian Federation",
  "dubai": "United Arab Emirates",
  "uae": "United Arab Emirates",
  "america": "United States",
  "usa": "United States",
  "uk":"United Kingdom",
  "england": "United Kingdom",
  "united kingdom": "United Kingdom",
  "taiwan": "Taiwan Province of China",
  "south korea": "Republic of Korea",
  "hong kong": "Hong Kong SAR of China",
  "laos": "Lao PDR",
  "palestine": "State of Palestine",
  "dr congo": "Democratic Republic of the Congo",
  "ivory coast": "Côte d'Ivoire",
  "moldova": "Republic of Moldova"
};

function afterFetchingTheResult(country_name, rank, happiness_score, flag_url, description){ //Dynamically builds and inserts the country details card (container) into the DOM
   
    resultsContainerEl.innerHTML = ""; //Clear layout from previous searches
    
    let countryAllDetailsContainerEl = document.createElement("div"); //Create main container layout
    countryAllDetailsContainerEl.classList.add("country-all-details-container");
    resultsContainerEl.appendChild(countryAllDetailsContainerEl);

    let headingEl = document.createElement("h1");
    headingEl.textContent = country_name.toUpperCase();
    headingEl.classList.add("heading-el");
    countryAllDetailsContainerEl.appendChild(headingEl);

    let horizontalLineEl = document.createElement("hr");
    countryAllDetailsContainerEl.appendChild(horizontalLineEl);

    let textAndImageContainerEl = document.createElement("div");
    textAndImageContainerEl.classList.add("text-and-image-container");
    countryAllDetailsContainerEl.appendChild(textAndImageContainerEl);

    let textContainerEl = document.createElement("div");
    textContainerEl.classList.add("text-container", "d-flex", "flex-column", "justify-content-center");
    textAndImageContainerEl.appendChild(textContainerEl);

    let rankEl = document.createElement("h2");
    rankEl.classList.add("d-flex", "flex-row");
    rankEl.innerHTML = `<span class = "rank">RANK:</span> <span class = "span-el">${rank}</span>`;
    textContainerEl.appendChild(rankEl);

    let happinessScoreEl = document.createElement("h2");
    happinessScoreEl.classList.add("d-flex", "flex-row");
    happinessScoreEl.innerHTML = `<span class = "happiness-score">HAPPINESS SCORE:</span> <span class = "span-el">${happiness_score}/10</span>`;
    textContainerEl.appendChild(happinessScoreEl);

    let imageContainerEl = document.createElement("div");
    imageContainerEl.classList.add("image-container");
    textAndImageContainerEl.appendChild(imageContainerEl);
 
    let flagEl = document.createElement("img");
    flagEl.src = flag_url;
    flagEl.classList.add("flag");
    imageContainerEl.appendChild(flagEl);

    let horizontalLineEl2 = document.createElement("hr");
    countryAllDetailsContainerEl.appendChild(horizontalLineEl2);

    let descriptionContainerEl = document.createElement("div"); //Country's description section
    descriptionContainerEl.classList.add("description-container");
    countryAllDetailsContainerEl.appendChild(descriptionContainerEl);

    let descriptionEl = document.createElement("p"); //Country's description (Reason why this country got this rank)
    descriptionEl.classList.add("description");

    if (description.startsWith(country_name)) {
        const countryLength = country_name.length;
        const countryPart = description.slice(0, countryLength); //Slicing country name to highlight the text
        const restPart = description.slice(countryLength); //Slicing the rest part of the description
        descriptionEl.innerHTML = `<strong>${countryPart}</strong>${restPart}`; //Highlight the country name
    }
    descriptionContainerEl.appendChild(descriptionEl);
}

const fetchTheResults = async(event) =>{ //Validates user input and fetches matching records from Supabase on "Enter" key press
    if(event.key === "Enter"){
        const userEnteredValue = inputEl.value.trim();
        if(userEnteredValue === ""){
            alert("Type your country name");
            return;
        }
        
        const lowerCasedUserInput = userEnteredValue.toLowerCase(); //Converted into lowercase to match the supabase details(country name)
        const countryName = countriesCallingCasually[lowerCasedUserInput] || userEnteredValue; //Either the lowercased name or the user entered name

        resultsContainerEl.innerHTML = "";
        loaderEl.classList.remove("d-none"); //Show the loading spinner
        const searchUrl = `${supabase_URL}?country_name=ilike.${encodeURIComponent(countryName)}`; //Supabase case-insensitive url to fetch the results

        try{
           const response = await fetch(searchUrl, {
          method: "GET",
          headers: {
            "apikey": supabasePublishableKey,
            "Authorization": `Bearer ${supabasePublishableKey}`,
            "Content-Type": "application/json",
             },
           });

          if(!response.ok){
            throw new Error(`HTTP Error! ${response.status}`);
          }
          
          const jsonData = await response.json();
          if(jsonData && jsonData.length > 0){
            let {country_name, rank, happiness_score, flag_url, description} = jsonData[0];
            afterFetchingTheResult(country_name, rank, happiness_score, flag_url, description); 
          } 
          else {
            resultsContainerEl.innerHTML = "<h6>Country not found. Try another one!</h6>"; //Message if the country was not found in the supabase
          }
  
  }catch (error){
    console.error("Fetch Error:", error); //Using for actual errors 
    resultsContainerEl.innerHTML = "<h6>Something went wrong. Check your connection!</h6>"; //In case of no internet connection
  }
  finally{
    loaderEl.classList.add("d-none"); //Remove the loading spinner after fetching the results
  }
  }
};

inputEl.addEventListener("keydown", fetchTheResults);