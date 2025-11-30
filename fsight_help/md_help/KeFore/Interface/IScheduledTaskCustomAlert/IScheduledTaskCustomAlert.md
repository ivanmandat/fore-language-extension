# IScheduledTaskCustomAlert

IScheduledTaskCustomAlert
-


# IScheduledTaskCustomAlert


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskCustomAlert
 предназначен для настройки выполнения задачи по наступлению настраиваемого
 события.


## Иерархия наследования


           [IScheduledTaskAlert](../IScheduledTaskAlert/IScheduledTaskAlert.htm)


           IScheduledTaskCustomAlert


## Комментарии


Для настройки расписания выполнения задачи по наступлению системного
 события используйте интерфейс [IScheduledTaskAuditAlert](../IScheduledTaskAuditAlert/IScheduledTaskAuditAlert.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EventId](IScheduledTaskCustomAlert.EventId.htm)
		 Свойство EventId определяет
		 событие, по наступлению которого будет выполнена задача.


## Свойства, унаследованные от [IScheduledTaskAlert](../IScheduledTaskAlert/IScheduledTaskAlert.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](../IScheduledTaskAlert/IScheduledTaskAlert.Type.htm)
		 Свойство Type возвращает
		 тип события.


## Методы, унаследованные от [IScheduledTaskAlert](../IScheduledTaskAlert/IScheduledTaskAlert.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckAlert](../IScheduledTaskAlert/IScheduledTaskAlert.CheckAlert.htm)
		 Метод CheckAlert выполняет
		 проверку выполнения события.


		 ![](../../Sub_Image.gif)
		 [Invoke](../IScheduledTaskAlert/IScheduledTaskAlert.Invoke.htm)
		 Метод Invoke вызывает
		 наступление события.


		 ![](../../Sub_Image.gif)
		 [Next](../IScheduledTaskAlert/IScheduledTaskAlert.Next.htm)
		 Метод Next осуществляет
		 переход к следующему событию.


		 ![](../../Sub_Image.gif)
		 [StartLook](../IScheduledTaskAlert/IScheduledTaskAlert.StartLook.htm)
		 Метод StartLook устанавливает
		 дату начала наступления события.


		 ![](../../Sub_Image.gif)
		 [StopLook](../IScheduledTaskAlert/IScheduledTaskAlert.StopLook.htm)
		 Метод StopLook устанавливает
		 дату окончания наступления события.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
