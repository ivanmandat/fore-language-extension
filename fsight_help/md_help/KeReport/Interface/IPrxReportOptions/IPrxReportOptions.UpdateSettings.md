# IPrxReportOptions.UpdateSettings

IPrxReportOptions.UpdateSettings
-


# IPrxReportOptions.UpdateSettings


## Синтаксис


UpdateSettings: [IViewerUpdateSettings](ForeSys.chm::/Interface/IViewerUpdateSettings/IViewerUpdateSettings.htm);


## Описание


Свойство UpdateSettings возвращает
 настройки параметров автообновления отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «REPORT».


Добавьте ссылки на системные сборки: Metabase и Report.


			Sub UserProc;

Var

    Metabase: IMetabase;

    Report: IPrxReport;

    ReportOption: IPrxReportOptions;

    UpdateOption: IViewerUpdateSettings;

Begin

    Metabase := MetabaseClass.Active;

    Report := Metabase.ItemById("REPORT").Edit As IPrxReport;

    ReportOption := Report.Options;

    UpdateOption := ReportOption.UpdateSettings;

    // Настроим параметры автоматического обновления

    UpdateOption.AutoUpdateByData := False;

    UpdateOption.AutoUpdateIntervalUnits := TimeUnits.Minutes;

    UpdateOption.AutoUpdateInterval := 10;

    UpdateOption.UpdateByIntervalEnabled := True;

    Debug.WriteLine("Параметры автоматического обновления отчета: " + UpdateOption.AsString);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет отключено обновление отчета при
 смене отметки. Отчет будет обновляться автоматически с интервалом 10 минут.
 В окно консоли будут выведены параметры автоматического обновления отчета.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
