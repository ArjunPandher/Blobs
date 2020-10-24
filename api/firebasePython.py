from firebase import firebase

fb = firebase.FirebaseApplication("https://divhacks2020.firebaseio.com/", None)
data = {
    'Stuff': "test"
}

result = fb.post('/divhacks2020/test', data)
print(result)
