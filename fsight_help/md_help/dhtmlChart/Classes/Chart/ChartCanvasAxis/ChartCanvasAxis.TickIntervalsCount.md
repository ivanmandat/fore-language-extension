# ChartCanvasAxis.TickIntervalsCount

ChartCanvasAxis.TickIntervalsCount
-


# ChartCanvasAxis.TickIntervalsCount


## Синтаксис


TickIntervalsCount: Number;


## Описание


Свойство TickIntervalsCount
 определяет фиксированное количество интервалов оси диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTickIntervalsCount,
 а возвращается с помощью метода getTickIntervalsCount.


Если значение свойства равно 0, то количество интервалов оси диаграммы
 рассчитывается автоматически.


Метод getTickIntervalsCount
 содержит параметр userOptions, задающий признак того, что метод вернет
 значение, заданное пользователем.


Допустимые значения параметра userOptions:


	- true.
	 Метод вернет значение, заданное пользователем;


	- false.
	 Метод вернет значение, используемое при отрисовке оси диаграммы
	 (по умолчанию).


## Пример


Пример использования приведён на странице «[Пример
 создания точечной диаграммы](../../../Components/Chart/ChartScatter.htm)».


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
