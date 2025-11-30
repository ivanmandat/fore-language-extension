# IEaxAnalyzerOptions.UseSharedEventHandler

IEaxAnalyzerOptions.UseSharedEventHandler
-


# IEaxAnalyzerOptions.UseSharedEventHandler


## Синтаксис


UseSharedEventHandler: Boolean;


## Описание


Свойство UseSharedEventHandler
 определяет, будет ли экспресс-отчет использовать обработчик событий.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Экспресс-отчет будет использовать обработчик событий;


	- False. Экспресс-отчет
	 не будет использовать обработчик событий.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_EVENTHANDLER.


Также в репозитории необходимо наличие модуля-обработчика событий с
 идентификатором EXPRESSREPEVENTS, который содержит класс «ExpressEvents»
 для реализации событий. Описание данного класса приведено в примере для
 [IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer](../IEaxAnalyzerUserEvents/IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer.htm).


Добавьте ссылки на системные сборки: Express, Fore, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Options: IEaxAnalyzerOptions;

	    SParams: ISharedParams;

	    ShPar: IMetabaseObjectDescriptor;

	    EventHandlers: ISharedEventHandlers;

	    EventHandler: ISharedEventHandler;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим область глобальных переменных

	    ShPar := MB.SpecialObject(MetabaseSpecialObject.SharedParams);

	    // Получим параметры репозитория

	    SParams := Shpar.Edit As ISharedParams;

	    // Получим объект для работы с обработчиком событий отчетов

	    EventHandlers := SParams.EventHandlers;

	    // Будем использовать обработчик событий отчетов

	    EventHandlers.Enabled := True;

	    // Получим и активируем обработчик событий экспресс-отчетов

	    EventHandler := EventHandlers.EventHandler(SharedEventHandlerType.ExpressReport);

	    EventHandler.Enabled := True;

	    // Подключим обработчик событий

	    EventHandler.Object := MB.ItemById("EXPRESSREPEVENTS");

	    // Установим класс модуля

	    EventHandler.EventsClass := "ExpressRep_Events";

	    // Сохраним изменения в параметрах репозитория

	    (SParams As ImetabaseObject).Save;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS_EVENTHANDLER").Edit As IEaxAnalyzer;

	    // Получим параметры отчета

	    Options := Analyzer.Options;

	    // Будем использовать обработчик событий

	    If Options.UseSharedEventHandler = False Then

	        Options.UseSharedEventHandler := True;

	    End If;

	    // Сохраним изменения в экспресс-отчете

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера экспресс-отчет будет использовать указанный
 обработчик событий.


См. также:


[IEaxAnalyzerOptions](IEaxAnalyzerOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
