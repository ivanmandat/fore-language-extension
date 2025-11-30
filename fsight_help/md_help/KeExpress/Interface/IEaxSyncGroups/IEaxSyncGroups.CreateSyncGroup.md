# IEaxSyncGroups.CreateGroup

IEaxSyncGroups.CreateGroup
-


# IEaxSyncGroups.CreateGroup


## Синтаксис


CreateSyncGroup(SyncItem: [IEaxDimensionDescriptor](../IEaxDimensionDescriptor/IEaxDimensionDescriptor.htm)):
 [IEaxSyncGroup](../IEaxSyncGroup/IEaxSyncGroup.htm);;


## Параметры


SyncItem. Описание измерения.


## Описание


Метод CreateGroup создает связь
 синхронизированных измерений.


## Комментарии


Для удаления связи синхронизированных измерений по ее индексу используйте
 [IEaxSyncGroups.Remove](IEaxSyncGroups.Remove.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_SYNCGROUPS, содержащего две аналитические
 области данных, основанных на одном источнике. Источник данных должен
 обязательно содержать календарное измерение, основанное на календарном
 справочнике с идентификатором D_CALENDAR, и измерение территориальных
 образований, основанное на территориальном справочнике с идентификатором
 DIC_RF.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    RepGrid: IEaxGrid;

	    SelManager: IEaxObjectSelectionManager;

	    SliceA, SliceB: IEaxDataAreaSlice;

	    CalDimKey_A, TerDimKey_A, CalDimKey_B, TerDimKey_B, i, Key, Count: Integer;

	    CalInst_A, TerInst_A, CalInst_B, TerInst_B: IEaxDimensionInstance;

	    SGroups: IEaxSyncGroups;

	    Group_a, Group_b, SG: IEaxSyncGroup;

	    Compatible: IEaxDimensionDescriptors;

	    DimName, SyncAttr: String;

	    SyncItem: IEaxSyncItem;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем отчет

	    Report := MB.ItemById("REG_SYNCGROUPS").Edit As IPrxReport;

	    // Получаем объект для работы с таблицей

	    DataArea := Report.DataArea;

	    RepGrid := DataArea.Views.Item(0) As IEaxGrid;

	    SelManager := RepGrid.SelectionManager;

	    // Настраиваем синхронизацию измерений первого среза

	    SliceA := Report.DataArea.Slices.Item(0);

	    CalDimKey_A := SliceA.Selection.FindById("D_CALENDAR").Dimension.Key;

	    CalInst_A := SelManager.GetDimension(CalDimKey_A);

	    TerDimKey_A := SliceA.Selection.FindById("DIC_RF").Dimension.Key;

	    TerInst_A := SelManager.GetDimension(TerDimKey_A);

	    SGroups := Report.SyncGroups;

	    Group_a := SGroups.CreateGroup(CalInst_A);

	    Group_b := SGroups.CreateGroup(TerInst_A);

	    SyncItem := Group_a.Add(CalInst_A);

	    SyncItem := Group_b.Add(TerInst_A);

	    // Настраиваем синхронизацию измерений второго среза

	    SliceB := Report.DataArea.Slices.Item(1);

	    CalDimKey_B := SliceB.Selection.FindById("D_CALENDAR").Dimension.Key;

	    CalInst_B := SliceB.GetDimension(CalDimKey_B);

	    TerDimKey_B := SliceB.Selection.FindById("DIC_RF").Dimension.Key;

	    TerInst_B := SliceB.GetDimension(TerDimKey_B);

	    Compatible := SGroups.GetCompatibleItems(CalInst_A, "");

	    DimName := SliceA.Selection.FindById("D_CALENDAR").Dimension.Name;

	    Debug.WriteLine("Количество связей, для которых подходит данное измерение = " + Compatible.Count.ToString);

	    If SGroups.IsDimensionsCompatible(CalInst_A, "", CalInst_B, "") Then

	        Group_a.Add(CalInst_B);

	    Else

	        Return;

	    End If;

	    If SGroups.IsDimensionsCompatible(TerInst_A, "", TerInst_B, "") Then

	        Group_b.Add(TerInst_B);

	    Else

	        Return;

	    End If;

	    // Получаем элементы связи измерения территориальных образований

	    SG := SGroups.InGroup(TerInst_B);

	    SG.PropogateChanges(TerInst_B);

	    For i := 0 To SG.Count - 1 Do

	        SyncItem := SG.Item(i);

	        // Указываем, что связь только принимает отметку

	        SyncItem.SyncDirection := EaxDimensionSynchronizationDirection.ConsumeChangesOnly;

	        SyncAttr := SyncItem.SyncAttribute;

	        Count := SyncItem.SyncGroup.Count;

	        Key := SyncItem.Dimension.DimKey;

	        Debug.WriteLine("Количество элементов связи = " + Count.ToString);

	        Debug.WriteLine("Ключ измерения - " + Count.ToString);

	        If SyncAttr.Length > 0 Then

	            Debug.WriteLine("Атрибут синхронизации - " + SyncAttr);

	        Else

	            Debug.WriteLine("Нет синхронизации по атрибуту");

	        End If;

	    End For;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут созданы две связи для синхронизированных
 измерений. Первая связь для календарного измерения, вторая - для территориального.


См. также:


[IEaxSyncGroups](IEaxSyncGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
