# IDimensionViewerBase.ShowHeaderButton

IDimensionViewerBase.ShowHeaderButton
-


# IDimensionViewerBase.ShowHeaderButton


## Синтаксис


ShowHeaderButton: Boolean;


## Описание


Свойство ShowHeaderButton определяет,
 будет ли отображаться кнопка вызова меню с настройками отображения заголовков
 столбцов.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Кнопка отображается, меню заголовков столбцов отображается при её
	 нажатии. Контекстное меню для заголовка столбцов отсутствует;


	- False. Кнопка не отображается.
	 Для настройки заголовков столбцов доступно контекстное меню.


Для использования данного свойства необходимо, чтобы свойству [IMetaAttributesBreadcrumb.ShowColumnHeaders](../IMetaAttributesBreadcrumb/IMetaAttributesBreadcrumb.ShowColumnHeaders.htm)
 было установлено True.


## Пример


Использование свойства приведено в примере для [IDimensionViewer.AdjustWidthOnlyVisible](../IDimensionViewer/IDimensionViewer.AdjustWidthOnlyVisible.htm).


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
