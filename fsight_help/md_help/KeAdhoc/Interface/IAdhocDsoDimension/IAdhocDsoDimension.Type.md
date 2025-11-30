# IAdhocDsoDimension.Type

IAdhocDsoDimension.Type
-


# IAdhocDsoDimension.Type


## Синтаксис


Type: [AdhocDimensionType](../../Enums/AdhocDimensionType.htm);


## Описание


Свойство Type возвращает
 тип синхронизированного измерения.


## Комментарии


Данное свойство доступно только для чтения.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_SELECTIONMANAGER», в которой должна
 быть настроена синхронизация измерений.


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    adhoc: IAdhocReport;

    sync: IAdhocSynchronization;

    dims: IAdhocDimsSynchronization;

    dimindex: IAdhocDimSyncIndex;

    syncdims: IAdhocSyncDimensions;

    syncitem: IAdhocDimSyncItem;

    dsodim: IAdhocDsoDimension;

    dimtype: AdhocDimensionType;

Begin

    mb := MetabaseClass.Active;

    // Получим аналитическую панель

    adhoc := mb.ItemById("DASHBOARD_SELECTIONMANAGER").Edit As IAdhocReport;

    // Получим данные о синхронизации измерений

    sync := adhoc.Synchronization;

    // Получим коллекцию синхронизированных измерений

    dims := sync.Dimensions;

    // Получим индекс синхронизированного измерения

    dimindex := dims.Item(1);

    // Получим коллекцию синхронизированных индексов

    syncdims := dimindex.Dimensions;

    // Получим синхронизированный индекс

    syncitem := syncdims.Item(0);

    // Получим синхронизированное измерение

    dsodim := syncitem.Dimension;

    // Получим и выведем в окно консоли тип измерения

    dimtype := dsodim.Type;

    Debug.WriteLine("Тип измерения - " + dimtype.ToString);

End Sub UserProc;


После выполнения примера в окно консоли выведется тип синхронизированного
 измерения аналитической панели.


См. также:


[IAdhocDsoDimension](IAdhocDsoDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
