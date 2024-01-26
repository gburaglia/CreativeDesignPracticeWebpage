
// script.js
const animalData = {
    "Amur Leopards": "Habitat loss and poaching",
    "Sumatran Orangutans": "Deforestation and illegal pet trade",
    "Vaquitas": "Bycatch in illegal fishing gear",
    "Javan Rhinos": "Habitat loss",
    "Mountain Gorillas": "Habitat loss, poaching, and political instability",
    "Saolas": "Hunting and habitat loss",
    "Loggerhead Sea Turtles": "Coastal development, pollution, and climate change impact",
    "Snow Leopards": "Poaching and habitat fragmentation",
    "Philippine Eagles": "Habitat loss and hunting",
    "Red Wolves": "Habitat loss and hybridization",
    "Bengal Tigers": "Habitat loss, poaching, and illegal trade",
    "African Elephants": "Poaching for ivory and habitat loss",
    "Leatherback Sea Turtles": "Climate change, egg poaching, and fishing bycatch",
    "Mexican Wolves": "Habitat loss and human-wolf conflicts",
    "Iberian Lynxes": "Habitat loss and decline of prey species",
    "Northern White Rhinoceroses": "Poaching for rhino horns and small population size",
    "Hawaiian Monk Seals": "Habitat loss, entanglement in fishing gear, and disease",
    "Blue Whales": "Ship strikes, climate change, and underwater noise pollution",
    "Hawksbill Turtles": "Illegal trade of their shells and habitat loss",
    "Sumatran Tigers": "Deforestation and poaching",
    "Bornean Orangutans": "Palm oil plantation expansion and illegal pet trade",
    "Western Lowland Gorillas": "Poaching, disease, and habitat loss",
    "Asian Elephants": "Poaching, habitat loss, and human-wildlife conflict",
    "Kemp's Ridley Sea Turtles": "Egg poaching, fishing bycatch, and habitat loss",
    "Amur Tigers": "Poaching and habitat fragmentation",
    "North Atlantic Right Whales": "Ship strikes and entanglement in fishing gear",
    "Yangtze Finless Porpoises": "Habitat degradation and bycatch in illegal fishing gear",
    "Black Rhinos": "Poaching for their horns and habitat loss",
    "Mexican Spider Monkeys": "Habitat loss and illegal pet trade",
    "Cross River Gorillas": "Habitat loss and poaching",
    "Indochinese Tigers": "Poaching and habitat loss",
    "Sumatran Elephants": "Habitat loss and human-wildlife conflict",
    "Philippine Tarsiers": "Habitat loss and illegal pet trade",
    "Mediterranean Monk Seals": "Habitat degradation, pollution, and overfishing",
    "Hawksbill Turtles": "Illegal trade of their shells and habitat loss",
    "Western Chimpanzees": "Habitat loss, poaching, and disease",
    "Mexican Long-nosed Bats": "Habitat loss, pesticides, and disturbance",
    "White-rumped Vultures": "Poisoning from veterinary drugs in livestock carcasses",
    "Pygmy Three-toed Sloths": "Habitat loss and illegal pet trade",
    "North Atlantic Right Whales": "Ship strikes and entanglement in fishing gear",
    "Yangtze Finless Porpoises": "Habitat degradation and bycatch in illegal fishing gear",
    "Black Rhinos": "Poaching for their horns and habitat loss",
    "Mexican Spider Monkeys": "Habitat loss and illegal pet trade",
    "Cross River Gorillas": "Habitat loss and poaching",
    "Indochinese Tigers": "Poaching and habitat loss",
    "Sumatran Elephants": "Habitat loss and human-wildlife conflict",
    "Philippine Tarsiers": "Habitat loss and illegal pet trade",
    "Mediterranean Monk Seals": "Habitat degradation, pollution, and overfishing",
    "Vaquitas": "Bycatch in illegal fishing gear",
    "Javan Rhinos": "Habitat loss",
    "Spoon-billed Sandpipers": "Habitat loss and climate change",
    "Western Swamp Tortoises": "Habitat loss and changes in water levels",
    "Kakapos (Night Parrots)": "Predation by introduced species and habitat loss",
    "Northern Bald Ibises": "Habitat loss and hunting",
    "Pinta Island Tortoises": "Extinct due to overharvesting and invasive species",
    "Brazilian Mergansers": "Habitat destruction and pollution",
    "Indus River Dolphins": "Water pollution and dam construction",
    "Siamese Crocodiles": "Habitat loss and hunting",
    "Gharials": "Habitat loss and fishing-related mortality",
    "Chinese Pangolins": "Poaching for scales and habitat loss",
    "Green Sawfishes": "Overfishing and habitat loss",
    "Angel Sharks": "Overfishing and habitat degradation",
    "Indian Elephants": "Poaching, habitat loss, and human-wildlife conflict",
    "Red-crowned Cranes": "Habitat loss and disturbance",
    "Ethiopian Wolves": "Habitat loss and diseases transmitted by domestic dogs",
    "Dholes (Asian Wild Dogs)": "Habitat loss, persecution, and disease",
    "Sunda Pangolins": "Poaching for scales and habitat loss",
    "Grevy's Zebras": "Habitat loss and competition with livestock",
    "Loggerhead Sea Turtles": "Coastal development, pollution, and climate change impact",
    "European Minks": "Habitat loss and competition with American minks",
    "Snow Leopards": "Poaching and habitat fragmentation",
    "Asiatic Lions": "Habitat loss, human-wildlife conflict, and poaching",
    "Bornean Pygmy Elephants": "Habitat loss due to logging and palm oil plantations",
    "Staghorn Corals": "Coral bleaching and ocean acidification",
    "Orangutans": "Habitat loss due to logging, palm oil, and illegal trade",
    "Golden Poison Dart Frogs": "Habitat loss and pet trade",
    "Galápagos Penguins": "Climate change and overfishing",
}

