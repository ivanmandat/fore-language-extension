# ObserveAttributesPanel.clearAttrs

ObserveAttributesPanel.clearAttrs
-


# ObserveAttributesPanel.clearAttrs


## Синтаксис


clearAttrs();


## Описание


Метод clearAttrs удаляет все атрибуты наблюдения из соответствующей панели в рабочей книге.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а также к источнику данных рабочей книги должен быть добавлен как минимум один атрибут наблюдения (редактирование атрибутов производится только в настольном приложении). Удалим все атрибуты наблюдения из соответствующей панели в рабочей книге:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель атрибутов наблюдения
var observeAttributesPanel = propertyBar.getObserveAttributesPanel();
// Покажем и раскроем данную панель
observeAttributesPanel.show();
observeAttributesPanel.expand();
// Очистим панель от всех атрибутов наблюдения
observeAttributesPanel.clearAttrs();

В результате выполнения примера панель «Атрибуты наблюдения» стала пустой:


![](ObserveAttributesPanel_clearAttrs.png)


См. также:


[ObserveAttributesPanel](ObserveAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
