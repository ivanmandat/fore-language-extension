# IMapTimeDynamicDataAdapter.Data

IMapTimeDynamicDataAdapter.Data
-


# IMapTimeDynamicDataAdapter.Data


## Синтаксис


Data(Attribute: Variant; PartIndex: Integer; TimePointIndex:
 Integer): Variant;


## Параметры


Attribute. Параметр определяет,
 какие данные должен возвращать временной адаптер;


PartIndex. Параметр определяет
 составную часть показателя;


TimePointIndex. Параметр определяет
 временную точку.


## Описание


Свойство Data возвращает значение
 указанной составной части показателя в указанную временную точку.


## Комментарии


Составная часть показателя задается с помощью параметра PartIndex, временная
 точка - с помощью параметра TimePointIndex.


## Пример


Для выполнения примера предполагается наличие на форме двух компонентов
 Button, MapBox, IntegerEdit, UiMap с наименованиями Button1, Button2,
 MapBox1, IntegerEdit1 и UiMap1 соответственно. UiMap1 является источником
 данных для MapBox1. К компоненту UiMap1 должна быть подключена карта,
 содержащая только картографический показатель.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map, MathFin, Metabase.


	Var Count: Integer;

	    int: integer;


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


	Class TESTForm: Form

	    MapBox1: MapBox;

	    UiMap1: UiMap;

	    Button1: Button;

	    Button2: Button;

	    IntegerEdit1: IntegerEdit;

	    Map: IMap;

	    Layer: IMapLayer;

	    BarVisual: IMapBarVisual;


	    Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var mb: IMetabase;

	        qwe: IMapTimeDynamicDataAdapter;

	    Begin

	        mb := MetabaseClass.Active;

	        UiMap1.Map.Topobase := MetabaseClass.Active.ItemById("MAP").Bind As IMapTopobase;

	        Map := UiMap1.Map;

	        Layer := Map.Layers.FindByName("Regions");

	        Map.Color := New GxColor.CreateARGB(100, 100, 100, 100);

	        Map.Refresh;

	    End Sub TestFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var Fill: IMapVisualFillProperty;

	        Color: IMapVisualColorProperty;

	        Collection: IMapColorCollection;

	        ns: IMapNumericScale;

	        vals: array Of double;

	        i: Integer;

	        Scale: IMapColorScale;

	        StartC, EndC: IGxColor;

	    Begin

	        BarVisual := New DxMapBarVisual.Create;

	        BarVisual := Layer.Visuals.AddBarVisual;

	        BarVisual.DataAdapter := New TimeDynamicDataAdapter.Create;

	        Color := BarVisual.Color;

	        Color.DataAdapter := BarVisual.DataAdapter;

	        Color.Dependent := True;

	        Scale := New DxMapColorScale.Create As IMapColorScale;

	        StartC := GxColor.FromName("Red");

	        EndC := GxColor.FromName("Blue");

	        Scale.AutoSetup(Layer, BarVisual.DataAdapter, StartC, EndC);

	        Color.Scale := Scale;

	        BarVisual.Height.Dependent := True;

	        ns := BarVisual.Height.Scale;

	        ns.AutoCalculable := True;

	        ns.Count := 3;

	        vals := New Double[ns.Count];

	        For i := 0 To vals.Length - 1 Do

	            vals[i] := i * 20;

	        End For;

	        ns.AutoSetup(Layer, BarVisual.DataAdapter, vals, ns.Count, True);

	    End Sub Button1OnClick;


	    Sub IntegerEdit1OnChange(Sender: Object; Args: IEventArgs);

	    Begin

	        Count := IntegerEdit1.Value;

	    End Sub IntegerEdit1OnChange;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var i: Integer;

	        Visuals: IMapLayerVisuals;

	        DA: IMapTimeDynamicDataAdapter;

	    Begin

	        Visuals := Map.Layers.FindByName("Regions").Visuals;

	        DA := Visuals.Item(0).DataAdapter As IMapTimeDynamicDataAdapter;

	        For i := 0 To DA.TimePointsCount - 1 Do

	            Debug.WriteLine("Name " + DA.TimePointName(i));

	            Debug.WriteLine("Value " + DA.Data(57, 0, i) As String);

	            Debug.WriteLine("Part Count " + DA.PartCount(57, i).ToString);

	        End For;

	    End Sub Button2OnClick;

	End Class TESTForm;


В компоненте IntegerEdit1 укажите количество составных частей. После
 выполнения примера при нажатии на кнопку Button1 на карту будут добавлены
 показатели. При нажатии на кнопку Button2 в окно консоли для каждой временной
 точки будут выведены её наименование, значение и количество составных
 частей показателя, указанное в IntegerEdit1.


См. также:


[IMapTimeDynamicDataAdapter](IMapTimeDynamicDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
