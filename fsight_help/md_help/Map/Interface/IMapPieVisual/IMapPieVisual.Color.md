# IMapPieVisual.Color

IMapPieVisual.Color
-


# IMapPieVisual.Color


## Синтаксис


Color: [IMapVisualColorProperty](../IMapVisualColorProperty/IMapVisualColorProperty.htm);


## Описание


Свойство Color возвращает параметры
 заливки показателя.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. Также должен быть реализован класс VisualDataAdapter,
 создающий динамический источник данных. Пример данного класса содержится
 в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm).


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    PieVisual: IMapPieVisual;

	    Color: IMapVisualColorProperty;

	    Collection: IMapColorCollection;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    PieVisual := Layer.Visuals.AddPieVisual;

	    PieVisual.DataAdapter := New VisualDataAdapter.Create As IMapDynamicDataAdapter;

	    Color := PieVisual.Color;

	    Color.DataAdapter := PieVisual.DataAdapter;

	    Color.Dependent := False;

	    Collection := Color.Values;

	    Collection.Count := 2;

	    Collection.Item(0) := GxColor.FromName("Red");

	    Collection.Item(1) := GxColor.FromName("Blue");

	    PieVisual.Radius.Value := 1.5;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен круговой показатель,
 для заливки которого будут использованы красный и синий цвета:


![](../IMapVisualColorProperty/IMapVisualColorProperty_Values.gif)


См. также:


[IMapPieVisual](IMapPieVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
