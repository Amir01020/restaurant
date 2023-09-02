from django import forms

class MessageForm(forms.Form):
    name = forms.CharField(max_length=100)
    phone = forms.CharField(max_length=20)
    password = forms.CharField(widget=forms.PasswordInput)