const plantData = {
    "Florida Torreyas": "Habitat loss, climate change, and disease",
    "Western Prairie Fringed Orchids": "Habitat loss and agriculture",
    "Eastern Prairie Fringed Orchids": "Habitat loss and agriculture",
    "Franklin Trees": "Habitat loss and logging",
    "Georgia Asters": "Habitat loss and urbanization",
    "Euphorbia Telephioides": "Habitat loss and urbanization",
    "Texas Wild Rice": "Habitat loss and water management",
    "Georgia Camphorweeds": "Habitat loss and agriculture",
    "Short's Bladderpods": "Habitat loss and agriculture",
    "Saint Croix Skiffias": "Habitat loss and water pollution",
    "Water Marigolds": "Habitat loss and water pollution",
    "Brazil Nut Trees": "Deforestation and logging",
    "Kentucky Coffee Trees": "Habitat loss and logging",
    "Pitcher Plants": "Habitat loss and illegal collection",
    "Delmarva Peninsula Fox Squirrels": "Habitat loss and urbanization",
    "Hawaii Palms": "Habitat loss and invasive species",
    "Oval-leafed Milkweeds": "Habitat loss and agriculture",
    "Catskill Witch Hazels": "Habitat loss and logging",
    "Santa Cruz Cypresses": "Habitat loss and invasive species",
    "Carolina Heelsplitters": "Habitat loss and water pollution",
    "Poweshiek Skipperlings": "Habitat loss and agriculture",
    "Northern Riffleshells": "Habitat loss and water pollution",
    "Illinois Cave Amphipods": "Habitat loss and pollution",
    "California Lilacs": "Habitat loss and urbanization",
    "Yadkin River Goldenrods": "Habitat loss and urbanization",
    "Yellowstone Sand Verbenas": "Habitat loss and invasive species",
  };

  const environmentData = {
    "rainforest": "Example: Amazon Rainforest (South America)",
    "desert": "Example: Sahara Desert (Africa)",
    "ocean": "Example: Pacific Ocean",
    "savannah": "Example: Serengeti Plains (Africa)",
    "tundra": "Example: Arctic Tundra (North America, Europe, Asia)",
    "grassland": "Example: Pampas (South America)",
    "taiga": "Example: Boreal Forest (North America, Europe, Asia)",
    "coral reef": "Example: Great Barrier Reef (Australia)",
    "alpine meadow": "Example: Swiss Alps (Europe)",
    "wetland": "Example: Everglades (United States)",
    "estuary": "Example: Chesapeake Bay (United States)",
    "mangrove swamp": "Example: Sundarbans (India, Bangladesh)",
    "chaparral": "Example: California Chaparral (United States)",
    "mountain range": "Example: Himalayas (Asia)",
    "polar ice cap": "Example: Antarctica",
    "arctic tundra": "Example: Arctic National Wildlife Refuge (Alaska, United States)",
    "boreal forest": "Example: Canadian Boreal Forest (Canada)",
    "freshwater lake": "Example: Lake Baikal (Russia)",
    "cave": "Example: Mammoth Cave (United States)",
    "urban jungle": "Example: New York City (United States)",
    "agricultural field": "Example: Midwest Corn Belt (United States)",
    "subtropical forest": "Example: Daintree Rainforest (Australia)",
    "steppe": "Example: Mongolian Steppe (Mongolia)",
    "temperate deciduous forest": "Example: Black Forest (Germany)",
    "volcanic island": "Example: Iceland",
    "prairie": "Example: American Prairie Reserve (United States)",
    "salt marsh": "Example: Cape Cod Salt Marsh (United States)",
    "bog": "Example: Blanket Bog (Ireland)",
    "sand dune": "Example: Namib Desert Dunes (Namibia)",
    "fen": "Example: Red Moss of Netherley (Scotland)",
    "hydrothermal vent": "Example: Lost City Hydrothermal Field (Atlantic Ocean)",
    "lagoon": "Example: Venice Lagoon (Italy)",
    "heathland": "Example: Dorset Heaths (United Kingdom)",
    "lava tube": "Example: Thurston Lava Tube (Hawaii, United States)",
    "mudflat": "Example: Wadden Sea Mudflats (Netherlands, Germany, Denmark)",
    "floodplain": "Example: Mississippi River Floodplain (United States)",
    "pampa": "Example: Argentine Pampas (Argentina)",
    "fjord": "Example: Milford Sound (New Zealand)",
    "kelp forest": "Example: California Kelp Forest (United States)",
    "monsoon forest": "Example: Sundarbans (India, Bangladesh)",
    "savanna": "Example: African Savanna"  
  };
  
