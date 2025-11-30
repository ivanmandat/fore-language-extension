# IMapLayer.ToolTipVisible

IMapLayer.ToolTipVisible
-


# IMapLayer.ToolTipVisible


## Синтаксис


ToolTipVisible: Boolean;


## Описание


Свойство ToolTipVisible определяет
 необходимость отображения всплывающих подсказок для выбранного слоя карты.


## Комментарии


Допустимые значения:


	- True. Всплывающие подсказки
	 для выбранного слоя будут отображаться;


	- False. Всплывающие подсказки
	 для выбранного слоя не будут отображаться.


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

	    Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        Da: TextDataAdapter;

	        MapDa: IMapDataAdapter;

	        M: IMap;

	        mLayers: IMapLayers;

	        mLayer: IMapLayer;

	        mShapes: IMapTopobaseShapes;

	        mShape: IMapTopobaseShape;

	        i: Integer;

	    Begin

	        UiMap1.Map.Topobase:= MetabaseClass.Active.ItemById("Map").Bind As IMapTopobase;

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

	        mLayer.ToolTipDataAdapter := MapDa;

	        mLayer.ToolTipVisible := True;

	    End Sub TestFormOnCreate;

	End Class TEstForm;


После выполнения примера для слоя карты «Regions» будет отображаться
 всплывающая подсказка.


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
