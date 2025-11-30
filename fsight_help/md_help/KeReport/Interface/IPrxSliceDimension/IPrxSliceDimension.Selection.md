# IPrxSliceDimension.Selection

IPrxSliceDimension.Selection
-


# IPrxSliceDimension.Selection


## Синтаксис


		Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection возвращает
 отметку измерения.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчёта с идентификатором REPORT. В отчёт добавлен источник данных. Для
 этого источника создан срез данных. Минимум одно измерение среза расположено
 в фиксированной области.


Добавьте ссылки на системные сборки: Dimensions, Matrix, Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObjDes: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		    Report: IPrxReport;

		    DtSources: IPrxDataSources;

		    DtSource: IPrxDataSource;

		    Slices: IPrxSlices;

		    Slice: IPrxSlice;

		    SliceHeader: IPrxSliceHeader;

		    SliceDim: IPrxSliceDimension;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим регламентный отчёт

		    MObjDes := MB.ItemById("REPORT");

		    // Откроем отчёт на редактирование

		    MObj := MObjDes.Edit;

		    Report := MObj As IPrxReport;

		    // Получим источники данных отчёта

		    DtSources := Report.DataSources;

		    // Получим первый источник данных

		    DtSource := DtSources.Item(0);

		    // Получим срезы первого источника данных

		    Slices := DtSource.Slices;

		    // Получим первый срез первого источника данных

		    Slice := Slices.Item(0);

		    // Получим фиксированные измерения первого среза

		    SliceHeader := Slice.FixedHeader;

		    // Получим первое фиксированное измерение первого среза

		    SliceDim := SliceHeader.Item(0);

		    // Включим агрегацию для элементов полученного измерения

		    SliceDim.AggregationEnabled := TriState.OnOption;

		    // Выберем арифметическое среднее в качестве метода расчёта агрегации

		    SliceDim.AggregatorOperation := BasicAggregatorOperation.ArithmeticalMean;

		    // Добавим в отметку все элементы измерения

		    SliceDim.Selection.SelectAll;

		    // Сохраним изменения в отчёте

		    MObj.Save;

		End Sub UserProc;


После выполнения примера будут настроены параметры первого измерения,
 расположенного в фиксированной области среза данных. Для измерения будет
 включена агрегация данных. Метод агрегации - арифметическое среднее. В
 отметку будут добавлены все элементы.


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
