# IMapNumericScale.Exact

IMapNumericScale.Exact
-


# IMapNumericScale.Exact


## Синтаксис


Exact(Index: Integer): Double;


## Параметры


Index. Индекс деления шкалы.


## Описание


Свойство Exact определяет число
 для значений, которые равны значению деления шкалы.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. Также должен быть реализован класс VisualDataAdapter,
 создающий динамический источник данных. Пример данного класса содержится
 в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm).


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    BarVisual: IMapBarVisual;

	    Height: IMapVisualNumericProperty;

	    Scale: IMapNumericScale;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    BarVisual := Layer.Visuals.AddBarVisual;

	    BarVisual.DataAdapter := New VisualDataAdapter.Create As IMapDynamicDataAdapter;

	    Height := BarVisual.Height;

	    Height.DataAdapter := BarVisual.DataAdapter;

	    Height.Dependent := True;

	    Scale := New DxMapNumericScale.Create As IMapNumericScale;

	    Scale.Count := 1;

	    Scale.Value(0) := 50;

	    Scale.NoData := 0;

	    Scale.Greater(0) := 2;

	    Scale.Exact(0) := 4;

	    Scale.Less(0) := 6;

	    Height.Scale := Scale;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен столбиковый
 показатель, для определения высоты которого будет использована шкала.


См. также:


[IMapNumericScale](IMapNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
