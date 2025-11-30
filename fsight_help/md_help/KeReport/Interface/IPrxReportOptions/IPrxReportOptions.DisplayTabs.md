# IPrxReportOptions.DisplayTabs

IPrxReportOptions.DisplayTabs
-


# IPrxReportOptions.DisplayTabs


## Синтаксис


DisplayTabs: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство DisplayTabs определяет,
 будут ли отображаться вкладки листов регламентного отчёта.


## Комментарии


Допустимые значения свойства соответствуют элементам перечисления [TriState](ForeSys.chm::/Enums/TriState.htm):


	- OnOption. Все вкладки
	 листов регламентного отчета отображаются;


	- OffOption. Все вкладки
	 листов регламентного отчета скрыты;


	- Undefined. Вкладки листов
	 регламентного отчета будут отображаться, если установлен флажок «[Вкладки
	 листов отчета](UiReport.chm::/desktop/Sheets/UiReport_Sheets.htm)»,
	 расположенный в группе «Показать»
	 на вкладке «Вид» ленты инструментов.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MOBj: IMetabaseObject;

	    Report: IPrxReport;

	    Options: IPrxReportOptions;

	Begin

	    MB := MetabaseClass.Active;

	    MOBj := MB.ItemById("REPORT").Edit;

	    Report := MOBj As IPrxReport;

	    Options := Report.Options;

	    Options.DisplayTabs := TriState.OffOption;

	    MOBj.Save;

	End Sub UserProc;


В результате выполнения примера будут скрыты вкладки листов отчета.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm) |
 [Работа
 с листами отчета](UiReport.chm::/desktop/Sheets/UiReport_Sheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
