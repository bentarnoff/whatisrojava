from django.shortcuts import render, render_to_response, HttpResponse
from forms import Contact
from django.core.mail import send_mail
from django.template.context_processors import csrf
from django.template import RequestContext

def intro(request):
	return render_to_response("intro.html")

def next(request):
	contact = Contact()
	return render_to_response("next.html", {'contact': contact}, context_instance=RequestContext(request))

def contact(request):
	contact = Contact()
	contacted = False
	if request.method == "POST":
		results = Contact(request.POST)
		if results.is_valid():
			subject = '[whatisrojava contact form]'
			sender = results.cleaned_data['sender']
			message = results.cleaned_data['message']

			recipients = ['ben@bentarnoff.com']

			send_mail(subject, message, sender, recipients)
			contacted = True
			return render_to_response('next.html', {'contact': contact, 'contacted': contacted}, context_instance=RequestContext(request))
	return render_to_response('next.html', {'contact': contact, 'contacted': contacted}, context_instance=RequestContext(request))
