from django import forms

class Contact(forms.Form):
	sender = forms.EmailField(label="", required=True)
	sender.widget = forms.TextInput(attrs={'placeholder':'your email address'})
	message = forms.CharField(label="", widget=forms.Textarea(attrs={'rows':'10', 'placeholder': 'your message'}), required=True)
