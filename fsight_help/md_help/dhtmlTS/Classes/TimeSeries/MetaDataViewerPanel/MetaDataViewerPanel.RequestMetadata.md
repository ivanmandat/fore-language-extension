# MetaDataViewerPanel.RequestMetadata

MetaDataViewerPanel.RequestMetadata
-


# MetaDataViewerPanel.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata наступает
 при запросе метаданных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


       barView = workbookBox.getPropertyBarView();
       metaPanel = barView.getSerieAttributesPanel();
       metaPanel.RequestMetadata.add(function () { alert("Метаданные обновлены") });
После выполнения примера при открытой панели атрибутов и выделении нового
 ряда будет выводиться сообщение об обновлении метаданных.


См. также:


[MetaDataViewerPanel](MetaDataViewerPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
