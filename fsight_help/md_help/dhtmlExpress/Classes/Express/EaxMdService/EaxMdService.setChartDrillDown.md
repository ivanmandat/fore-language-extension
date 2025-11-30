# EaxMdService.setChartDrillDown

EaxMdService.setChartDrillDown
-


**


# EaxMdService.setChartDrillDown


## Синтаксис


setChartDrillDown(report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 metadata, callback: PP.Delegate);


## Параметры


*report.* Экспресс-отчет, для которого
 опускается отметка вниз по иерархии;


*metadata.* Метаданные - индекс серии и метод изменения уровня
 отметки, задаваемый с помощью перечисления [PP.Mb.DrillMethod](dhtmlMetabase.chm::/Enums/DrillMethod.htm);


*callback.* Возвратная функция.


## Описание


Метод setChartDrillDown**
 опускает отметки на уровень вниз по иерархии для диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчёта. Опустим отметку на уровень вниз по иерархии для
 данной диаграммы:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определяем возвратную функцию
var onSetDrillDown = function () {
    expressBox.getDataView().getChartView().refreshAll();
    expressBox.getDataView().getGridView().PropertyChanged.fire(eaxMdService, new PP.Mb.Ui.PropertyChangedEventArgs({
        PropertyName: PP.Exp.Ui.ControlType.DrillDown,
        TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.DimBarSelection, PP.Exp.Ui.ViewTypeUpdate.Table, PP.Exp.Ui.ViewTypeUpdate.Map]
    }));
    console.log("Отметка опустилась на уровень вниз по иерархии.");
};
// Изменяем положение отметки на уровень вниз по иерархии для диаграммы экспресс-отчета
eaxMdService.setChartDrillDown(eaxAnalyzer, {
    SerieIndex: 1,
    Method: PP.Mb.DrillMethod.Down
}, PP.Delegate(onSetDrillDown, eaxMdService));

В результате выполнения примера отметка экспресс-отчета будет опущена
 на уровень вниз по иерархии, о чем будет выведено соответствующее сообщение
 в консоли браузера.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
