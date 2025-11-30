# Подключение плагина к регламентному отчёту

Подключение плагина к регламентному отчёту
-


# Подключение плагина к регламентному отчёту


Для расширения возможностей построения [регламентного отчёта](UIReport.chm::/UiReport_purpose.htm)
 доступно подключение [плагина](Plugins.htm) на новом листе
 отчёта. Аналогично выполняется подключение плагина к форме ввода.


Для подключения плагина к регламентному отчёту:


	- Добавьте [файлы плагина](Create_Plugin.htm) <наименование плагина>.js и <наименование плагина>.css в
	 папку установки веб-приложения или конструктора бизнес-приложений.


	Веб-приложение

	 Конструктор
	 бизнес-приложений

		Путь до папки установки веб-приложения:


			- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics
			 Platform 10.x Web Application;


			- в ОС Linux: /opt/foresight/fp10.x-webserver.


		Путь до папки установки конструктора
		 бизнес-приложений:


			- в ОС Windows: C:\Program Files (x86)\Foresight\Designer
			 of Business Application 10.x Web Server;


			- в ОС Linux: /opt/foresight/dba/10.x.


Совет.
 Для удобного использования плагинов создайте отдельную папку plugins,
 в которой будут размещаться плагины.


	- Добавьте описание плагина в конфигурационном файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
	 для веб-приложения или [DBA.config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json)
	 для конструктора бизнес-приложений.


	PP.xml DBA.config.json

		В файле PP.xml для описания плагина используйте раздел [<plugins>](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#plugins):


<plugins>
    <plugin type="PP.Ui.Prx.MyLabel" path="../plugins/MyLabel.js" css="../plugins/MyLabel.css" name="MyLabel" loaded="true"/>
    <plugin ... />
</plugins>


		В файле DBA.config.json для описания плагина используйте поле [plugins](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#plugins):


"plugins": [
    {
        "Type": "PP.Ui.Prx.MyLabel", //идентификатор плагина, соответствующий типу экземпляра объекта
        "Path": "../plugins/MyLabel.js", //относительный путь до JS-файла плагина
        "Css": "../plugins/MyLabel.css", //относительный путь до CSS-файла со стилями плагина
        "Name": "MyLabel", //наименование плагина
        "Loaded": true //способ загрузки плагина
    },
    {
        ...
    }
]


Важно.
 Для преднастроенных плагинов зарезервированы идентификаторы: PP.Ui.Dashboard.Sankey
 - «Sankey-диаграмма»; PP.Ui.Dashboard.Gantt
 - «Диаграмма Ганта»; PP.Ui.Dashboard.Indicator
 - «Индикатор». Убедитесь, что
 атрибут type содержит идентификатор,
 отличный от зарезервированных.


	- Перезапустите серверную часть [веб-приложения](setup.chm::/UiWebSetup/03_Setup_Web/Web_Server_Restart.htm)/[конструктора
	 бизнес-приложений](setup.chm::/Extensions/Restart_Backend_Designer_of_Business_Applications.htm).


	- Сформируйте лист с плагином в регламентном отчёте. Формирование
	 листа с плагином осуществляется в среде разработки на языке программирования
	 [Fore](Fore.chm::/Fore_Title.htm) с помощью
	 свойства [IPrxJsPlugin.PluginId](KeReport.chm::/Interface/IPrxJsPlugin/IPrxJsPlugin.PluginId.htm).
	 В примере используется регламентный отчёт с идентификатором REPORT
	 и плагин с идентификатором PP.Ui.Prx.MyLabel.


Добавьте ссылки на системные сборки Metabase,
 Report и выполните модуль:


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
 лист с подключенным плагином.


Примечание.
 Лист с подключенным плагином недоступен для [экспорта](UIReport.chm::/desktop/Reports/OperationReport/UiReport_Reports_Operation_Export.htm)
 и [печати](UIReport.chm::/desktop/Reports/OperationReport/UiReport_Reports_Operation_Print.htm).


См. также:


[Плагины](Plugins.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
