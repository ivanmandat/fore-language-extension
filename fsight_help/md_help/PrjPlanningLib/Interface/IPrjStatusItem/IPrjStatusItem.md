# IPrjStatusItem

IPrjStatusItem
-


# IPrjStatusItem


## Описание


Интерфейс IPrjStatusItem предназначен
 для работы с возникшей ошибкой или предупреждением при построении плана
 проекта.


## Комментарии


Для проверки плана проекта на наличие ошибок или предупреждений используйте
 метод [IPrjProject.CheckConstraints](../IPrjProject/IPrjProject.CheckConstraints.htm).


Для получения найденных ошибок или предупреждений при построении плана
 проекта используйте свойство [IPrjProject.Status](../IPrjProject/IPrjProject.Status.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Code](IPrjStatusItem.Code.htm)
		 Свойство Code возвращает
		 код возникшей ошибки или предупреждения.


		 ![](../../Property_Image.gif)
		 [Keys](IPrjStatusItem.Keys.htm)
		 Свойство Keys возвращает
		 массив ключей задач, содержащихся в плане проекта с ошибкой или
		 предупреждением.


		 ![](../../Property_Image.gif)
		 [Message](IPrjStatusItem.Message.htm)
		 Свойство Message возвращает
		 сообщение об ошибке или сообщение о предупреждении.


См. также:


[Интерфейсы
 сборки ProjectPlanning](../ProjectPlanning_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
