# IScheduledTaskProperties.MailTargetType

IScheduledTaskProperties.MailTargetType
-


# IScheduledTaskProperties.MailTargetType


## Синтаксис


MailTargetType: [ScheduledTaskMailTarget](../../Enums/ScheduledTaskMailTarget.htm);


## Описание


Свойство MailTargetType определяет вид электронной почты, на который будет отправлен результат выполнения задачи.


## Комментарии


Данное свойство актуально, если в коллекцию [MailRecipients](IScheduledTaskProperties.MailRecipients.htm) добавлены пользователи репозитория. В качестве значения свойства MailTargetType можно указать один или несколько видов почты, используя значения перечислимого типа [ScheduledTaskMailTarget](../../Enums/ScheduledTaskMailTarget.htm). При указании нескольких видов элементы перечисления разделяются ключевым словом [Or](Fore.chm::/07_Operations/Logical_operations.htm). Адреса электронной почты, вид которых указан в данном свойстве, должны быть определены в [профиле](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.Profile.htm) пользователя.


## Пример


Пример использования приведен в описании свойства [MailRecipients](IScheduledTaskProperties.MailRecipients.htm).


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
