# WbkRibbonView.getChartCategory

WbkRibbonView.getChartCategory
-


# WbkRibbonView.getChartCategory


## Синтаксис


getChartCategory();


## Описание


Метод getChartCategory возвращает[ вкладку
 «Диаграмма»](../ChartCategory/ChartCategory.refreshCorridor.htm) на ленте инструментов.


## Комментарии


Метод возвращает объект класса [PP.TS.Ui.ChartCategory](../ChartCategory/ChartCategory.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();

//Получаем вкладку «Диаграмма» на ленте инструментов рабочей книги
var chartCategory = ribbonView.getChartCategory();

var charCategoryButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Диаграмма", //Подпись
Click: PP.Delegate(onClickChartCategory)
});
var state = false;
function onClickChartCategory()
{
//Делаем видимой/скрываем вкладку «Диаграмма» на ленте инструментов рабочей книги
state ? chartCategory.hide() : chartCategory.show();
state = !state;
}

После выполнения примера получим вкладку «Диаграмма» на ленте инструментов
 временных рядов.


Для получения вкладки «Диаграмма» нужно нажать на кнопку «Диаграмма»
 , которая находится под боковой панелью.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
