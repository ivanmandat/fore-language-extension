# IEaxDimensionDescriptor.Equal

IEaxDimensionDescriptor.Equal
-


# IEaxDimensionDescriptor.Equal


## Синтаксис


Equal(Other: [IEaxDimensionDescriptor](IEaxDimensionDescriptor.htm)):
 Boolean;


## Параметры


Other. Сравниваемое описание
 измерения.


## Описание


Метод Equal сравнивает описание
 измерения с другим описанием.


## Комментарии


Допустимые значения:


	- True. Описания измерения
	 равны;


	- False. Описания измерения
	 не равны.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    DA: IEaxDataArea;

	    Slice, SliceDim: IEaxDataAreaSlice;

	    PivotDimKey, PivotDimKeyTwo: Integer;

	    DimensionInst, DimensionInstTwo: IEaxDimensionInstance;

	    DimDescr, DimDescrTwo: IEaxDimensionDescriptor;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DA := Analyzer.DataArea;

	    // Получим срез данных

	    Slice := DA.Slices.Item(0);

	    // Получим ключ измерения

	    PivotDimKey := Analyzer.Pivot.DimItem(3).Key;

	    // Получим данные измерения по ключу

	    DimensionInst := Slice.GetDimension(PivotDimKey);

	    // Выведем в окно консоли элементы отметки и наименование измерения

	    Debug.WriteLine("Элементы отметки - " + DimensionInst.Selection.ToString("", ", ", False));

	    Debug.WriteLine("Наименование измерения - " + DimensionInst.Dimension.Name);

	    // Получим описание измерения

	    DimDescr := DimensionInst As IEaxDimensionDescriptor;

	    // Выведем в окно консоли ключ измерения

	    Debug.WriteLine("Ключ измерения - " + DimDescr.DimKey.ToString);

	    // Получим срез, которому принадлежит измерение

	    SliceDim := DimDescr.Slice As IEaxDataAreaSlice;

	    // Выведем в окно консоли идентификатор среза данных

	    Debug.WriteLine("Идентификатор среза данных - " + SliceDim.Id);

	    // Выведем в окно консоли тип объекта-родителя измерения

	    Select Case DimDescr.SliceType As Integer

	        Case 0: Debug.WriteLine("Тип объекта-родителя измерения - PivotSlice");

	        Case 1: Debug.WriteLine("Тип объекта-родителя измерения - PrxSlice");

	        Case 2: Debug.WriteLine("Тип объекта-родителя измерения - Visualizer");

	    End Select;

	    // Получим описание измерения

	    PivotDimKeyTwo := Analyzer.Pivot.DimItem(4).Key;

	    DimensionInstTwo := Slice.GetDimension(PivotDimKeyTwo);

	    DimDescrTwo := DimensionInstTwo As IEaxDimensionDescriptor;

	    // Выведем в окно консоли признак равенства описаний измерений

	    If DimDescr.Equal(DimDescrTwo) Then

	        Debug.WriteLine("Описания измерений равны");

	    Else

	        Debug.WriteLine("Описания измерений не равны");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- элементы отметки измерения;


	- наименование измерения;


	- ключ измерения;


	- идентификатор среза данных, в котором находится указанное измерение;


	- тип объекта-родителя измерения;


	- результат сравнения двух описаний измерения.


См. также:


[IEaxDimensionDescriptor](IEaxDimensionDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
