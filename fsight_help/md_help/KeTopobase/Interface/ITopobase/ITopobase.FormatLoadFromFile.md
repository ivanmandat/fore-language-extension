# ITopobase.FormatLoadFromFile

ITopobase.FormatLoadFromFile
-


# ITopobase.FormatLoadFromFile


## Синтаксис


FormatLoadFromFile(SourceFormat: [TopobaseFormat](../../Enums/TopobaseFormat.htm),
 FileName: String);


## Параметры


SourceFormat.
 Формат топоосновы;


FileName. Путь и наименование
 файла топоосновы.


## Описание


Метод FormatLoadFromFile загружает
 топооснову из файла.


## Пример


Для выполнения примера предполагается наличие в репозитории:


	- карты с идентификатором MAP, в которой содержится слой с наименованием
	 «Regions»;


	- четырёх файлов топооснов Topobase.tbs, Topobase.svg, Topobase.google, Topobase.triangulate
	 на диске C;


	- формы, которая содержит:


		- компонент [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm)
		 с наименованием «Button1»;


		- компонент [UiMap](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMap.htm)
		 с наименованием «UiMap1», являющийся источником данных для «MapBox1»;


		- компонент [MapBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MapBox.htm)
		 с наименованием «MapBox1». Выберите для компонента источник данных
		 «UiMap1» в свойстве Source;


		- компонент [IntegerEdit](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/IntegerEdit.htm)
		 с наименованием «IntegerEdit1». Задайте для компонента значение
		 формата, из которого будет загружена топооснова, в свойстве Value. В качестве значения формата
		 топоосновы используйте значение перечисления [TopobaseFormat](../../Enums/TopobaseFormat.htm).


Добавьте ссылки на системные сборки: Drawing, Map, MathFin, Metabase,
 Topobase.


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


	Class ITOPOBASE_FORMATLOADFROMFILEForm: Form

	    Button1: Button;

	    UiMap1: UiMap;

	    MapBox1: MapBox;

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


	    Sub ITOPOBASE_FORMATLOADFROMFILEFormOnCreate(Sender: Object; Args: IEventArgs);

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

	    End Sub ITOPOBASE_FORMATLOADFROMFILEFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        TopoName: String;

	    Begin

	        TopoName := "";

	        // Загрузим топооснову из файла C:\Topobase.<расширение файла>

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

	        Itop.FormatLoadFromFile((IntegerEdit1.Value) As TopobaseFormat, "C:\Topobase." + TopoName);

	        // Сохраним изменения

	        (Itop As IMetabaseObject).Save;

	        // Зададим новую топооснову

	        Map.Topobase := Itop As IMapTopobase;

	        // Отобразим карту

	        CreateLayer(Map)

	    End Sub Button1OnClick;

	End Class ITOPOBASE_FORMATLOADFROMFILEForm;


После выполнения примера при нажатии на кнопку «Button1» из файла в
 форму будет загружена топооснова указанного формата.


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
