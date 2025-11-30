# IAdhocDataSourceObject.TrackAreaSelection

IAdhocDataSourceObject.TrackAreaSelection
-


# IAdhocDataSourceObject.TrackAreaSelection


## Синтаксис


TrackAreaSelection: Boolean;


## Описание


Свойство TrackAreaSelection
 определяет, отслеживать ли выбранную область визуализатора.


## Комментарии


Допустимые значения:


	- True. Отслеживать выбранную
	 область визуализатора;


	- False. Не отслеживать
	 выбранную область визуализатора.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_SYNC».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DSObjs: IAdhocDataSourceObjects;

    DSO: IAdhocDataSourceObject;

    i: Integer;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Dashboard := mb.ItemById("DASHBOARD_SYNC").Edit As IAdhocReport;

    // Перебираем источники данных аналитической панели

    DSObjs := Dashboard.DataSourceObjects;

    For i := 0 To DSObjs.Count - 1 Do

        DSO := DSObjs.Item(i);

        DSO.TrackAreaSelection := True;

    End For;

    (Dashboard As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для каждого источника данных аналитической
 панели будет отслеживаться выбранная область визуализатора.


См. также:


[IAdhocDataSourceObject](IAdhocDataSourceObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
