# WbkDataView.TreeVisibleChanged

WbkDataView.TreeVisibleChanged
-


# WbkDataView.TreeVisibleChanged


## Синтаксис


TreeVisibleChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TreeVisibleChanged наступает после изменения видимости дерева рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	workbookBox.getDataView().TreeVisibleChanged.add(PP.Delegate(function(){
		alert("Произошло изменение видимости дерева рядов");
	}));

Для выполнения примера необходимо добавить лист в рабочую книгу, сменить активный лист, либо обновить рабочую книгу. В этом случае будет выведено следующее сообщение: «Произошло изменение видимости дерева рядов».


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
