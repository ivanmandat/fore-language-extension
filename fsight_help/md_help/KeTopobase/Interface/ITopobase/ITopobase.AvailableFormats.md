# ITopobase.AvailableFormats

ITopobase.AvailableFormats
-


# ITopobase.AvailableFormats


## Синтаксис


AvailableFormats: Integer;


## Описание


Свойство AvailableFormats возвращает
 комбинацию значений форматов, в которые была сконвертирована топооснова.


## Комментарии


Значения форматов топооснов определяются с помощью перечисления [TopobaseFormat](../../Enums/TopobaseFormat.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории:


	- карты с идентификатором MAP, в которой содержится слой с наименованием
	 «Regions»;


	- формы, которая содержит:


		- два компонента
		 с наименованиями «Button1» и Button2»;


		- два компонента [UiMap](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMap.htm)
		 с наименованиями «UiMap1» и «UiMap2», являющиеся источниками данных
		 для «MapBox1» и «MapBox2» соответственно;


		- два компонента [MapBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MapBox.htm)
		 с наименованиями «MapBox1» и «MapBox2». Выберите для компонентов
		 источники данных «UiMap1» и «UiMap2» в свойстве Source
		 соответственно;


		- два компонента [IntegerEdit](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/IntegerEdit.htm)
		 с наименованиями «IntegerEdit1» и «IntegerEdit2». Задайте для
		 компонентов значение исходного формата топоосновы и значение результирующего
		 формата в свойстве Value
		 соответственно. В качестве значений форматов топоосновы используйте
		 значения перечисления [TopobaseFormat](../../Enums/TopobaseFormat.htm).


Добавьте ссылки на системные сборки: Drawing, Map, MathFin, Metabase,
 Topobase.


	Var

	    Count: Integer;

	    int: integer;


	// Получим информацию о динамических показателях

	// в различных временных точках на слое карты

	Class VisualDataAdapter: Object, IMapTimeDynamicDataAdapter

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

	    Var

	        t: Integer;

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

	End Class VisualDataAdapter;


	Class ITOPOBASE_AVAILABLEFORMATSForm: Form

	    Button1: Button;

	    Button2: Button;

	    MapBox1: MapBox;

	    MapBox2: MapBox;

	    UiMap1: UiMap;

	    UiMap2: UiMap;

	    IntegerEdit1: IntegerEdit;

	    IntegerEdit2: IntegerEdit;

	    mb: IMetabase;

	    Map: IMap;

	    Top: IMapTopobase;

	    Itop: ITopobase;


	    Sub CreateLayer(CurrentMap: IMap);

	    Var

	        StartC, EndC: IGxColor;

	        Color: IMapVisualColorProperty;

	        Scale: IMapColorScale;

	        AreaVisual: IMapAreaVisual;

	        Layer: IMapLayer;

	    Begin

	        // Получим слой карты с наименованием «Regions»

	        Layer := CurrentMap.Layers.FindByName("Regions");

	        // Зададим цвет фона карты

	        CurrentMap.Color := New GxColor.CreateARGB(100, 100, 100, 100);

	        // Обновим карту

	        CurrentMap.Refresh;

	        // Получим картографический показатель

	        AreaVisual := Layer.Visuals.AddAreaVisual;

	        // Создадим источник данных для показателя

	        AreaVisual.DataAdapter := New VisualDataAdapter.Create As IMapTimeDynamicDataAdapter;

	        Count := 5;

	        // Получим параметры заливки показателя

	        Color := AreaVisual.Color;

	        // Определим источник данных для заливки

	        Color.DataAdapter := AreaVisual.DataAdapter;

	        // Создадим цветовую шкалу

	        Scale := New DxMapColorScale.Create As IMapColorScale;

	        // Зададим начальный цвет градиента

	        StartC := GxColor.FromName("Red");

	        // Зададим конечный цвет градиента

	        EndC := GxColor.FromName("Blue");

	        // Настроим цветовую шкалу

	        Scale.AutoSetup(Layer, AreaVisual.DataAdapter, StartC, EndC);

	        // Зададим цветовую шкалу для заливки показателя

	        Color.Scale := Scale;

	        // Обновим карту

	        CurrentMap.Refresh;

	    End Sub CreateLayer;


	    Sub ITOPOBASE_AVAILABLEFORMATSFormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        // Получим репозиторий

	        mb := MetabaseClass.Active;

	        // Получим карту

	        Map := UiMap1.Map;

	        // Получим топооснову карты

	        Top := mb.FetchItemById("OBJ14878_COPY2").Edit As IMapTopobase;

	        // Зададим топооснову

	        Map.Topobase := Top;

	        // Сохраним топооснову

	        Itop := Top As ITopobase;

	        // Отобразим карту

	        CreateLayer(Map);

	    End Sub ITOPOBASE_AVAILABLEFORMATSFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        // Сконвертируем топооснову из одного формата в другой

	        Itop.Convert((IntegerEdit1.Value) As TopobaseFormat, (IntegerEdit2.Value) As TopobaseFormat);

	        // Зададим топооснову

	        UiMap2.Map.Topobase := Itop As IMapTopobase;

	        // Отобразим карту с исходной топоосновой

	        CreateLayer(UiMap1.Map);

	        // Отобразим карту со сконвертированной топоосновой

	        CreateLayer(UiMap2.Map);

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Topo: ITopobase;

	    Begin

	        Topo := Itop;

	        // Выведем в консоль список форматов,

	        // в которые была сконвертирована топооснова

	        If (Topo.AvailableFormats And TopobaseFormat.Tbs) <> 0 Then

	            Debug.WriteLine("Tbs");

	        End If;

	        If (Topo.AvailableFormats And TopobaseFormat.Svg) <> 0 Then

	            Debug.WriteLine("Svg");

	        End If;

	        If (Topo.AvailableFormats And TopobaseFormat.Google) <> 0 Then

	            Debug.WriteLine("Google");

	        End If;

	        If (Topo.AvailableFormats And TopobaseFormat.Triangulate) <> 0 Then

	            Debug.WriteLine("Triangulate");

	        End If;

	    End Sub Button2OnClick;

	End Class ITOPOBASE_AVAILABLEFORMATSForm;


После выполнения примера:


	- при нажатии на кнопку «Button1» топооснова будет сконвертирована
	 в указанный формат;


	- при нажатии на кнопку «Button2» в консоль будет выведен список
	 форматов, в которые была сконвертирована топооснова.


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
