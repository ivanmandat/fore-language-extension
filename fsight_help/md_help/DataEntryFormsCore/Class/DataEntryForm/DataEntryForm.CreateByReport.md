# DataEntryForm.CreateByReport

DataEntryForm.CreateByReport
-


# DataEntryForm.CreateByReport


## Синтаксис


CreateByReport(report: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm));


## Параметры


report. Регламентный отчёт,
 связанный с формой ввода.


## Описание


Конструктор CreateByReport создаёт
 экземпляр формы ввода на основании регламентного отчёта, который с ней
 связан.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE. Измерения куба построены на базе справочников
 с идентификаторами DICT_FIRMS, DICT_INDICATORS и CALENDAR. Также предполагается
 наличие формы ввода, для которой указанный макрос назначен в качестве
 исполняемого метода для пользовательской кнопки.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


			Public Sub AddTable(Report: IPrxReport);

Var

    Mb: IMetabase;

    Sheet: IPrxSheet;

    DEForm: IDataEntryForm;

    TArea: IDefTableArea;

    Dim1, Dim2, DimCalc: IDefDimension;

    Ind1, Ind2, Ind3: IDefIndicator;

    Sel: IDimSelection;

    SourceKey: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Создание отдельного листа

    Sheet := Report.Sheets.Add("Лист для новой таблицы");

    // Экземпляр текущей формы ввода

    DEForm := New DataEntryForm.CreateByReport(Report);

    DEForm.refreshOnEdit := True;

    // Создание новой табличной области

    TArea := DEForm.InputAreas.CreateTableArea(Sheet.Key, 1, 1);

    TArea.MultiLevelTopHeader := True;

    TArea.ColumnBehaviour := emTabRowInsert.insert;

    TArea.RowBehaviour := emTabRowInsert.insert;

    // Добавление измерений

    Dim1 := TArea.defDimensions.AddItem(Mb.GetObjectKeyById("DICT_FIRMS"));

    Dim1.place := DimPlace.Side;

    Dim2 := TArea.defDimensions.AddItem(Mb.GetObjectKeyById("DICT_INDICATORS"));

    Dim2.place := DimPlace.Side;

    // Добавление источника

    SourceKey := Mb.GetObjectKeyById("STD_CUBE");

    TArea.defSources.AddItem(SourceKey);

    // Создание показателей и задание отметки по ним

    // Показатель 1

    Ind1 := TArea.defIndicators.AddItem(SourceKey);

    DimCalc := Ind1.defDimensions.ItemByKey(Mb.GetObjectKeyById("CALENDAR"));

    Sel := DimCalc.CreateSelection;

    Sel.DeselectAll;

    Sel.SelectElement(Sel.Dimension.Elements.FindById("YEARS:2016"), False);

    DimCalc.ElemsSelection := Sel;

    // Показатель 2

    Ind2 := TArea.defIndicators.AddItem(sourceKey);

    DimCalc := Ind2.defDimensions.ItemByKey(Mb.GetObjectKeyById("CALENDAR"));

    Sel := DimCalc.CreateSelection;

    Sel.DeselectAll;

    Sel.SelectElement(Sel.Dimension.Elements.FindById("YEARS:2017"), False);

    DimCalc.ElemsSelection := Sel;

    // Изменение расположения измерений по показателю

    Ind2.defDimensions.Swap(Ind2.defDimensions.Item(0).key, Ind2.defDimensions.Item(1).key);

    Ind2.name := "Куб1 - показатель2";

    // Изменение расположения показателей

    TArea.defIndicators.Swap(Ind1.unical, Ind2.unical);

    // Изменение расположения измерений

    TArea.defDimensions.Swap(Dim1.Key, Dim2.Key);

    // Добавить измерение как показатель

    Ind3 := TArea.defIndicators.AddItem(Dim1.Key);

    // Применить изменения к форме ввода

    DEForm.inpuTAreas.ApplyAreaToReport(TArea.id);

    DEForm._Dispose;

End Sub AddTable;


При выполнении макроса в форме ввода будет создан новый лист. На листе
 будет создана табличная область, добавлен источник и измерения, созданы
 три показателя. Будет настроено расположение измерений в показателях и
 самой табличной области.


См. также:


[DataEntryForm](DataEntryForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
