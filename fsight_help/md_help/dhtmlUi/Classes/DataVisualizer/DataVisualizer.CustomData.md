# DataVisualizer.CustomData

DataVisualizer.CustomData
-


# DataVisualizer.CustomData


## Синтаксис


CustomData:
 Object | Array;


## Описание


Свойство CustomData предназначено
 для хранения пользовательских данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCustomData(value_id,
 _reInit_value), параметры:


	- value_id. Ключ данных;


	- _reInit_value. Значение
	 данных. Если параметр не задан, то значение параметра value_id
	 воспринимается как полный набор данных.


Значение свойства возвращается с помощью метода getCustomData(id),
 параметры:


	- id. Идентификатор возвращаемых
	 данных. Если параметр не задан, то возвращается весь набор данных.


## Пример


Пример использования свойства приведен на странице «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)».


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
