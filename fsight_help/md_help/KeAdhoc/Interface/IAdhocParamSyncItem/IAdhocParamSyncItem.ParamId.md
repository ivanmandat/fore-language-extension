# IAdhocParamSyncItem.ParamId

IAdhocParamSyncItem.ParamId
-


# IAdhocParamSyncItem.ParamId


## Синтаксис


ParamId: String;


## Описание


Свойство ParamId возвращает
 идентификатор параметра.


## Комментарии


Для установки значения параметра используйте свойство [IAdhocParamSyncItem.Value](IAdhocParamSyncItem.Value.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_PARAMS». Данная панель должна содержать
 связи для синхронизации параметров.


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    Sync: IAdhocSynchronization;

    ParamSync: IAdhocParamSynchronization;

    i, j: Integer;

    ParamSyncInd: IAdhocParamSyncIndex;

    SyncParams: IAdhocSyncParams;

    Param: IAdhocParamSyncItem;

    Src: IAdhocDataSourceObject;

    SrcObj: IMetabaseObject;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Dashboard := mb.ItemById("DASHBOARD_PARAMS").Bind As IAdhocReport;

    // Получаем параметры синхронизации аналитической панели

    Sync := Dashboard.Synchronization;

    // Получаем связи для синхронизации параметров

    ParamSync := Sync.Params;

    // Перебираем связи

    For i := 0 To ParamSync.Count - 1 Do

        ParamSyncInd := ParamSync.Item(0);

        // Получаем параметры, входящие в связь

        SyncParams := ParamSyncInd.Params;

        // Перебираем параметры

        For j := 0 To SyncParams.Count - 1 Do

            // Получаем параметр и выводим информацию о нем

            Param := SyncParams.Item(j);

            Debug.WriteLine("Идентификатор параметра: " + Param.ParamId);

            Debug.WriteLine("Значение параметра: " + Param.Value);

            Src := Param.Source;

            SrcObj := Src.GetSourceObject As IMetabaseObject;

            Debug.WriteLine("Источник данных: " + SrcObj.Name);

            Debug.WriteLine("Связь, в которую входит параметр: " + Param.SyncIndex.Name);

            Debug.WriteLine("");

        End For;

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о синхронизируемых параметрах аналитической панели.


См. также:


[IAdhocParamSyncItem](IAdhocParamSyncItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
