# IPrxControlAppearance.Report

IPrxControlAppearance.Report
-


# IPrxControlAppearance.Report


## Синтаксис


Report: Boolean;


## Описание


Свойство Report определяет признак
 использования элемента управления на всех листах.


## Комментарии


Допустимые значения:


	- True. Элемент управления
	 будет отображен для всех листов. Значение по умолчанию;


	- False. Элемент управления
	 будет отображен для конкретных листов.


Используйте свойство [IPrxControlAppearance.Sheet](IPrxControlAppearance.Sheet.htm)
 для определения листов, на которых будет отображен элемент управления.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. Одним из измерений источника отчёта является
 справочник с идентификатором D_TO.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Ctrls: IPrxReportControls;

	    Ctrl: IPrxControl;

	    Sheet: IPrxSheet;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Rep := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем коллекцию элементов управления

	    Ctrls := Rep.Controls.Edit;

	    // Добавляем раскрывающийся список

	    Ctrl := Ctrls.Add(Null);

	    Ctrl.AutoRecalc := True;

	    Ctrl.Binding := "UI=""DimCombo""";

	    Ctrl.Dimension := Rep.DataSources.Item(0).Slices.FindByName("Срез1").Dimensions.FindById("D_TO");

	    Ctrl.Appearance.Report := False;

	    Ctrl.Appearance.Sheet(Rep.Sheets.Item(0)) := True;

	    Ctrl.Appearance.Sheet(Rep.Sheets.Item(1)) := True;

	    // Добавляем редактор целых чисел

	    Ctrl := Ctrls.Add(Null);

	    Ctrl.AutoRecalc := True;

	    Ctrl.Binding := "UI=""IntegerEdit""VALUE=""50""";

	    Ctrl.Appearance.Report := False;

	    Ctrl.Appearance.Sheet(Rep.Sheets.Item(0)) := True;

	    Ctrl.Appearance.Sheet(Rep.Sheets.Item(1)) := True;

	    Ctrls.Save;

	    // Определяем порядок элементов управления
	 для Листа1

	    Sheet := Rep.Sheets.Item(0);

	    Rep.Controls.SheetControls(Sheet).Move(1, 0);

	End Sub UserProc;


После выполнения примера будут созданы два элемента управления для первых
 двух листов отчета. Для первого листа отчета изменен порядок элементов.


См. также:


[IPrxControlAppearance](IPrxControlAppearance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
