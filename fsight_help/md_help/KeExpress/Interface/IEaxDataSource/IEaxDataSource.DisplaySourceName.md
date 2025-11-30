# IEaxDataSource.DisplaySourceName

IEaxDataSource.DisplaySourceName
-


# IEaxDataSource.DisplaySourceName


## Синтаксис


DisplaySourceName: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство DisplaySourceName определяет,
 будут ли отображаться наименования источников.


## Комментарии


По умолчанию наименования источников отображаются.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT. У отчёта должно быть несколько источников
 данных.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Exp: IEaxAnalyzer;

	    ExpDA: IEaxDataArea;

	    ExpDAS: IEaxDataAreaSources;

	    ExpDASS: IEaxDataAreaSource;

	    ExpDs: IEaxDataSources;

	    ExpD: IEaxDataSource;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Exp := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим аналитическую область экспресс-отчёта и её источники данных

	    ExpDA := Exp.DataArea;

	    ExpDAS := ExpDA.DataSources;

	    ExpDASS := ExpDAS.Item(0);

	    // Получим виртуальные источники данных

	    ExpDs := ExpDASS.VirtualSources;

	    // Получим первый источник

	    ExpD := ExpDs.Item(0);

	    // Отключим выведение наименования источника

	    ExpD.DisplaySourceName := TriState.OffOption;

	    // Сохраним экспресс-отчёт

	    (Exp As IMetabaseObject).Save;

	End Sub UserProc;


См. также:


[IEaxDataSource](IEaxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
