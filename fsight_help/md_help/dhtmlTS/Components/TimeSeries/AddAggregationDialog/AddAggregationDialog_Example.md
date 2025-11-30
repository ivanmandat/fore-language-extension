# Пример создания компонента AddAggregationDialog

Пример создания компонента AddAggregationDialog
-


# Пример создания компонента AddAggregationDialog


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../WorkbookBox/Component_WorkbookBox.htm)»). Создадим компонент [AddAggregationDialog](AddAggregationDialog.htm) и отобразим его:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Создадим диалог добавления ряда, вычисленного методом агрегации
var addAggregationDialog = new PP.TS.Ui.AddAggregationDialog({
    Data: PP.TS.Ui.FormulaTypeEnum.CollapseAverage,
    ResourceKey: "TSRibbonAddAggregationDialog",
    Series: workbookBox.getSource().getSelectedSeries() // Зададим временные ряды
});
// Отобразим созданный диалог
addAggregationDialog.show();

В результате выполнения примера был создан и отображён компонент AddAggregationDialog:


![](AddAggregationDialog.png)


См. также:


[AddAggregationDialog](AddAggregationDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
