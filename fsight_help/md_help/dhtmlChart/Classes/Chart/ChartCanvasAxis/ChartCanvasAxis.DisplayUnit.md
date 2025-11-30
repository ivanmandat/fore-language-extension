# ChartCanvasAxis.DisplayUnit

ChartCanvasAxis.DisplayUnit
-


# ChartCanvasAxis.DisplayUnit


## Синтаксис


DisplayUnit: String;


## Описание


Свойство DisplayUnit определяет
 масштаб цены деления.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setDisplayUnits, а возвращается
 с помощью метода getDisplayUnit.


Допустимые значения: "none",
 "hundreds", "thousands", "millions", "billions",
 "trillions".


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой. Код необходимо вводить
 в консоли:


// Получим экземпляр диаграммы
dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим горизонтальную ось диаграммы
axis = chart.getXAxis();
// Получим значение свойства
console.log(axis.getDisplayUnit());
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
