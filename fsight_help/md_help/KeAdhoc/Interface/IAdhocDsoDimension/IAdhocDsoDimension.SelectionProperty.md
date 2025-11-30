# IAdhocDsoDimension.SelectionProperty

IAdhocDsoDimension.SelectionProperty
-


# IAdhocDsoDimension.SelectionProperty


## Синтаксис


SelectionProperty: Boolean;


## Описание


Свойство SelectionProperty
 определяет, сохранять ли группы и схемы отметки, примененные к измерению.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Сохраняются группы и схемы отметки, примененные к измерению;


	- False. Не сохраняются
	 группы и схемы отметки, примененные к измерению.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC_SYNC». В данной аналитической панели должна
 быть настроена синхронизация измерений.


			Sub UserProc;

Var

    mb: IMetabase;

    Obj: IMetabaseObject;

    Adhoc: IAdhocReport;

    Sync: IAdhocSynchronization;

    Dims: IAdhocDimsSynchronization;

    DimIndex: IAdhocDimSyncIndex;

    i, j: Integer;

    SyncDims: IAdhocSyncDimensions;

    SyncItem: IAdhocDimSyncItem;

    DsoDim: IAdhocDsoDimension;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Obj := mb.ItemById("ADHOC_SYNC").Edit;

    Adhoc := Obj As IAdhocReport;

    // Получаем данные о синхронизации измерений

    Sync := Adhoc.Synchronization;

    Dims := Sync.Dimensions;

    // Настраиваем поведение
 групп и схем отметки, применяемых к измерениям

    For i := 0 To Dims.Count - 1 Do

        DimIndex := Dims.Item(i);

        DimIndex.SelectionProperty := False;

        SyncDims := DimIndex.Dimensions;

        For j := 0 To SyncDims.Count - 1 Do

            SyncItem := SyncDims.Item(J);

            DsoDim := SyncItem.Dimension;

            DsoDim.SelectionProperty := False;

        End For;

    End For;

    Obj.Save;

End Sub UserProc;


После выполнения примера в аналитической панели «ADHOC_SYNC» не
 будут сохраняться группы и схемы отметки, примененные к измерениям источников
 данных.


См. также:


[IAdhocDsoDimension](IAdhocDsoDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
