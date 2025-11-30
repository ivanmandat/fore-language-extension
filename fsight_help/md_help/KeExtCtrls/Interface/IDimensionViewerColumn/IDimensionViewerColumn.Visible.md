# IDimensionViewerColumn.Visible

IDimensionViewerColumn.Visible
-


# IDimensionViewerColumn.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 видимость столбца в области компонента.


## Комментарии


Допустимые значения:


	- True. Столбец отображается;


	- False. Столбец скрыт.


Для отображения нескольких столбцов свойству [ShowColumnHeaders](../IDimensionViewer/IDimensionViewer.ShowColumnHeaders.htm)
 должно быть установлено значение True.
 В режиме дизайнера формы при первом подключении к компоненту справочника
 коллекция [Columns](../IDimensionViewer/IDimensionViewer.Columns.htm)
 заполняется автоматически. Для каждого атрибута создается отдельный столбец.
 Значение свойства Visible для
 столбца выставляется в соответствии со значением свойства [Visible](KeDims.chm::/interface/IDimAttribute/IDimAttribute.Visible.htm) ([Hidden](KeRds.chm::/Interface/IRdsAttribute/IRdsAttribute.Hidden.htm) для справочников
 НСИ) того атрибута, с которым он связан.


См. также:


[IDimensionViewerColumn](IDimensionViewerColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
