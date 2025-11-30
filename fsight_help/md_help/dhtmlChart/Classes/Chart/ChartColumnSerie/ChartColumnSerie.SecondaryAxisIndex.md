# ChartColumnSerie.SecondaryAxisIndex

ChartColumnSerie.SecondaryAxisIndex
-


# ChartColumnSerie.SecondaryAxisIndex


## Синтаксис


SecondaryAxisIndex: Number;


## Описание


Свойство SecondaryAxisIndex
 определяет пользовательский шаблон ряда диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSecondaryAxisIndex
 , а возвращается с помощью метода getSecondaryAxisIndex.


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой с настроенным пользовательским
 шаблоном. Код необходимо вводить в консоли:


dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим первый ряд данных
firstSerie = chart.getSeries()[0];
// Установим ряд по дополнительной оси
firstSerie.setSecondaryAxis(true);
// Получим индекс дополнительной оси
console.log(firstSerie.getSecondaryAxisIndex());
В результате выполнения примера для первого ряда была установлена дополнительная
 ось, в консоль был выведен её индекс.


См. также:


[ChartColumnSerie](ChartColumnSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
