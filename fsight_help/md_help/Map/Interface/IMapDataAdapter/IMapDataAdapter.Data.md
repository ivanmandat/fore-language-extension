# IMapDataAdapter.Data

IMapDataAdapter.Data
-


# IMapDataAdapter.Data


## Синтаксис


Data(Attribute: Variant): Variant;


## Параметры


Attribute. Параметр определяет,
 какие данные должен возвращать адаптер.


## Описание


Свойство Data возвращает данные
 адаптера.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Class TextDataAdapter: Object, IMapDataAdapter

	    Public Str: String;

	    Function Get_Data(Attribute: Variant): Variant;

	    Var

	        shape: IMapTopobaseShape;

	    Begin

	        shape := Attribute As IMapTopobaseShape;

	        Return Str + shape.Name;

	    End Function Get_Data;

	End Class TextDataAdapter;


	Class TestForm: Form

	    UiMap1: UiMap;

	    MapBox1: MapBox;

	    Button1: Button;

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Da: TextDataAdapter;

	    MapDa: IMapDataAdapter;

	    M: IMap;

	    mLayers: IMapLayers;

	    mLayer: IMapLayer;

	    mShapes: IMapTopobaseShapes;

	    mShape: IMapTopobaseShape;

	    i: integer;

	Begin

	    Da := New TextDataAdapter.Create;

	    Da.Str := "Это ";

	    MapDa := Da As IMapDataAdapter;

	    M := UiMap1.Map;

	    mLayers := M.Layers;

	    mLayer := mLayers.FindByName("Regions");

	    mShapes := mLayer.Shapes;

	    For i := 0 To mShapes.Count - 1 Do

	        mShape := mShapes.Item(i);

	        Debug.WriteLine(MapDa.Data(mShape));

	    End For;

	    mLayer.TextDataAdapter := MapDa;

	    mLayer.TextVisible := True;

	End Sub Button1OnClick;

	End Class TestForm;


После выполнения примера будет определен адаптер данных для подписей
 слоя «Regions» на карте. Подписи всех областей слоя будут выведены в окно
 консоли.


См. также:


[IMapDataAdapter](IMapDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
