# ICubeModelDestination.HasChangeHistory

ICubeModelDestination.HasChangeHistory
-


# ICubeModelDestination.HasChangeHistory


## Синтаксис


HasChangeHistory: Boolean;


## Описание


Свойство HasChangeHistory возвращает
 признак поддержки ведения истории изменений для данных куба.


## Комментарии


Свойство актуально при работе с вариантами отображения стандартных кубов
 или кубов, где стандартный куб используется в качестве источника: виртуальные
 кубы или представление-кубы.


Свойство возвращает значение True,
 если для куба включено [ведение
 истории изменений](uinavobj.chm::/Cube/createcube/Master_Standart/Additional_Settings.htm#history). Если свойство вернуло значение True, то не рекомендуется производить
 редактирование куба через прикладной код. Это может привести к невозможности
 продолжения работы с историей. В этом случае:


	- Выключите [ведение
	 истории изменений](uinavobj.chm::/Cube/createcube/Master_Standart/Additional_Settings.htm#history) в визуальном интерфейсе веб-приложения;


	- Внесите необходимые изменения в структуру куба;


	- Включите обратно ведение истории в визуальном интерфейсе веб-приложения.


См. также:


[ICubeModelDestination](ICubeModelDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
