# UiChartGetDataValueEventArgs.Create

UiChartGetDataValueEventArgs.Create
-


# UiChartGetDataValueEventArgs.Create


## Синтаксис


Create(


SerieIndex: Integer;


PointIndex: Integer;


Value: Double;


Value2: Double;


Result: Вoolean);


## Параметры


SerieIndex - номер ряда;


PointIndex - номер точки;


Value - определяет исходные данные по оси OY;


Value2 - определяет исходные данные по оси OX, если тип диаграммы точечный;


Result - определяет признак обработки события.


## Описание


Конструктор Create создает аргументы события [UiChart.OnGetDataValue](../UiChart/UiChart.OnGetDataValue.htm) (построение диаграммы). Метод автоматически вызывается при наступлении данного события для создания его аргументов.


См. также:


[UiChartGetDataValueEventArgs](UiChartGetDataValueEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
