# IMapLegend.ResetFormats

IMapLegend.ResetFormats
-


# IMapLegend.ResetFormats


## Синтаксис


ResetFormats;


## Описание


Метод ResetFormats сбрасывает
 настройки элементов легенды.


## Комментарии


Для настройки элементов легенды используйте свойства:


	- [IMapLegendLabelFormat.Between](../IMapLegendLabelFormat/IMapLegendLabelFormat.Between.htm);


	- [IMapLegendLabelFormat.Equal](../IMapLegendLabelFormat/IMapLegendLabelFormat.Equal.htm);


	- [IMapLegendLabelFormat.Greater](../IMapLegendLabelFormat/IMapLegendLabelFormat.Greater.htm);


	- [IMapLegendLabelFormat.Less](../IMapLegendLabelFormat/IMapLegendLabelFormat.Less.htm);


	- [IMapLegendLabelFormat.NoData](../IMapLegendLabelFormat/IMapLegendLabelFormat.NoData.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. В качестве источника данных
 используется экспресс-отчет с картой, содержащей слой с идентификатором
 «EOmap».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Legend: IMapLegend;

	Begin

	    Map := UiMap1.Map;

	    Legend := New DxMapLegend.Create As IMapLegend;

	    Layer := Map.Layers.FindByName("EOmap");

	    Legend.Visual := Layer.Visuals.Item(0) As IMapVisual;

	    Legend.ResetFormats;

	End Sub Button1OnClick;


После выполнения примера для легенды карты будут возвращены стандартные
 настройки формата подписей.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
