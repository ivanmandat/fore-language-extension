# IAdhocDataSourceObjects.AutoUpdateSources

IAdhocDataSourceObjects.AutoUpdateSources
-


# IAdhocDataSourceObjects.AutoUpdateSources


## Синтаксис


AutoUpdateSources: Boolean;


## Описание


Свойство AutoUpdateSources
 определяет, обновлять ли автоматически источники данных аналитической
 панели.


## Комментарии


На значение AutoUpdateSources
 влияет свойство [IAdhocReport.AutoUpdateSources](../IAdhocReport/IAdhocReport.AutoUpdateSources.htm).


Допустимые значения:


	- True. Автоматически
	 обновлять источники данных;


	- False. Не обновлять
	 автоматически источники данных.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_UPD».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    DashboardObj: IMetabaseObject;

    Dashboard: IAdhocReport;

    DSO: IAdhocDataSourceObjects;

Begin

    mb := MetabaseClass.Active;

    DashboardObj := mb.ItemById("DASHBOARD_UPD").Edit;

    Dashboard := DashboardObj As IAdhocReport;

    DSO := Dashboard.DataSourceLinkedObjects;

    If Not DSO.AutoUpdateSources Then

        DSO.AutoUpdateSources := True;

    End If;

    DashboardObj.Save;

End Sub UserProc;


В результате выполнения примера для источников данных аналитической
 панели будет включено автоматическое обновление.


См. также:


[IAdhocDataSourceObjects](IAdhocDataSourceObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
