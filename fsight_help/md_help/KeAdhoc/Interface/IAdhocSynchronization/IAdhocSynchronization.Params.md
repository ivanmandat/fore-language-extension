# IAdhocSynchronization.Params

IAdhocSynchronization.Params
-


# IAdhocSynchronization.Params


## Синтаксис


Params: [IAdhocParamSynchronization](../IAdhocParamSynchronization/IAdhocParamSynchronization.htm);


## Описание


Свойство Params возвращает
 коллекцию связей для синхронизации параметров.


## Комментарии


Для работы с синхронизируемыми измерениями используйте свойство [IAdhocSynchronization.Dimensions](IAdhocSynchronization.Dimensions.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_PARAMS». Данная панель должна содержать
 два параметрических источника данных. Параметры источников должны быть
 вещественные или целочисленные и иметь идентификатор «ITEM1».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    Sync: IAdhocSynchronization;

    ParamSync: IAdhocParamSynchronization;

    i: Integer;

    ParamSyncInd: IAdhocParamSyncIndex;

    SyncParams: IAdhocSyncParams;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Dashboard := mb.ItemById("DASHBOARD_PARAMS").Edit As IAdhocReport;

    // Получаем параметры синхронизации аналитической панели

    Sync := Dashboard.Synchronization;

    // Получаем связи для синхронизации параметров

    ParamSync := Sync.Params;

    // Удаляем все связи

    For i := 0 To ParamSync.Count - 1 Do

        ParamSync.Remove(0);

    End For;

    // Добавляем связь для синхронизации параметров

    ParamSyncInd := ParamSync.Add("LINK");

    // Задаем наименование связи

    ParamSyncInd.Name := "Синхронизация параметра";

    // Получаем параметры, входящие в связь

    SyncParams := ParamSyncInd.Params;

    // Добавляем в связь параметры

    SyncParams.Add(Dashboard.DataSourceObjects.Item(0), "ITEM1");

    SyncParams.Add(Dashboard.DataSourceObjects.Item(1), "ITEM1");

    // Задаем значение параметров в связи

    ParamSyncInd.Value := 4;

    If Not ParamSyncInd.AutoUpdate Then

        ParamSyncInd.Apply;

    End If;

    // Сохраняем изменения

    (Dashboard As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет создана связь для синхронизации
 параметров источников данных. Для параметров в связи будет задано и применено
 новое значение.


См. также:


[IAdhocSynchronization](IAdhocSynchronization.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
