# IPrxReportOptions.PreviewEnableEdit

IPrxReportOptions.PreviewEnableEdit
-


# IPrxReportOptions.PreviewEnableEdit


## Синтаксис


PreviewEnableEdit: Boolean;


## Описание


Свойство PreviewEnableEdit определяет,
 включено ли в режиме просмотра отчёта редактирование ячеек, расположенных
 вне области данных.


## Комментарии


Свойство доступно для фигур при открытии на просмотр.


Допустимые значения:


	- True. Для ячеек, расположенных
	 вне области данных, включено редактирование;


	- False. Значение по умолчанию.
	 Для ячеек, расположенных вне области данных, отключено редактирование.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором REPORT, содержащего область данных.


Добавьте ссылки на системные сборки Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Options: IPrxReportOptions;

		Begin

		    MB := MetabaseClass.Active;

		    Report := MB.ItemById("REPORT").Edit As IPrxReport;

		    Options := Report.Options;

		    Options.PreviewEnableEdit := True;

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера в отчёте, открытом на просмотр, будет включена
 возможность редактирования ячеек, расположенных вне области данных.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
