# IScheduledTaskProperties.MailSubject

IScheduledTaskProperties.MailSubject
-


# IScheduledTaskProperties.MailSubject


## Синтаксис


MailSubject: String;


## Описание


Свойство MailSubject определяет
 тему сообщения, уведомляющего пользователя об окончании выполнения задачи.


## Комментарии


В теме сообщение могут использоваться подстановки: &[TASK_RESULT],
 &[TASK_NAME], &[TASK_ID], &[TASK_START], &[TASK_FINISH].


По умолчанию установлен формат: «&[TASK_RESULT] - &[TASK_FINISH]
 : &[TASK_NAME]».


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
