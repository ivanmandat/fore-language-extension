# IScheduledTaskProperties.SendMail

IScheduledTaskProperties.SendMail
-


# IScheduledTaskProperties.SendMail


## Синтаксис


SendMail: Boolean;


## Описание


Свойство SendMail определяет,
 будут ли отправляться по электронной почте уведомления о результатах выполнения
 задачи.


## Комментарии


Допустимые значения:


	- True. Отправлять уведомления
	 по электронной почте. Список адресатов задается в свойстве [IScheduledTaskProperties.MailRecipients](IScheduledTaskProperties.MailRecipients.htm)
	 или может [формироваться
	 динамически](IScheduledTaskProperties.UseDynamicMailList.htm) в соответствии с каким-либо собственным алгоритмом;


	- False. Значение по умолчанию.
	 Не отправлять уведомления по электронной почте.


## Пример


Пример использования приведен в описании свойства [IScheduledTaskProperties.UseDynamicMailList](IScheduledTaskProperties.UseDynamicMailList.htm).


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
