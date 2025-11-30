# WorkbookView.PropertyBarVisible

WorkbookView.PropertyBarVisible
-


# WorkbookView.PropertyBarVisible


## Синтаксис


PropertyBarVisible: Boolean;


## Описание


Свойство PropertyBarVisible
 определяет видимость боковой панели.


## Параметры


Значение свойства устанавливается из JSON и с помощью метода setPropertyBarVisible
 и возвращается с помощью метода getPropertyBarVisible.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Скроем боковую панель
workbookBox.setPropertyBarVisible(false)

После выполнения примера была скрыта боковая панель.


См. также:


[WorkbookView](WorkbookView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
