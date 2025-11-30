# IPrjProject.CheckConstraints

IPrjProject.CheckConstraints
-


# IPrjProject.CheckConstraints


## Синтаксис


CheckConstraints: Boolean;


## Описание


Метод CheckConstraints выполняет
 проверку на наличие ошибок или предупреждений при построении плана проекта.


## Комментарии


Допустимые значения:


	- True. План проекта построен
	 без ошибок или предупреждений;


	- False. План проекта
	 построен с ошибками или предупреждениями;


Для получения найденных ошибок или предупреждений при построении плана
 проекта используйте свойство [IPrjProject.Status](IPrjProject.Status.htm).


Для работы с возникшей ошибкой или предупреждением при построении плана
 проекта используйте интерфейс [IPrjStatusItem](../IPrjStatusItem/IPrjStatusItem.htm).


## Пример


Использование метода приведено в примере для [IPrjProject.Status](IPrjProject.Status.htm).


См. также:


[IPrjProject](IPrjProject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
