# MetaDataViewerPanel.Source

MetaDataViewerPanel.Source
-


# MetaDataViewerPanel.Source


## Синтаксис


Source : PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm);


## Описание


Свойство Source определяет источник
 данных для панели атрибутов в рабочей книге.


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setSource. Возвращается с помощью
 метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим источник данных панели
 атрибутов в рабочей книге:


       barView = workbookBox.getPropertyBarView();
       metaPanel = barView.getSerieAttributesPanel();
       metaPanel.getSource();

В результате выполнения примера в консоли браузера был выведен
 объект типа PP.TS.WbkDocument, являющийся источником данных для панели
 атрибутов.


См. также:


[MetaDataViewerPanel](MetaDataViewerPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
