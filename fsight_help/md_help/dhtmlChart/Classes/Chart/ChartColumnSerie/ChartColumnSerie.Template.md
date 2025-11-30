# ChartColumnSerie.Template

ChartColumnSerie.Template
-


# ChartColumnSerie.Template


## Синтаксис


Template: PP.Ui.ChartColumnTemplate | String;


## Описание


Свойство Template определяет
 пользовательский шаблон ряда диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTemplate,
 а возвращается с помощью метода getTemplate.


Свойство актуально при использовании [пользовательских
 шаблонов](DataAnalysis.chm::/Plugins/Custom/CustomDiagram.htm).


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой с настроенным пользовательским
 шаблоном. Код необходимо вводить в консоли:


// Получим диаграмму
dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим первый ряд данных
firstSerie = chart.getSeries()[0];
// Получим объект шаблона диаграммы
templ = chart.getTemplate();
// Вручную установим другой шаблон диаграммы
// Применим первый шаблон диаграммы к первому ряду
firstSerie.setTemplate(templ);
// Получим объект предпросмотра шаблона диаграммы
firstSerie.getPreview();
// ->  <canvas width=​"16" height=​"16">​
В результате выполнения примера для первого ряда был установлен альтернативный
 пользовательский шаблон.


См. также:


[ChartColumnSerie](ChartColumnSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
