# ChartCatView.getChartLegendPositionListBox

ChartCatView.getChartLegendPositionListBox
-


**


# ChartCatView.getChartLegendPositionListBox


## Синтаксис


getChartLegendPositionListBox();


## Описание


Метод getChartLegendPositionListBox**
 возвращает список возможных позиций для выбора положения легенды диаграммы
 в рабочей области экспресс-отчета.


## Комментарии


Метод возвращает объект класса PP.Ui.[ListBox](dhtmlList.chm::/Classes/listbox/listbox.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере в результате
 выводится ориентация компонента PP.Ui.ListBox:


// Получим представление вкладки «Диаграмма»
var chartCategory = expressBox.getRibbonView().getChartCategory();
console.log("Orientation: " + chartCategory.getChartLegendPositionListBox().getOrientation());

В результате выполнения примера в консоль браузера будет выведен элемент
 перечисления PP.[Orientation](dhtmlCommon.chm::/enums/pp.orientation.htm).Horizontal
 ,означающий горизонтальную ориентацию списка возможных позиций для выбора
 положения легенды диаграммы:


Orientation: 1


См. также:


[ChartCatView](ChartCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
