import re

prompts = {
    "what": "what is the most popular station?",
    "public": "Is there a public radio station?",
    "classic": "Is there a classic rock station?",
    "oldies": "Is there a oldies station?",
    "80s": "Is there a 80s station?",
    "empty": "empty"
}
response = {
     "what": "According to a Nielsen Report, 94.7 WMAS is the most popular station in the valley",
    "public": "There is a number of public stations, including 640/88.5 WFCR, 89.3 WAMC, 90.7 WTCC, 91.1 WMUA and 103.3 WXOJ",
    "classic": "WAQY (102.1 FM) is a Pionner Valley  classic rock radio station. Since the late 1980s, the station has been known as Rock 102.",
    "oldies": "There is a number of oldies stations, including 1270/100.1 WACM, 1250/97.7 WARE, 1520/100.5 WIZZ and 96.9 W245BK",
    "80s": "There is no 80s stations in the valley"
}

def processInput(userInput):
    userInput = re.sub(r'[^\w\s]', '', userInput)

    words = userInput.split(" ")
    matchingKeys = []

    for word in words:
        if word in response.keys():
            matchingKeys.append(word)
    if len(matchingKeys) == 0:
        return "I don't know that"
    elif len(matchingKeys) == 1:
        return response[matchingKeys[0]]
    else:
        print("I don't understand, did you mean... ")
        index = 1

        for key in matchingKeys:
            print(str(index) + ":" + prompts[key])
            index += 1    
        valid = False

        while not valid:
            selected = int(input("#: "))

            if selected <= len(matchingKeys) and selected > 0:
                valid = True
            else:
                print("Please enter one of the above")
        return response[matchingKeys[selected-1]]

def main():
    print("Welcome to Radio Facts! I can talk to you about the Local airwaves!\n")
    print("Ask me a question or type quit\n")

    userInput = ""
    while userInput != "quit":
        userInput = input("Whats your question?").lower()
        #print(userInput)
        if userInput != "quit":
            response = processInput(userInput)
            print(response)
    print("Good day to you sir!")
main()