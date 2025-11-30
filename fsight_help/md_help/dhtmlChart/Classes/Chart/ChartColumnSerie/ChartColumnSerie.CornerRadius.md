# ChartColumnSerie.CornerRadius

ChartColumnSerie.CornerRadius
-


# ChartColumnSerie.CornerRadius


## Синтаксис


CornerRadius: Number;


## Описание


Свойство CornerRadius определяет
 радиус закругления верхушки столбика.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCornerRadius,
 а возвращается с помощью метода getCornerRadius.


Свойство принимает значения от 0 до 0.5.


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой. Код необходимо вводить
 в консоли:


// Получим диаграмму
dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим первый ряд данных
firstSerie = chart.getSeries()[0];
// Установим радиус закругления
firstSerie.setCornerRadius(0.3);​
В результате выполнения примера верхушка первого ряда была закруглена.


См. также:


[ChartColumnSerie](ChartColumnSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
