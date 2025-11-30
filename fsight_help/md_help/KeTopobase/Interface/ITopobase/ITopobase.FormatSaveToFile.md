# ITopobase.FormatSaveToFile

ITopobase.FormatSaveToFile
-


# ITopobase.FormatSaveToFile


## Синтаксис


FormatSaveToFile(SourceFormat: [TopobaseFormat](../../Enums/TopobaseFormat.htm),
 FileName: String);


## Параметры


SourceFormat.
 Формат топоосновы;


FileName. Путь и наименование
 файла топоосновы.


## Описание


Метод FormatSaveToFile сохраняет
 топооснову в файл.


## Пример


Для выполнения примера предполагается наличие в репозитории:


	- карты с идентификатором MAP, в которой содержится слой с наименованием
	 «Regions»;


	- формы, которая содержит:


		- компонент
		 с наименованием «Button1»;


		- компонент [UiMap](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMap.htm)
		 с наименованием «UiMap1», являющийся источником данных для «MapBox1»;


		- компонент [MapBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MapBox.htm)
		 с наименованием «MapBox1». Выберите для компонента источник данных
		 «UiMap1» в свойстве Source;


		- компонент [IntegerEdit](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/IntegerEdit.htm)
		 с наименованием «IntegerEdit1». Задайте для компонента значение
		 формата, в который будет сохранена топооснова, в свойстве Value. В качестве значения формата
		 топоосновы используйте значение перечисления [TopobaseFormat](../../Enums/TopobaseFormat.htm).


Добавьте ссылки на системные сборки: Drawing, Map, MathFin, Metabase,
 Topobase.


	//Прим. для писателей: при копировании в справку заменить подстроку ITOPOBASE_SAFETOFILE

	//на ITOPOBASE_FORMATSAFETOFILE


	Var

	    Count: Integer;


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


	Class ITOPOBASE_FORMATSAFETOFILEForm: Form

	    Button1: Button;

	    MapBox1: MapBox;

	    UiMap1: UiMap;

	    IntegerEdit1: IntegerEdit;

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

	        AreaVisual:= Layer.Visuals.AddAreaVisual;

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


	    Sub ITOPOBASE_SAFETOFILEFormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        // Получим репозиторий

	        mb := MetabaseClass.Active;

	        // Получим карту

	        Map := UiMap1.Map;

	        // Получим топооснову карты

	        Top := mb.FetchItemById("OBJ14878_COPY2").Edit As IMapTopobase;

	        // Сохраним топооснову

	        Itop := Top As ITopobase;

	        // Зададим топооснову

	        Map.Topobase := Itop As IMapTopobase;

	        // Отобразим карту

	        CreateLayer(Map);

	    End Sub ITOPOBASE_SAFETOFILEFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        TopoName: String;

	    Begin

	        TopoName := "";

	        // Сохраним топооснову в файл C:\Topobase.<расширение файла>

	        If IntegerEdit1.Value = TopobaseFormat.Tbs Then

	            TopoName := "tbs";

	        End If;

	        If IntegerEdit1.Value = TopobaseFormat.Svg Then

	            TopoName := "svg";

	        End If;

	        If IntegerEdit1.Value = TopobaseFormat.Google Then

	            TopoName := "google";

	        End If;

	        If IntegerEdit1.Value = TopobaseFormat.Triangulate Then

	            TopoName := "triangulate";

	        End If;

	        Itop.FormatSaveToFile((IntegerEdit1.Value) As TopobaseFormat, "C:\Topobase." + TopoName);

	    End Sub Button1OnClick;

	End Class ITOPOBASE_FORMATSAFETOFILEForm;


После выполнения примера при нажатии на кнопку «Button1» топооснова
 будет сохранена в файл на диске C с наименованием Topobase в указанном
 формате.


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
