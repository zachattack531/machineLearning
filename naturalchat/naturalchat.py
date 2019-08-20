import nltk
import numpy as numpy
import random
import string
import sklearn
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

f = open('info.txt', 'r')
raw = f.read().lower()

sentence_tokens = nltk.sent_tokenize(raw)

lemmer = nltk.stem.WordNetLemmatizer

def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]

remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))

GREETING_INPUT = ("hello", "hi", "hey", "wassup?" "sup")
GREETING_RESPONSE = ("Hi! I'm sorry, you were saying something...", "Hey! I'm sorry, you were saying something...", "Hello! I'm sorry, you were saying something...", )
def greeting(sentence):
    for word in sentence.split():
        if word.lower() in GREETING_INPUT:
            return random.choice(GREETING_RESPONSE)

print(greeting("Hi"))