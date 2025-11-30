# MetaAttributeBreadCrumbView.RequestSelectedItemsChanged

MetaAttributeBreadCrumbView.RequestSelectedItemsChanged
-


# MetaAttributeBreadCrumbView.RequestSelectedItemsChanged


## Синтаксис


RequestMetadata (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestSelectedltemsChanged наступает после перемещения атрибутов в навигационной цепочке.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


metaAttributeBreadCrumb.RequestSelectedItemsChanged.add(onDummyActionFactory("Отметка измерения на сервере была изменена"));

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm), а при добавлении или удалении атрибутов в навигационной цепочке будет вызвано событие RequestSelectedltemsChanged и выведено соответствующее сообщение.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
