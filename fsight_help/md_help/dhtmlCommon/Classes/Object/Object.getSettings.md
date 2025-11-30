# Object.getSettings

Object.getSettings
-


# Object.getSettings


## Синтаксис


getSettings(includeType: boolean, excludeObjects:
 Object[], excludeProps: string[], excludeDelegates: boolean): ObjectSettings;


## Параметры


includeType. Определяет содержание
 наименования класса в результате:


	- True. Наименование класса
	 содержится в результате;


	- False. По умолчанию.
	 Наименование класса не содержится в результате.


excludeObjects. Массив объектов,
 которые необходимо исключить из обработки и результата;


excludeProps. Массив названий
 свойств, которые необходимо исключить из обработки и результата;


excludeDelegates. Определяет
 исключение делегатов из обработки и результата:


	- True. Делегаты исключены;


	- False. Делегаты не исключены.


## Описание


Метод getSettings возвращает
 настройки объекта репозитория.


См. также:


[Object](Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
