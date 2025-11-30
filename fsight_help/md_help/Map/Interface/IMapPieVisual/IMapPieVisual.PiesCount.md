# IMapPieVisual.PiesCount

IMapPieVisual.PiesCount
-


# IMapPieVisual.PiesCount


## Синтаксис


PiesCount: Integer;


## Описание


Свойство PiesCount определяет
 максимальное количество отображаемых секторов показателя.


## Комментарии


Если значение данного свойства равно нулю, то все секторы показателя
 будут отображены.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiMap с наименованием
 «UiMap1», являющегося источником данных для компонента MapBox. К компоненту
 UiMap1 должна быть подключена карта. Также должен быть реализован класс
 VisualDataAdapter, создающий динамический источник данных. Пример данного
 класса содержится в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm).


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

	    PieVisual.Radius.Value := 2.5;

	    PieVisual.PiesCount := 0;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен круговой показатель,
 для штриховки которого будут использованы красный и синий цвета. Все секторы
 показателя будут отображены.


См. также:


[IMapPieVisual](IMapPieVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
