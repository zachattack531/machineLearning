prompts = {
    "what:" "what is the most popular station?",
    "public:" "Is there a public radio station?"
    "classic:" "Is there a classic rock station"
    
}

def processInput(userInput):
    pass


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