# IScheduledTaskAlert

IScheduledTaskAlert
-


# IScheduledTaskAlert


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskAlert
 предназначен для работы с событием, по наступлению которого будет выполнена
 задача.


## Иерархия наследования


           [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


           IScheduledTaskAlert


## Комментарии


Для настройки задачи, выполняемой в контейнере запланированных задач,
 используйте интерфейс [IScheduledTask](../IScheduledTask/IScheduledTask.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](IScheduledTaskAlert.Type.htm)
		 Свойство Type возвращает
		 тип события.


## Свойства, унаследованные от [INamedEntityModel](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)


		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)


		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)


		 Свойство Name возвращает
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckAlert](IScheduledTaskAlert.CheckAlert.htm)
		 Метод CheckAlert выполняет
		 проверку выполнения события.


		 ![](../../Sub_Image.gif)
		 [Invoke](IScheduledTaskAlert.Invoke.htm)
		 Метод Invoke вызывает
		 наступление события.


		 ![](../../Sub_Image.gif)
		 [Next](IScheduledTaskAlert.Next.htm)
		 Метод Next осуществляет
		 переход к следующему событию.


		 ![](../../Sub_Image.gif)
		 [StartLook](IScheduledTaskAlert.StartLook.htm)
		 Метод StartLook устанавливает
		 дату начала наступления события.


		 ![](../../Sub_Image.gif)
		 [StopLook](IScheduledTaskAlert.StopLook.htm)
		 Метод StopLook устанавливает
		 дату окончания наступления события.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
