# TableCatView.getTableStyleState

TableCatView.getTableStyleState
-


# TableCatView.getTableStyleState


## Синтаксис


getTableStyleState(sender: [PP.Ui.IconListItem](dhtmlUi.chm::/Classes/IconListItem/IconListItem.htm));


## Параметры


*sender*. Выбранный пункт в списке
 «Стиль и оформление» на вкладке «Таблица» ленты инструментов.


## Описание


Метод getTableStyleState возвращает
 текущие настройки стиля таблицы в рабочей книге.


## Комментарии


Метод возвращает JSON-объект со следующими полями: Name - наименование
 настройки, PredefinedStyle - наименование стиля таблицы, задаваемое с
 помощью перечисления [PP.Exp.Ui.TabTablePredefinedStyle](dhtmlExpress.chm::/Enums/TabTablePredefinedStyle.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а также должна быть открыта вкладка
 «Таблица» на ленте инструментов рабочей книги. Получим наименование текущего
 стиля таблицы:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Таблица»
var tableCatView = ribbon.getTableCategory();
// Создадим все элементы вкладки
tableCatView.renderContent();
// Получим настройки текущего стиля таблицы
var tableStyleState = tableCatView.getTableStyleState();
console.log("Наименование настройки стиля таблицы: " + tableStyleState.Name);
console.log("Наименование текущего стиля таблицы: " + tableStyleState.PredefinedStyle);

В результате выполнения примера в консоли браузера были выведены настройки
 текущего стиля таблицы в рабочей книге:


Наименование настройки стиля таблицы: EAX table
 style


Наименование текущего стиля таблицы: ExtBlueStriped


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
