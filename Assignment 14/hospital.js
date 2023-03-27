let hospitals = [
    {
      "id": 1,
      "name": "Hospital A",
      "location": "Delhi",
      "noOfBeds": 450,
      "availability": "Yes"
    },
    {
      "id": 2,
      "name": "Hospital B",
      "location": "Pune",
      "noOfBeds": 150,
      "availability": "No"
    },
    {
      "id": 3,
      "name": "Hospital C",
      "location": "Pune",
      "noOfBeds": 350,
      "availability": "Yes"
    }
  ];
  
  // Filter hospitals by number of beds > 200
  let filteredByBeds = hospitals.filter(hospital => hospital.noOfBeds > 200);
  
  // Filter hospitals by availability of beds = Yes
  let filteredByAvailability = hospitals.filter(hospital => hospital.availability === "Yes");
  
  // Filter hospitals by location = Pune
  let filteredByLocation = hospitals.filter(hospital => hospital.location === "Pune");
  
  console.log(filteredByBeds);
  console.log(filteredByAvailability);
  console.log(filteredByLocation);
  