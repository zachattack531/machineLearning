import requests

# This function will pass your text to the machine learning model
# and return the top result with the highest confidence

response = {
    "what": "According to a Nielsen Report, 94.7 WMAS is the most popular station in the valley",
    "public": "There is a number of public stations, including 640/88.5 WFCR, 89.3 WAMC, 90.7 WTCC, 91.1 WMUA and 103.3 WXOJ",
    "classic": "WAQY (102.1 FM) is a Pionner Valley  classic rock radio station. Since the late 1980s, the station has been known as Rock 102.",
    "oldies": "There is a number of oldies stations, including 1270/100.1 WACM, 1250/97.7 WARE, 1520/100.5 WIZZ and 96.9 W245BK",
    "80s": "There is no 80s stations in the valley"
}


def classify(text):
    key = "eb889420-c2b0-11e9-b559-83943ca9801a32f14944-8e07-49a3-a0ac-4b96fd662a2a"
    url = "https://machinelearningforkids.co.uk/api/scratch/"+ key + "/classify"

    response = requests.get(url, params={ "data" : text })

    if response.ok:
        responseData = response.json()
        topMatch = responseData[0]
        return topMatch
    else:
        response.raise_for_status()
def processIntent(intent):
    key = intent["class_name"].lower()
    confidence = intent["confidence"]

    if confidence < 40:
        return classify(intent)

    if key in response:
        return response[key]
    else:
        return "I dont know that"
        

def main():
    print("Welcome to Radio Facts! I can talk to you about the Local airwaves!\n")
    print("Ask me a question or type quit\n")

    userInput = ""
    while userInput != "quit":
        userInput = input("Whats your question?").lower()
        #print(userInput)
        if userInput != "quit":
            intent = classify(userInput)
            response = processIntent(intent)
            print(response)
    print("Good day to you sir!")


main()