# IAdhocDataSourceObject.ParamValues

IAdhocDataSourceObject.ParamValues
-


# IAdhocDataSourceObject.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](kesom.chm::/interface/imetabaseobjectparamvalues/imetabaseobjectparamvalues.htm);


## Описание


Свойство ParamValues возвращает
 коллекцию значений параметров источника данных.


## Комментарии


При задании значения ParamValues
 выполняется переоткрытие зависимого объекта, перестраиваются его измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели «DASHBOARD_PARAMS».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DsObjs: IAdhocDataSourceObjects;

    i, j: Integer;

    DsObj: IAdhocDataSourceObject;

    ParamValues: IMetabaseObjectParamValues;

    ParamVal: IMetabaseObjectParamValue;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Dashboard := mb.ItemById("DASHBOARD_PARAMS").Bind As IAdhocReport;

    // Получаем источники данных аналитической панели

    DsObjs := Dashboard.DataSourceObjects;

    // Перебираем источники данных

    For i := 0 To DsObjs.Count - 1 Do

        DsObj := DsObjs.Item(i);

        // Получаем значения параметров источника данных

        ParamValues := DsObj.ParamValues;

        // Перебираем значения параметров

        For j := 0 To ParamValues.Count - 1 Do

            ParamVal := ParamValues.Item(j);

            Debug.WriteLine(" - параметр: " + ParamVal.Name);

            Debug.WriteLine(" - значение: " + ParamVal.Value);

        End For;

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 параметров для источников данных аналитической панели.


См. также:


[IAdhocDataSourceObject](IAdhocDataSourceObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
