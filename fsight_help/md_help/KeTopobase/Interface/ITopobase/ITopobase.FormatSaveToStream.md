# ITopobase.FormatSaveToStream

ITopobase.FormatSaveToStream
-


# ITopobase.FormatSaveToStream


## Синтаксис


FormatSaveToStream(SourceFormat: [TopobaseFormat](../../Enums/TopobaseFormat.htm),
 Stream: [IIOStream](modio.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


SourceFormat.
 Формат топоосновы;


Stream. Поток, в который сохраняется
 топооснова.


## Описание


Метод FormatSaveToStream сохраняет
 топооснову в поток.


## Пример


Для выполнения примера предполагается наличие в репозитории:


	- карты с идентификатором MAP, в которой содержится слой с наименованием
	 «Regions»;


	- формы, которая содержит:


		- два компонента
		 с наименованиями «Button1» и «Button2»;


		- два компонента [UiMap](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMap.htm)
		 с наименованиями «UiMap1» и «UiMap2», являющиеся источниками данных
		 для «MapBox1» и «MapBox2» соответственно;


		- два компонента [MapBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MapBox.htm)
		 с наименованиями «MapBox1» и «MapBox2». Выберите для компонентов
		 источники данных «UiMap1» и «UiMap2» в свойстве Source
		 соответственно;


		- компонент [IntegerEdit](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/IntegerEdit.htm)
		 с наименованием «IntegerEdit1». Задайте для компонента значение
		 формата, в который будет сохранена топооснова, в свойстве Value. В качестве значения формата
		 топоосновы используйте значение перечисления [TopobaseFormat](../../Enums/TopobaseFormat.htm).


Добавьте ссылки на системные сборки: Drawing, Map, MathFin, Metabase,
 Topobase.


			Var

    _Count: Integer;


// Получим информацию о динамических показателях

// в различных временных точках на слое карты

Class VisualDataAdapter: Object, IMapTimeDynamicDataAdapter

    Function Get_PartCount(Attribute: Variant; TimePoint: Integer): Integer;

    Begin

        Return _Count;

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


Class ITOPOBASE_FORMATSAVETOSTREAMForm: Form

    Button1: Button;

    Button2: Button;

    MapBox1: MapBox;

    MapBox2: MapBox;

    UiMap1: UiMap;

    UiMap2: UiMap;

    IntegerEdit1: IntegerEdit;

    mb: IMetabase;

    Map: IMap;

    Top: IMapTopobase;

    Itop: ITopobase;

    StreamG: IMemoryStream;


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

        _Count := 5;

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


    Sub ITOPOBASE_FORMATSAVEFROMSTREAMFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        // Получим репозиторий

        mb := MetabaseClass.Active;

        // Получим карту

        Map := UiMap1.Map;

        // Получим топооснову карты

        Top := mb.FetchItemById("MAP").Edit As IMapTopobase;

        // Сохраним топооснову

        Itop := Top As ITopobase;

        // Зададим топооснову

        Map.Topobase := Itop As IMapTopobase;

        // Отобразим карту

        CreateLayer(Map);

    End Sub ITOPOBASE_FORMATSAVEFROMSTREAMFormOnCreate;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        // Создадим поток

        StreamG := New MemoryStream.Create;

        // Сохраним топооснову в поток

        (UiMap1.Map.Topobase As ITopobase).FormatSaveToStream((IntegerEdit1.Value) As TopobaseFormat, StreamG);

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        // Зададим в потоке начальную позицию

        StreamG.Seek(0, SeekOrigin.Beginning);

        // Получим топооснову карты

        UiMap2.Map.Topobase := mb.FetchItemById("MAP").Bind As IMapTopobase;

        // Загрузим топооснову из потока

        (UiMap2.Map.Topobase As ITopobase).FormatLoadFromStream((IntegerEdit1.Value)As TopobaseFormat, StreamG);

        // Отобразим карту

        CreateLayer(UiMap2.Map);

    End Sub Button2OnClick;

End Class ITOPOBASE_FORMATSAVETOSTREAMForm;


После выполнения примера:


	- при нажатии на кнопку «Button1» топооснова будет сохранена
	 в поток в указанном формате;


	- при нажатии на кнопку «Button2» топооснова будет
	 загружена из потока в форму.


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
