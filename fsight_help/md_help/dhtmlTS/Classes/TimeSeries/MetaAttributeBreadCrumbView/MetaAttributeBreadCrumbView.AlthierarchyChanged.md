# MetaAttributeBreadCrumbView.AlthierarchyChanged

MetaAttributeBreadCrumbView.AlthierarchyChanged
-


# MetaAttributeBreadCrumbView.AlthierarchyChanged


## Синтаксис


AltHierarchyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие AltHierarchyChanged наступает после изменения альтернативной иерархии измерения на сервере.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var breadcrumb = workbookBox.getDataView().getBreadcrumb();
	//Добавляем событие изменения альтернативной иерархии измерения на сервере
	breadcrumb.AltHierarchyChanged.add(function()
	{
		//Выводим сообщение
		alert('Произошло событие изменения альтернативной иерархии измерения на сервере');
	});

После выполнения примера при выборе альтернативной иерархии для элемента измерения (команда контекстного меню для значения атрибута в дереве рядов «Альтернативная иерархия») на экран будет выведено сообщение «Произошло событие изменения альтернативной иерархии измерения на сервере».


Примечание. Пункт контекстного меню «Альтернативная иерархия» доступен, если для измерения установлена альтернативная иерархия.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
