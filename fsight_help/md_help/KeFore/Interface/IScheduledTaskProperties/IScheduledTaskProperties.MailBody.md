# IScheduledTaskProperties.MailBody

IScheduledTaskProperties.MailBody
-


# IScheduledTaskProperties.MailBody


## Синтаксис


MailBody : String;


## Описание


Свойство MailBody определяет тело сообщения, уведомляющего пользователя об окончании выполнения задачи.


## Комментарии


В теле сообщение могут использоваться подстановки: &[TASK_RESULT], &[TASK_NAME], &[TASK_ID], &[TASK_START], &[TASK_FINISH].


По умолчанию установлен формат: «&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]».


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
