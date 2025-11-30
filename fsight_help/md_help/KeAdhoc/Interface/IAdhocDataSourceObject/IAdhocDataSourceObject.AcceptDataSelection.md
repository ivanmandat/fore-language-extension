# IAdhocDataSourceObject.AcceptDataSelection

IAdhocDataSourceObject.AcceptDataSelection
-


# IAdhocDataSourceObject.AcceptDataSelection


## Синтаксис


AcceptDataSelection: Boolean;


## Описание


Свойство AcceptDataSelection
 определяет, конвертировать ли отметку по выделению в визуальную отметку.


## Комментарии


Допустимые значения:


	- True. Отметка по выделению
	 конвертируется в визуальную отметку;


	- False. Отметка по выделению
	 не конвертируется в визуальную отметку.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором DASHBOARD_SELECTION. Данная панель должна содержать
 только два блока и они должны использовать один и тот же источник данных.


Добавьте ссылки на системные сборки: Adhoc, Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    AdHoc: IAdHocReport;

    Mobj: IMetabaseObject;

    DSObjects: IAdhocDataSourceObjects;

    DSobj1, DSobj2: IAdhocDataSourceObject;

    DSdims1, DSdims2: IAdhocDsoDimensions;

    Di1, Di2, Dc1, Dc2: Integer;

    CurDim1, CurDim2: IAdhocDsoDimension;

    DimKey: Integer;

    Sync : IAdhocSynchronization;

    DimSync: IAdhocDimsSynchronization;

    SyncIdx: IAdhocDimSyncIndex;

    ConIdx: integer;

Begin

    // Получаем аналитическую панель

    mb := MetabaseClass.Active;

    Mobj := mb.ItemById("DASHBOARD_SELECTION").Edit;

    AdHoc := Mobj As IAdHocReport;

    // Получаем параметры синхронизации

    Sync := AdHoc.Synchronization;

    DimSync := Sync.Dimensions;

    DimSync.Clear;

    // Получаем источники данных аналитической панели

    DSObjects := AdHoc.DataSourceObjects;

    DSobj1 := DSObjects.Item(0);

    DSobj2 := DSObjects.Item(1);

    // Получаем измерения источников данных

    DSdims1 := DSobj1.Dimensions;

    DSdims2 := DSobj2.Dimensions;

    Dc1 := DSdims1.Count;

    Dc2 := DSdims2.Count;

    ConIdx := 0;

    // Настраиваем синхронизацию по всем измерениям источников данных

    For Di1 := 0 To Dc1 - 1 Do

        CurDim1 := DSdims1.Item(Di1);

        If CurDim1.Type = AdhocDimensionType.SelectedArea Then

            DimKey := CurDim1.Dimension.Key;

            For Di2 := 0 To Dc2 - 1 Do

                CurDim2 := DSdims2.Item(Di2);

                If CurDim2.Type = AdhocDimensionType.SelectedArea Then

                    If DimKey = CurDim2.Dimension.Key Then

                        ConIdx := ConIdx + 1;

                        SyncIdx := DimSync.Add("Con" + ConIdx.ToString);

                        SyncIdx.Dimensions.Add(CurDim1);

                        SyncIdx.Dimensions.Add(CurDim2);

                    End If;

                End If;

            End For;

        End If;

    End For;

    // Отключаем конвертацию отметки по выделению в визуальную отметку

    DSobj1.AcceptDataSelection := False;

    // Сохраняем изменения

    Mobj.Save

End Sub UserProc;


В результате выполнения примера для блоков аналитической панели будет
 настроена синхронизация выделенных данных.


См. также:


[IAdhocDataSourceObject](IAdhocDataSourceObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
