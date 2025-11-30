# IAdhocReport.UpdateSettings

IAdhocReport.UpdateSettings
-


# IAdhocReport.UpdateSettings


## Синтаксис Fore


UpdateSettings: [IViewerUpdateSettings](ForeSys.chm::/Interface/IViewerUpdateSettings/IViewerUpdateSettings.htm);


## Описание


Свойство UpdateSettings возвращает
 настройки параметров автообновления аналитической панели.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC».


Добавьте ссылки на системные сборки: Adhoc и Metabase.


			Sub UserProc;

Var

    Metabase: IMetabase;

    Adhoc: IAdhocReport;

    UpdateOption: IViewerUpdateSettings;

Begin

    Metabase := MetabaseClass.Active;

    Adhoc := Metabase.ItemById("ADHOC").Edit As IAdhocReport;

    UpdateOption := Adhoc.UpdateSettings;

    // Настроим параметры автоматического обновления

    UpdateOption.AutoUpdateByData := False;

    UpdateOption.AutoUpdateIntervalUnits := TimeUnits.Minutes;

    UpdateOption.AutoUpdateInterval := 10;

    UpdateOption.UpdateByIntervalEnabled := True;

    Debug.WriteLine("Параметры автоматического обновления отчета: " + UpdateOption.AsString);

    (Adhoc As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет отключено обновление аналитической
 панели при смене отметки. Аналитическая панель будет обновляться автоматически
 с интервалом 10 минут. В окно консоли будут выведены параметры автоматического
 обновления аналитической панели.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
