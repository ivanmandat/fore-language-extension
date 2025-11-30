# IEtlTask.PartialFetch

IEtlTask.PartialFetch
-


# IEtlTask.PartialFetch


## Синтаксис


PartialFetch: Boolean;


## Описание


Свойство PartialFetch определяет,будет
 ли задача ETL использовать пакетную обработку данных.


## Комментарии


Допустимые значения:


	- True. Использовать пакетную
	 обработку данных;


	- False. Не использовать
	 пакетную обработку данных.


По умолчанию данные из источников читаются целиком - это требует много
 памяти, и часто неприемлемо. Для того, чтобы ускорить процесс чтения данных,
 необходимо воспользоваться данным свойством. Для установки количества
 обрабатываемых записей используйте [IEtlTask.DefaultBlockSize](IEtlTask.DefaultBlockSize.htm)
 или [IEtlPlainDataProvider.FetchBlockSize](../IEtlPlainDataProvider/IEtlPlainDataProvider.FetchBlockSize.htm).


Пакетная обработка данных не будет использоваться, если в задаче ETL
 добавлены процедура или процедура на основе шаблона, преобразователи удаление
 дубликатов, сортировка или соединение.


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором T_ETL.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("T_ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    EtlTask.PartialFetch := True;

	    EtlTask.DefaultBlockSize := 300;

	    MObj.Save;

	End Sub UserProc;


При выполнении примера в задаче ETL будет включено использование пакетной
 обработки данных и задан размер пакета.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
