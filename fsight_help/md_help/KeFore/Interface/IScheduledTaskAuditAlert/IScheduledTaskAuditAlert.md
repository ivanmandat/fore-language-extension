# IScheduledTaskAuditAlert

IScheduledTaskAuditAlert
-


# IScheduledTaskAuditAlert


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskAuditAlert
 предназначен для настройки расписания выполнения задачи по наступлению
 системного события.


## Иерархия наследования


           [IScheduledTaskAlert](../IScheduledTaskAlert/IScheduledTaskAlert.htm)


           IScheduledTaskAuditAlert


## Комментарии


Для настройки расписания выполнения задачи по наступлению настраиваемого
 события используйте интерфейс [IScheduledTaskCustomAlert](../IScheduledTaskCustomAlert/IScheduledTaskCustomAlert.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClassId](IScheduledTaskAuditAlert.ClassId.htm)
		 Свойство ClassId определяет
		 идентификатор типа объекта репозитория.


		 ![](../../Property_Image.gif)
		 [ObjectId](IScheduledTaskAuditAlert.ObjectId.htm)
		 Свойство ObjectId определяет
		 идентификатор объекта репозитория.


		 ![](../../Property_Image.gif)
		 [ObjectKey](IScheduledTaskAuditAlert.ObjectKey.htm)
		 Свойство ObjectKey
		 определяет ключ объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Operation](IScheduledTaskAuditAlert.Operation.htm)
		 Свойство Operation
		 определяет операцию, при выполнении которой будет генерироваться
		 событие.


		 ![](../../Property_Image.gif)
		 [Result](IScheduledTaskAuditAlert.Result.htm)
		 Свойство Result определяет
		 результат выполнения операции, при котором будет генерироваться
		 событие.


		 ![](../../Property_Image.gif)
		 [Station](IScheduledTaskAuditAlert.Station.htm)
		 Свойство Station определяет
		 рабочую станцию, на которой генерируется событие.


		 ![](../../Property_Image.gif)
		 [UserName](IScheduledTaskAuditAlert.UserName.htm)
		 Свойство UserName определяет
		 пользователя репозитория, генерирующего событие.


		 ![](../../Property_Image.gif)
		 [UserNameOS](IScheduledTaskAuditAlert.UserNameOS.htm)
		 Свойство UserNameOS
		 определяет пользователя операционной системы, генерирующего событие.


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
