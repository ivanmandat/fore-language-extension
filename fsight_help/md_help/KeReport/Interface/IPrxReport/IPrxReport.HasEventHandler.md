# IPrxReport.HasEventHandler

IPrxReport.HasEventHandler
-


# IPrxReport.HasEventHandler


## Синтаксис


HasEventHandler: Boolean;


## Описание


Свойство HasEventHandler определяет,
 подключен ли обработчик событий к регламентному отчёту.


## Комментарии


Допустимые значения:


	- True. Обработчик подключен;


	- False. Обработчик не
	 подключен.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		Begin

		    // Получим текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получим регламентный отчёт

		    Report := MB.ItemById("REPORT").Bind As IPrxReport;

		    // Выведем наличие обработчиков событий

		    Debug.WriteLine(Report.HasEventHandler.ToString);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о наличии подключенных обработчиков событий.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
