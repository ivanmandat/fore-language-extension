# IAdhocReport.AutoUpdateSources

IAdhocReport.AutoUpdateSources
-


# IAdhocReport.AutoUpdateSources


## Синтаксис


AutoUpdateSources: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AutoUpdateSources
 определяет, используется ли автоматическое обновление в аналитической
 панели.


## Комментарии


Значение AutoUpdateSources влияет
 на значение свойства [IAdhocDataSourceObjects.AutoUpdateSources](../IAdhocDataSourceObjects/IAdhocDataSourceObjects.AutoUpdateSources.htm).
 Если в AutoUpdateSources
 установить:


	- TriState.Undefined.
	 Значение [IAdhocDataSourceObjects.AutoUpdateSources](../IAdhocDataSourceObjects/IAdhocDataSourceObjects.AutoUpdateSources.htm)
	 не изменится;


	- TriState.OnOption. [IAdhocDataSourceObjects.AutoUpdateSources](../IAdhocDataSourceObjects/IAdhocDataSourceObjects.AutoUpdateSources.htm)
	 будет установлено в True;


	- TriState.OffOption. [IAdhocDataSourceObjects.AutoUpdateSources](../IAdhocDataSourceObjects/IAdhocDataSourceObjects.AutoUpdateSources.htm)
	 будет установлено в False.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_UPD».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    DashboardObj: IMetabaseObject;

    Dashboard: IAdhocReport;

Begin

    mb := MetabaseClass.Active;

    DashboardObj := mb.ItemById("DASHBOARD_UPD").Edit;

    Dashboard := DashboardObj As IAdhocReport;

    If (Dashboard.AutoUpdateSources = TriState.OffOption) Or (Dashboard.AutoUpdateSources = TriState.Undefined) Then

        Dashboard.AutoUpdateSources := TriState.OnOption;

    End If;

    DashboardObj.Save;

End Sub UserProc;


В результате выполнения примера для аналитической панели будет включено
 автоматическое обновление.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
