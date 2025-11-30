# IMapDynamicDataAdapter.PartCount

IMapDynamicDataAdapter.PartCount
-


# IMapDynamicDataAdapter.PartCount


## Синтаксис


PartCount(Attribute: Variant): Integer;


## Параметры


Attribute. Параметр определяет
 данные, количество областей которых надо вернуть.


## Описание


Свойство PartCount возвращает
 количество отдельных областей в данных. Каждая область данных соответствует
 одному региону карты.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


	Var Count: Integer;

	Class TerritoryInfoAdapter: Object, IMapDynamicDataAdapter

	        Function Get_PartCount(Attribute: Variant; TimePoint: Integer): Integer;

	        Begin

	            Return Count;

	        End Function Get_PartCount;


	        Function Get_TimePointName(TimePoint: Integer): String;

	        Begin

	            Return "TimePoint " + TimePoint.ToString;

	        End Function Get_TimePointName;


	        Function Get_TimePointsCount: Integer;

	        Begin

	            Return 4;

	        End Function Get_TimePointsCount;


	        Function Get_Data(Attribute: Variant; PartvIndex: Integer; TimePoint: Integer): Variant;

	        Var t: Integer;

	            i: Integer;

	        Begin

	            t := 1;

	            For i := 0 To TimePoint Do

	                t := t + 10;

	            End For;

	            Return Math.Rand * 10 * t;

	        End Function Get_Data;


	        Function Get_CustomFormat: String;

	        Begin

	            Return "#0,000";

	        End Function Get_CustomFormat;

	End Class TerritoryInfoAdapter;


	Class TestForm: Form

	    Button1: Button;

	    UiMap1: UiMap;

	    MapBox1: MapBox;

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Da: TerritoryInfoAdapter;

	        MapDa: IMapDynamicDataAdapter;

	        M: IMap;

	        mLayer: IMapLayer;

	        mShapes: IMapTopobaseShapes;

	        mShape: IMapTopobaseShape;

	        i: integer;

	        pc: Integer;

	    Begin

	        Da := New TerritoryInfoAdapter.Create;

	        MapDa := da As IMapDynamicDataAdapter;

	        M := UiMap1.Map;

	        mLayer := M.View.TerritoryInfo.Layer;

	        mShapes := mLayer.Shapes;

	        For i := 0 To mShapes.Count - 1 Do

	            mShape := mShapes.Item(i);

	            pc := MapDa.PartCount(mShape) - 1;

	            Debug.WriteLine(MapDa.Data(mShape, pc));

	        End For;

	        mLayer.TerritoryInfoAdapter := MapDa;

	    End Sub Button1OnClick;

	End Class TestForm;


После выполнения примера будет определен источник данных для расшифровки
 территорий. Элементы последней области в адаптере данных будут выведены
 в окно консоли.


См. также:


[IMapDynamicDataAdapter](IMapDynamicDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
