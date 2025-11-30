# IAdhocDimSyncItem.Direction

IAdhocDimSyncItem.Direction
-


# IAdhocDimSyncItem.Direction


## Синтаксис


Direction: [AdhocDimSyncItemDirection](../../Enums/AdhocDimSyncItemDirection.htm);


## Описание


Свойство Direction определяет
 тип связи синхронизируемого измерения.


## Комментарии


По умолчанию все измерения используют двусторонний тип связи, то есть
 свойство Direction имеет значение
 [AdhocDimSyncItemDirection.Bidirectional](../../Enums/AdhocDimSyncItemDirection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC_SYNCDEM». Данная аналитическая панель
 должна содержать несколько синхронизируемых измерений.


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Adhoc: IAdhocReport;

    DimsSync: IAdhocDimsSynchronization;

    i: Integer;

    Index: IAdhocDimSyncIndex;

    Item: IAdhocDimSyncItem;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Adhoc := mb.ItemById("ADHOC_SYNCDEM").Edit As IAdhocReport;

    // Получаем синхронизируемые измерения

    DimsSync := Adhoc.Synchronization.Dimensions;

    // Выполняем итерации по всем индексам синхронизации

    // и указываем, что первое измерение в каждом индексе является односторонним

    For i := 0 To DimsSync.Count - 1 Do

        Index := DimsSync.Item(i);

        Item := Index.Dimensions.Item(1);

        Item.IsGeneral := False;

    End For;

    // Сохраняем изменения

    (Adhoc As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в аналитической панели для первого измерения
 в каждом индексе синхронизации тип связи изменён на односторонний.


См. также:


[IAdhocDimSyncItem](IAdhocDimSyncItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
