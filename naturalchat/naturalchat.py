import nltk
import numpy as numpy
import random
import string
import sklearn
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

f = open('info.txt', 'r')
raw = f.read()

sentence_tokens = nltk.sent_tokenize(raw)

lemmer = nltk.stem.WordNetLemmatizer()

def LemTokens(tokens):
    return[lemmer.lemmatize(token) for token in tokens]

remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))

GREETING_INPUT = ("hello", "hi", "hey", "wassup?" "sup")
GREETING_RESPONSE = ("Hi! I'm sorry, you were saying something...", "Hey! I'm sorry, you were saying something...", "Hello! I'm sorry, you were saying something...", )
def greeting(sentence):
    sentence = re.sub(r'[^\w\s]', '', sentence)
    for word in sentence.split():
        if word.lower() in GREETING_INPUT:
            return random.choice(GREETING_RESPONSE)\

def response(userInput):
    sentence_tokens.append(userInput)
    TfidVec = TfidfVectorizer(tokenizer=LemNormalize)
    tfidf = TfidVec.fit_transform(sentence_tokens)

    vals = cosine_similarity(tfidf[-1], tfidf)
    
    flat = vals.flatten()

    idx = flat.argsort()[-2]

    flat.sort()

    best_response = flat[-2]

    if best_response == 0:
        return "I don't know that"
    else:
        return sentence_tokens[idx]

print('Welcome to Dial Bot! I can show you whats on the airwaves today! If you want to quit type "quit".')
while True:
    userInput = input("You: ").lower()
    print("DialBot: ", end="")
    if userInput != "quit":
        if greeting(userInput) != None:
            print(greeting(userInput))
        else:
            print(response(userInput))
            sentence_tokens.remove(userInput)
    else:
        print("Good Day To You Sir!")
        break
