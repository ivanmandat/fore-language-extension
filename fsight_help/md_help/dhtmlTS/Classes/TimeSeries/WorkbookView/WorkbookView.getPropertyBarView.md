# WorkbookView.getPropertyBarView

WorkbookView.getPropertyBarView
-


# WorkbookView.getPropertyBarView


## Синтаксис


getPropertyBarView ();


## Описание


Метод getPropertyBarView возвращает
 [панель
 свойств рабочей книги](../../../Components/TimeSeries/WbkPropertyBar/WbkPropertyBar.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также нужно, чтобы была открыта
 вкладка «Вид» панели свойств. Затем необходимо в обработчике события открытия
 документа добавить следующий код:


//Получаем [панель свойств рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm)
var bar = workbookBox.getPropertyBarView();
workbookBox.refreshHeader();
//Работаем с объектом, полученным с помощью метода [getTableViewPanel](../WbkPropertyBarView/WbkPropertyBarView.getTableViewPanel.htm)()
var tabView = bar.getTableViewPanel();
console.log("Разворачиваем мастер таблицы, расположенный на вкладке «Формат» на панели «Вид».");
tabView.expand();
bar.refreshAll();

После выполнения примера будет развернута панель «Вид» на вкладке «Формат»
 панели свойств.


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
