# IEaxGridViewSettings.UseStyleFormatting

IEaxGridViewSettings.UseStyleFormatting
-


# IEaxGridViewSettings.UseStyleFormatting


## Синтаксис


UseStyleFormatting: Boolean;


## Описание


Свойство UseStyleFormatting
 определяет, будет ли использоваться собственное оформления для таблицы
 данных.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Будет использоваться собственное оформление;


	- False. Использовать
	 [оформление
	 текущего листа](UiAnalyticalArea.chm::/Parameters/Parameters.htm).


Свойство актуально, если осуществляется работа с аналитической областью
 данных в регламентном отчете.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REG_REPORT. Отчёт содержит аналитическую область
 данных, в которой присутствуют формулы.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    PivSlice: IEaxDataAreaSlice;

	    Grid: IEaxGrid;

	    ViewSettings: IEaxGridViewSettings;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Rep := MB.ItemById("REG_REPORT").Edit As IPrxReport;

	    // Получим срез аналитической области данных

	    PivSlice := Rep.DataArea.Slices.Item(0);

	    // Будем использовать оформление текущего листа

	    Grid := PivSlice.Views.Item(0) As IEaxGrid;

	    ViewSettings := Grid.ViewSettings;

	    ViewSettings.UseStyleFormatting := False;

	    // Будем использовать формулы текущего листа

	    ViewSettings.UseTabSheetFormulas := True;

	    // Обновим отчет и сохраним изменения

	    Rep.Recalc;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера таблица данных будет использовать оформление
 текущего листа, формулы в таблице будут использоваться.


См. также:


[IEaxGridViewSettings](IEaxGridViewSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
