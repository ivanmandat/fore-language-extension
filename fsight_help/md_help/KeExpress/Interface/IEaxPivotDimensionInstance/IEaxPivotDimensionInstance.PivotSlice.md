# IEaxPivotDimensionInstance.PivotSlice

IEaxPivotDimensionInstance.PivotSlice
-


# IEaxPivotDimensionInstance.PivotSlice


## Синтаксис


PivotSlice: [IEaxDataAreaPivotSlice](../IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.htm);


## Описание


Свойство PivotSlice возвращает
 срез таблицы, построенной на многомерном источнике.


## Комментарии


Для получения измерения таблицы, построенной на многомерном источнике
 данных, используйте [IEaxPivotDimensionInstance.PivotDimension](IEaxPivotDimensionInstance.PivotDimension.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Dimesnions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    DA: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    PivotDimKey: Integer;

	    DimensionInst: IEaxDimensionInstance;

	    PivDimInst: IEaxPivotDimensionInstance;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим область данных

	    DA := Analyzer.DataArea;

	    // Получим срез данных

	    Slice := DA.Slices.Item(0);

	    // Получим ключ измерения

	    PivotDimKey := Analyzer.Pivot.DimItem(3).Key;

	    // Получим данные измерения по ключу

	    DimensionInst := Slice.GetDimension(PivotDimKey);

	    // Получим описание источника данных измерения

	    PivDimInst := DimensionInst As IEaxPivotDimensionInstance;

	    // Выведем в окно консоли наименование измерения и режим отображения таблицы

	    Debug.WriteLine("Наименование измерения - " + PivDimInst.PivotDimension.DimInstance.Name);

	    Select Case PivDimInst.PivotSlice.Pivot.ViewMode As Integer

	        Case 0: Debug.WriteLine("Режим отображения таблицы - DimInSlot");

	        Case 1: Debug.WriteLine("Режим отображения таблицы - LevInSlot");

	        Case 2: Debug.WriteLine("Режим отображения таблицы - Default");

	    End Select;

	End Sub UserProc;


После выполнения примера в окно консоли выведутся наименование измерения
 и режим отображения таблицы.


См. также:


[IEaxPivotDimensionInstance](IEaxPivotDimensionInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
