# LanerBoxView.EnableTabSheetActions

LanerBoxView.EnableTabSheetActions
-


# LanerBoxView.EnableTabSheetActions


## Синтаксис


EnableTabSheetActions : Boolean;


## Описание


Свойство EnableTabSheetActions
 определяет возможность выделения элементов таблицы.


## Параметры


Значение свойства устанавливается из JSON и с помощью метода setEnableTabSheetActions
 и возвращается с помощью метода getEnableTabSheetActions.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим область данных рабочей книги
var dataView = workbookBox.getDataView();
// Получим таблицу рабочей книги
var lanerBoxView = dataView.getGridView();
// Запретим выделение элементов таблицы
lanerBoxView.setEnableTabSheetActions(false);

После выполнения примера было запрещено выделение элементов таблицы.


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
