# IAdhocReport.CopyDataSourceObject

IAdhocReport.CopyDataSourceObject
-


# IAdhocReport.CopyDataSourceObject


## Синтаксис


CopyDataSourceObject(Source: [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm)):
 [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm);


## Параметры


Source. Копируемый источник
 данных.


## Описание


Метод CopyDataSourceObject
 создаёт копию указанного источника данных.


## Комментарии


В созданной копии сохраняются все настройки исходного источника данных.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_COPYOBJ», содержащей несколько блоков.


Добавьте ссылку на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DsObj, CopyDsObj: IAdhocDataSourceObject;

Begin

    mb := MetabaseClass.Active;

    Dashboard := mb.ItemById("DASHBOARD_COPYOBJ").Edit As IAdhocReport;

    DsObj := Dashboard.DataSourceObjects.Item(0);

    CopyDsObj := Dashboard.CopyDataSourceObject(DsObj);

    (Dashboard As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет создана копия первого источника
 данных аналитической панели.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