function randomizeWordsAndImages() {
    randomizedWords = ["randomizedAnimal", "randomizedPlant", "randomizedEnvironment"]
    const dataDict = {
        "randomizedAnimal": animalData, 
        "randomizedPlant": plantData,
        "randomizedEnvironment": environmentData,
    }

    randomizedWords.forEach(function(randomizedWord)
    {
        const randomElement = document.getElementById(randomizedWord);
        const randomArray = Object.entries(dataDict[randomizedWord]);
        //console.log(randomArray);
        // Randomly select an item
        const randomIndex = Math.floor(Math.random() * randomArray.length);
        const randomEntry = randomArray[randomIndex];
        const randomName = randomEntry[0];
        const randomReasonForRisk = randomName[1];
        randomElement.textContent = randomName;
        searchImages(randomName, randomizedWord +'Image');
    });
    
}
function searchImages(query,imageElement){
    const apiKey = 'AIzaSyDsLHNXn0J4FSvehCc6LVkJPG0FlY94enI';
    const cx = '91f1d802f0741445b';
    //const query = 'cars';

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}&searchType=image`;
    const imageSearchElement = document.getElementById(imageElement);

    // Make a GET request to the API
    fetch(apiUrl) 
        .then(response => response.json())
        .then(data => {
        // Process the data here
        const firstItemLink = data.items && data.items.length > 0 ? data.items[0].link : null;
        console.log(firstItemLink);
        imageSearchElement.innerHTML = `<image class="displayImg" src="${firstItemLink}"</image>`
        })
        .catch(error => console.error('Error fetching data:', error));
}
 
