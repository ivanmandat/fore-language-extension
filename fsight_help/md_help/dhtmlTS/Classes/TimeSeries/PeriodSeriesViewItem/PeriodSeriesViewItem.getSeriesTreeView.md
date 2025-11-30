# PeriodSeriesViewItem.getSeriesTreeView

PeriodSeriesViewItem.getSeriesTreeView
-


**


# PeriodSeriesViewItem.getSeriesTreeView


## Синтаксис


getSeriesTreeView();


## Описание


Метод getSeriesTreeView**
 возвращает дерево временных рядов в рабочей книге.


## Комментарии


Метод возвращает объект типа [PP.Ui.TreeList](dhtmlUiTree.chm::/Classes/TreeList/TreeList.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [PeriodSeriesViewItem](../../../Components/TimeSeries/PeriodSeriesViewItem/PeriodSeriesViewItem.htm)
 с наименованием «periodSeriesViewItem» (см. «[Пример
 создания компонента PeriodSeriesViewItem](../../../Components/TimeSeries/PeriodSeriesViewItem/PeriodSeriesViewItem_Example.htm)»). Получим и выведем в консоли
 браузера наименования временных рядов в рабочей книге:


// Получим дерево временных рядов
var tree = periodSeriesViewItem.getSeriesTreeView();
// Получим вершины данного дерева
var nodes = tree.getNodes();
for (var i = 0; i < nodes.getCount(); i++) {
    // Получим вершину
    var node = nodes.getItem(i);
    // Получим наименование временного ряда
    var text = node.getText();
    console.log(text);
};

В результате выполнения примера в консоли браузера был выведен список
 временных рядов:


Billions of National Currency|Russia|GGEI|A


Billions of National Currency|Russia|GGBXI|A


Billions of National Currency|Russia|NMS_R|A


Billions of US Dollars|Russia|BCA|A


См. также:


[PeriodSeriesViewItem](PeriodSeriesViewItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
