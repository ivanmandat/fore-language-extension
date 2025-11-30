# IPrxReport.DelayedLoad

IPrxReport.DelayedLoad
-


# IPrxReport.DelayedLoad


## Синтаксис


DelayedLoad: Boolean;


## Описание


Свойство DelayedLoad определяет
 возможность отложенной загрузки листов регламентного отчёта.


## Комментарии


Допустимые значения:


	- True. Загрузка всех
	 листов отложена. Загружается только активный лист;


	- False. Загружаются все
	 листы отчёта. Значение по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT, который содержит два листа.


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Sheet: IPrxSheet;

		    Sheets: IPrxSheets;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим регламентный отчёт

		    Report := MB.ItemById("REPORT").Edit As IPrxReport;

		    // Установим отсроченную загрузку листов

		    Report.DelayedLoad := True;

		    // Получим листы отчёта

		    Sheets := Report.Sheets;

		    // Получим второй лист отчёта

		    Sheet := Sheets.Item(1);

		    // Загрузим второй лист отчёта, если он не загружен

		        If Not Sheet.IsLoaded Then

		            Sheet.Load;

		        End If;

		    // Сохраним отчёт

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для отчёта будет задана отложенная загрузка
 листов, при открытии отчёта будет загружен активный и второй лист отчёта.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
