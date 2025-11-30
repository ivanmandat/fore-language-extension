# IAdhocDataSourceObjects.AutoSyncNewSource

IAdhocDataSourceObjects.AutoSyncNewSource
-


# IAdhocDataSourceObjects.AutoSyncNewSource


## Синтаксис


AutoSyncNewSource: Boolean;


## Описание


Свойство AutoSyncNewSource определяет,
 выполнять ли автоматическое связывание и синхронизацию
 измерений источников данных.


## Комментарии


Допустимые значения:


	- True. Измерения источников
	 данных автоматически связываются и синхронизируются. Таким образом,
	 если при создании нового визуализатора его источник данных уже используется
	 в другом визуализаторе, то отметка элементов измерений в новом визуализаторе
	 будет совпадать с отметкой в существующем визуализаторе;


	- False. Автоматическое
	 связывание и синхронизация не используются.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD».


Добавьте ссылки на системные сборки «Adhoc», «Metabase».


			Sub UserProc;

Var

    mb: IMetabase;

    repObj: IMetabaseObject;

    report: IAdhocReport;

    reportDS: IAdhocDataSourceObjects;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    repObj := mb.ItemById("DASHBOARD").Edit;

    report := repObj As IAdhocReport;

    // Получаем источники данных аналитической панели

    reportDS := report.DataSourceObjects;

    // Выключаем автоматическое связывание и синхронизацию
 измерений

    reportDS.AutoSyncNewSource := False;

    // Сохраняем изменения

    repObj.Save;

End Sub UserProc;


Результат выполнения примера: в аналитической панели отключены автоматическое
 связывание и синхронизация измерений источников данных.


См. также:


[IAdhocDataSourceObjects](IAdhocDataSourceObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
