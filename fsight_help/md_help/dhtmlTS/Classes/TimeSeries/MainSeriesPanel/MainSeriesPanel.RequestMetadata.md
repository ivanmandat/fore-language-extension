# MainSeriesPanel.RequestMetadata

MainSeriesPanel.RequestMetadata
-


# MainSeriesPanel.RequestMetadata


## Синтаксис


RequestMetadata (sender, args);


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


//Получаем мастер, расположенный на вкладке «Ряд - Основные»
var mainSeriesPanel = workbookBox.getPropertyBarView().getMainSeriesPanel();
//Подписываемся на событие запроса метаданных
mainSeriesPanel.RequestMetadata.add(function(){
	//Выводим сообщение
	alert('Призошло событие запроса метаданных');
});

После выполнения примера будет добавлен обработчик события RequestMetadata.
 Чтобы сгенерировать событие, необходимо на [панели
 свойств рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm) выбрать вкладку «Ряд».


См. также:


[MainSeriesPanel](MainSeriesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
