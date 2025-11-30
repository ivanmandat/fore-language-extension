# IPrxReport.SyncGroups

IPrxReport.SyncGroups
-


# IPrxReport.SyncGroups


## Синтаксис


SyncGroups: [IEaxSyncGroups](KeExpress.chm::/Interface/IEaxSyncGroups/IEaxSyncGroups.htm);


## Описание


Свойство SyncGroups возвращает
 группу с настройками синхронизации.


## Комментарии


Для получения источников данных регламентного отчета используйте свойство
 [IPrxReport.DataSources](IPrxReport.DataSources.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», содержащего два источника данных, для
 каждого из которого добавлены области данных, в том числе, аналитические.
 Измерениями областей данных являются справочники с идентификаторами «CALENDAR1»,
 «SEP1» (для первого источника данных) и «CALENDAR2», «SEP2» (для второго
 источника данных).


Добавьте ссылки на системные сборки Express, Dimensions, Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Rep: IPrxReport;

    DataArea: IEaxDataArea;

    SyncG: IEaxSyncGroups;

    Group: IEaxSyncGroup;

    Slices_DA: IEaxDataAreaSlices;

    Slice_DA: IEaxDataAreaSlice;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    DimKey, i, j: Integer;

    Inst: IEaxDimensionInstance;

    PrxDim: IPrxSliceDimension;

    SliceType: EaxDimensionOwnerType;

    Inst_Slice: Object;

Begin

    MB := MetabaseClass.Active;

    Rep := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    // Синхронизация измерений аналитической области данных:

    DataArea := Rep.DataArea As IEaxDataArea;

    Slices_DA := DataArea.Slices;

    SyncG := Rep.SyncGroups As IEaxSyncGroups;

    Slice_DA := Slices_DA.Item(0);

    DimKey := Slice_DA.Selection.FindById("CALENDAR1").Dimension.Key;

    Inst := Slice_DA.GetDimension(DimKey);

    Group := SyncG.CreateGroup(Inst);

    Slice_DA := Slices_DA.Item(1);

    DimKey := Slice_DA.Selection.FindById("SEP1").Dimension.Key;

    Inst := Slice_DA.GetDimension(DimKey);

    Group.Add(Inst);

    // Синхронизация измерений области данных:

    Slices := Rep.DataSources.Item(1).Slices;

    Slice := Slices.Item(0);

    PrxDim := Slice.Dimensions.FindById("CALENDAR2");

    DimKey := PrxDim.Key;

    Inst := Slice.GetDimension(DimKey);

    Group := SyncG.CreateGroup(Inst);

    Slice := Slices.Item(1);

    DimKey := Slice.Selection.FindById("SEP2").Dimension.Key;

    Inst := Slice.GetDimension(DimKey);

    Group.Add(Inst);

    // Вывод результатов синхронизации:

    Debug.WriteLine("Общее количество групп: " + SyncG.Count.ToString);

    For i := 0 To SyncG.Count - 1 Do

        Group := SyncG.Item(i);

        Debug.WriteLine("=== Группа " + (i + 1).ToString + " ===");

        Debug.WriteLine("ID измерения - Срез");

        For j := 0 To Group.Count - 1 Do

            SliceType := Group.Item(j).Dimension.SliceType;

            Inst := Group.Item(j).Dimension;

            Inst_Slice := Inst.Slice;

            If (SliceType = EaxDimensionOwnerType.PivotSlice) Then

                Debug.WriteLine(Inst.Dimension.Ident + " - " + (Inst_Slice As IEaxDataAreaSlice).Name);

            End If;

            If (SliceType = EaxDimensionOwnerType.PrxSlice) Then

                Debug.WriteLine(Inst.Dimension.Ident + " - " + (Inst_Slice As IPrxSlice).Name);

            End If;

        End For;

    End For;

    (Rep As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут добавлены группы синхронизированных
 измерений. По каждой группе к окно консоли будет выведена общая информация.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
