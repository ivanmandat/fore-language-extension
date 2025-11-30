# RevisionsPanel.RequestMetadata

RevisionsPanel.RequestMetadata
-


# RevisionsPanel.RequestMetadata


## Синтаксис


RequestMetadata: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata наступает при запросе метаданных для панели «Ревизии» на панели свойств рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем и вызовем событие RequestMetadata, чтобы при его наступлении в консоли браузера вывелось уведомление о происходящем запросе метаданных:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель ревизий
var revisionsPanel = propertyBar.getSerieRevisionsPanel()
// Обработаем событие RequestMetadata
revisionsPanel.RequestMetadata.add(function (sender, args) {
    console.log("Request metadata...");
});
// Вызовем данное событие
revisionsPanel.RequestMetadata.fire(this);

В результате выполнения примера каждый раз после вызова события RequestMetadata в консоли браузера будет выводиться уведомление о том, что происходит запрос метаданных:


Request metadata...


См. также:


[RevisionsPanel](RevisionsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
