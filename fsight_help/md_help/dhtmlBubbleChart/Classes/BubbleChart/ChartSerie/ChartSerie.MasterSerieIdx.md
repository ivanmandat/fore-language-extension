# ChartSerie.MasterSerieIdx

ChartSerie.MasterSerieIdx
-


# ChartSerie.MasterSerieIdx


## Синтаксис


MasterSerieIdx: Number;


## Описание


Свойство MasterSerieIdx определяет
 индекс привязки к мастер ряду.


## Комментарии


Свойство выставляется у прогнозных рядов. Ряд не привязан, если установлено
 значение «-1».


Значение свойства устанавливается из JSON и с помощью метода setMasterSerieIdx,
 а возвращается с помощью метода getMasterSerieIdx.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Classes/Express/expressbox/expressbox.htm)
 с наименованием «expressBox» (см. [Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)). Экспресс отчет должен
 содержать прогнозные ряды:


// Получим экземпляр пузырьковой диаграммы
DV = expressBox.getDataView();
CV = DV.getBubbleChartView();
bubbleChart = CV.getInstance();
// Получим первый ряд данных
serie = bubbleChart.getSeries()[0];
// Определим привязан ли первый ряд к мастер ряду
console.debug(serie.getMasterSerieIdx());
В результате выполнения примера в консоль был выведен индекс мастер
 ряда для первого ряда данных. Если первый ряд данных не имеет мастер ряда,
 будет выведено значение «-1».


См. также:


[ChartSerie](ChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
