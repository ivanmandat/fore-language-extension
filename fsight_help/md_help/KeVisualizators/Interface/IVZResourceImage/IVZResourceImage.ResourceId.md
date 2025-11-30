# IVZResourceImage.ResourceId

IVZResourceImage.ResourceId
-


# IVZResourceImage.ResourceId


## Синтаксис


ResourceId: [VisualizersResourceId](../../Enums/VisualizersResourceId.htm);


## Описание


Свойство ResourceId определяет
 идентификатор ресурса, который будет использоваться в качестве маркера
 элемента легенды.


## Комментарии


Идентификатор ресурса определяет пиктограмму, которая будет отображаться
 в качестве маркера элемента легенды. Перед заданием идентификатора ресурса
 должен быть определен пользовательский тип маркера с помощью свойства
 [IVZSizeLegendMarker.Marker](../IVZSizeLegendMarker/IVZSizeLegendMarker.Marker.htm),
 принимающего значение «Custom»
 перечисления [VisualizatorSizeMarkerShape](../../Enums/VisualizatorSizeMarkerShape.htm).


Примечание.
 Для изменения маркера элемента легенды используйте свойство IVZResourceImage.ResourceId
 или [IVZResourceImage.Bitmap](IVZResourceImage.Bitmap.htm).


## Пример


Использование свойства приведено в примере для [IVZSizeLegendMarker.BigImage](../IVZSizeLegendMarker/IVZSizeLegendMarker.BigImage.htm).


См. также:


[IVZResourceImage](IVZResourceImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
