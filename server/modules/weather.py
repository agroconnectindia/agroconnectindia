import requests

def weatherinfo():
    city = "Pune"
    api_key = "plrrhvuFQIYcvZ4c7lprYWR3VswueAbA"

    # Step 1: Get the location key
    location_url = f"http://dataservice.accuweather.com/locations/v1/cities/search?q={city}&apikey={api_key}"
    location_response = requests.get(location_url)
    location_data = location_response.json()
    location_key = location_data[0]["Key"]

    # Step 2: Get current weather using the location key
    weather_url = f"http://dataservice.accuweather.com/currentconditions/v1/{location_key}?apikey={api_key}"
    weather_response = requests.get(weather_url)
    weather_data = weather_response.json()

    # Extract temperature
    temperature = weather_data[0]["Temperature"]["Metric"]["Value"]


    # final_weather = f"Weather of {city} is {temperature} degree celsius"

    # return final_weather

    return f"{temperature}"