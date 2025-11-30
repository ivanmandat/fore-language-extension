# IEaxOptionsBase.UpdateSettings

IEaxOptionsBase.UpdateSettings
-


# IEaxOptionsBase.UpdateSettings


## Синтаксис


UpdateSettings: [IViewerUpdateSettings](ForeSys.chm::/Interface/IViewerUpdateSettings/IViewerUpdateSettings.htm);


## Описание


Свойство UpdateSettings возвращает
 настройки параметров автообновления отчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Express: IEaxAnalyzer;

	    ExpressOption: IEaxAnalyzerOptions;

	    UpdateOption: IViewerUpdateSettings;

	Begin

	    Metabase := MetabaseClass.Active;

	    Express := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    ExpressOption := Express.Options;

	    UpdateOption := ExpressOption.UpdateSettings;

	    // Настроим параметры автоматического обновления

	    UpdateOption.AutoUpdateByData := False;

	    UpdateOption.AutoUpdateIntervalUnits := TimeUnits.Minutes;

	    UpdateOption.AutoUpdateInterval := 10;

	    UpdateOption.UpdateByIntervalEnabled := True;

	    Debug.WriteLine("Параметры автоматического обновления отчета: " + UpdateOption.AsString);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет отключено обновление отчета при
 смене отметки. Отчет будет обновляться автоматически с интервалом 10 минут.
 В окно консоли будут выведены параметры автоматического обновления отчета.


См. также:


[IEaxOptionsBase](IEaxOptionsBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
