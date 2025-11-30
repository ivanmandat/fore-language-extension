# WbkPropertyBarView.getTableViewPanel

WbkPropertyBarView.getTableViewPanel
-


# WbkPropertyBarView.getTableViewPanel


## Синтаксис


getTableViewPanel();


## Описание


Метод getTableViewPanel возвращает
 панель «Вид» вкладки «Формат».


## Комментарии


Метод возвращает объект типа PP.Exp.Ui.[TableViewPanel](dhtmlExpress.chm::/Classes/Express/TableViewPanel/TableViewPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Вид»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Вид»
var tableViewPanel = propertyBar.getTableViewPanel();
// Отобразим данную панель
tableViewPanel.show();
// Развернём панель
tableViewPanel.expand();

В результате выполнения примера была отображена панель «Вид»:


![](WbkPropertyBarView_getTableViewPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
