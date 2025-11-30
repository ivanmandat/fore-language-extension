# WorkbookView.getRibbonView

WorkbookView.getRibbonView
-


# WorkbookView.getRibbonView


## Синтаксис


getRibbonView ();


## Описание


Метод getRibbonView возвращает [ленту инструментов](../../../Components/TimeSeries/WbkRibbon/WbkRibbon.htm) рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем вкладку «Данные» ленты инструментов рабочей книги и скрываем ее
var rib =  workbookBox.getRibbonView();
//Работаем с объектом, полученным с помощью метода getRibbonView()
var data = rib.getDataCategory();
data.hide();

После выполнения примера вкладка «Данные» ленты инструментов будет скрыта:


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
