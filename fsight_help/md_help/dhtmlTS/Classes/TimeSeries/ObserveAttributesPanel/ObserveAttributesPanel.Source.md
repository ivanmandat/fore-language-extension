# ObserveAttributesPanel.Source

ObserveAttributesPanel.Source
-


# ObserveAttributesPanel.Source


## Синтаксис


Source: PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm)


## Описание


Свойство Source устанавливает источник данных для панели атрибутов наблюдения в рабочей книге.


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setSource. Получить значение свойства нельзя.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим ключ источника данных для панели атрибутов наблюдения в рабочей книге:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель атрибутов наблюдения
var observeAttributesPanel = propertyBar.getObserveAttributesPanel();
// Установим источник данных для данной панели, если он отсутствует
var source = observeAttributesPanel._Source; // Получим источник данных
if (source == null | source == undefined) {
    observeAttributesPanel.setSource(workbookBox.getSource());
    console.log("Ключ источника данных: " + workbookBox.getSource().getKey());
} else {
    console.log("Ключ источника данных: " + source.getKey());
};

В результате выполнения примера в консоли браузера был выведен ключ источника данных для панели атрибутов наблюдения в рабочей книге:


Ключ источника данных: 2944


См. также:


[ObserveAttributesPanel](ObserveAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
