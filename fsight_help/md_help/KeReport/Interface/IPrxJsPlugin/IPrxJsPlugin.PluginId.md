# IPrxJsPlugin.PluginId

IPrxJsPlugin.PluginId
-


# IPrxJsPlugin.PluginId


## Синтаксис


PluginId: String;


## Описание


Свойство PluginId определяет
 идентификатор [JS-плагина](DataAnalysis.chm::/Plugins/Plugins.htm),
 который используется для формирования листа.


## Комментарии


Идентификатор плагина должен соответствовать значению, заданному в атрибуте
 type, который содержится:


	- в разделе [<plugins>](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#plugins) конфигурационного файла [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
	 для веб-приложения;


	- в поле plugins конфигурационного файла [DBA.config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json)
	 для конструктора бизнес-приложений.


Примечание.
 Просмотр и редактирование сформированного листа доступно только в веб-приложении.
 При открытии листа в настольном приложении будет выдано соответствующее
 сообщение.


## Пример


Для выполнения примера предполагается наличие в репозитории [регламентного отчёта](UIReport.chm::/UiReport_purpose.htm)
 с идентификатором REPORT, к которому [подключен
 плагин](DataAnalysis.chm::/Plugins/Connecting_Plugins_Report.htm) с идентификатором PP.Ui.Prx.MyLabel.


Добавьте ссылки на системные сборки Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Report: IPrxReport;

		    Sheets: IPrxSheets;

		    Sheet: IPrxSheet;

		    Plugin: IPrxJsPlugin;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим регламентный отчёт

		    MObj := MB.ItemById("REPORT").Edit;

		    Report := MObj As IPrxReport;

		    // Добавим новый лист с плагином

		    Sheets := Report.Sheets;

		    Sheet := Sheets.Add("Лист с плагином", PrxSheetType.JsPlugin);

		    Plugin := Sheet As IPrxJsPlugin;

		    Plugin.PluginId := "PP.Ui.Prx.MyLabel";

		    // Сохраним изменения

		    MObj.Save;

		End Sub UserProc;


После выполнения действий в регламентном отчёте будет добавлен новый
 лист с плагином.


См. также:


[IPrxJsPlugin](IPrxJsPlugin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
