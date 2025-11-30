# IAdhocReport.Synchronization

IAdhocReport.Synchronization
-


# IAdhocReport.Synchronization


## Синтаксис


Synchronization: [IAdhocSynchronization](../IAdhocSynchronization/IAdhocSynchronization.htm);


## Описание


Свойство Synchronization возвращает
 параметры синхронизации измерений аналитической панели.


## Комментарии


При добавлении нового источника данных его измерения автоматически добавляются
 в список синхронизируемых измерений.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC_SYNC» и куба с идентификатором «CUBE».


Добавьте ссылки на системные сборки: Adhoc, Cubes, Dimensions, Express,
 Matrix, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    cr_info: IMetabaseObjectCreateInfo;

    Cube: ICubeInstance;

    CubeDest: ICubeInstanceDestinations;

    MatrDS: IMatrixDataSource;

    new_ds: IEaxAnalyzer;

    Obj: IMetabaseObject;

    Adhoc: IAdhocReport;

    Sync: IAdhocSynchronization;

    Dims: IAdhocDimsSynchronization;

    DimIndex: IAdhocDimSyncIndex;

    i, j, k: Integer;

    SyncDims: IAdhocSyncDimensions;

    SyncItem: IAdhocDimSyncItem;

    DsoDim: IAdhocDsoDimension;

    DSObj: IAdhocDataSourceObject;

    DsoDims: IAdhocDsoDimensions;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Obj := mb.ItemById("ADHOC_SYNC").Edit;

    Adhoc := Obj As IAdhocReport;

    // Создаем новый
 экспресс-отчет

    cr_info := mb.CreateCreateInfo;

    cr_info.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    // Добавляем экспресс-отчет в аналитическую панель

    new_ds := Adhoc.AddNewDataSourceObject(cr_info.Id, cr_info).GetSourceObject As IEaxAnalyzer;

    // Задаем источник данных для экспресс-отчета

    Cube := mb.ItemById("CUBE").Open(Null) As ICubeInstance;

    CubeDest := Cube.Destinations;

    MatrDS := CubeDest.DefaultDestination As IMatrixDataSource;

    new_ds.DataSources.Add(MatrDS);

    // Получаем данные о синхронизации измерений

    Sync := Adhoc.Synchronization;

    Dims := Sync.Dimensions;

    // Выводим полученные данные в окно консоли

    Debug.WriteLine("Синхронизируемые измерения:");

    For i := 0 To Dims.Count - 1 Do

        DimIndex := Dims.Item(i);

        Debug.WriteLine(" -" + DimIndex.Name);

        If DimIndex.Selection <> Null Then

            Debug.WriteLine("   Отметка: " + DimIndex.Selection.ToString);

        End If;

        SyncDims := DimIndex.Dimensions;

        Debug.WriteLine("   Связи:");

        For j := 0 To SyncDims.Count - 1 Do

            SyncItem := SyncDims.Item(J);

            Debug.WriteLine("   - идентификатор:" + SyncItem.Id);

            Debug.WriteLine("   - атрибут синхронизации: " + SyncItem.SyncAttribute);

            DsoDim := SyncItem.Dimension;

            Debug.WriteLine("      - измерение источника данных: " + DsoDim.Name);

            Debug.WriteLine("      - отметка: " + DsoDim.Selection.ToString);

            DSObj := DsoDim.DataSource;

            DsoDims := DSObj.Dimensions;

            Debug.WriteLine("      - общие синхронизируемые измерения источника:");

            For k := 0 To DsoDims.Count - 1 Do

                Debug.WriteLine("     - " + DsoDims.Item(k).Name);

            End For;

        End For;

    End For;

    Obj.Save;

End Sub UserProc;


Результат выполнения примера: в аналитическую панель добавлен источник
 данных, основанный на кубе «CUBE». Информация о синхронизируемых измерениях
 аналитической панели выводятся в окно консоли.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
