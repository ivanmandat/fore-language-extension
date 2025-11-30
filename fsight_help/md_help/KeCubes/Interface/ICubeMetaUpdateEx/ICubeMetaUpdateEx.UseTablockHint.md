# ICubeMetaUpdateEx.UseTablockHint

ICubeMetaUpdateEx.UseTablockHint
-


# ICubeMetaUpdateEx.UseTablockHint


## Синтаксис


		UseTablockHint(hint: [CubeMetaUpdateHintQuery](../../Enums/CubeMetaUpdateHintQuery.htm)):
		 Boolean;


## Параметры


hint. Типы запросов, для которых
 указывается TABLOCK.


## Описание


Свойство UseTablockHint определяет,
 какие запросы будут выполняться с указанием TABLOCK.


## Комментарии


Свойство актуально, если работа осуществляется в репозиториях, построенных
 на базе СУБД Microsoft SQL Server. По умолчанию для всех типов запросов
 свойство имеет значение True,
 при этом запросы выполняются с указанием TABLOCK. TABLOCK позволяет блокировать
 таблицы, для которых выполняются запросы, минимизировать ведение журнала,
 а также выполняет другие функции в зависимости от выполняемой инструкции.
 Более подробно читайте на [сайте производителя](https://docs.microsoft.com/ru-ru/sql/t-sql/queries/hints-transact-sql-table?view=sql-server-ver15&amp;viewFallbackFrom=sql-server-ver15â).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB» и папки с идентификатором «TSDB_COPY_FOLDER».


Добавьте ссылки на системные сборки: Cubes. Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    RubUpdateEx: ICubeMetaUpdateEx;

		    Rub: IRubricator;

		    CrInfo: IMetabaseObjectCreateInfo;

		Begin

		    // Получаем текущий репозиторий

		    Mb := MetabaseClass.Active;

		    // Создаем объект копирования базы данных временных рядов

		    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

		    // Получаем базу данных временных рядов

		    Rub := Mb.ItemById("TSDB").Bind As IRubricator;

		    // Указываем копируемую базу данных временных рядов

		    RubUpdateEx.Rubricator := Rub;

		    // Указываем, что копирование выполняется в текущий репозиторий

		    RubUpdateEx.Metabase := Mb;

		    // Получаем параметры создаваемой базы данных временных рядов

		    CrInfo := RubUpdateEx.CreateInfo;

		    // Указываем папку, в которой она будет создана

		    CrInfo.Parent := Mb.ItemById("TSDB_COPY_FOLDER");

		    // Указываем наименование и идентификатор новой базы данных временных рядов

		    CrInfo.Id := Mb.GenerateId("TSDB_COPY");

		    CrInfo.Name := "База данных временных рядов (копия)";

		    // Указываем репозиторий НСИ, который будет использоваться

		    // скопированной базой данных временных рядов

		    RubUpdateEx.RdsDatabase := Rub.Database;

		    // Указываем, что будем копировать данные

		    RubUpdateEx.CopyData := True;

		    // Указываем, что будем копировать вложенные объекты базы данных временных рядов

		    RubUpdateEx.CopyExtraObjects := True;

		    // Указываем, что копирование и сопоставление объектов будут выполняться

		    //  по уникальным индексам, используемым для формирования отметки

		    RubUpdateEx.RemapBySelectionIndex := True;

		    // Задаем название ревизии в скопированной базе данных временных рядов

		    RubUpdateEx.NewRevisionName := "Копирование всей базы 'TSDB'";

		    // Определяем запросы, для которых будет отключено указание TABLOCK.

		    RubUpdateEx.UseTablockHint(CubeMetaUpdateHintQuery.InsertFactsTable) := False;

		    RubUpdateEx.UseTablockHint(CubeMetaUpdateHintQuery.InsertValsTable) := False;

		    // Выполняем копирование

		    RubUpdateEx.Apply(Null);

		End Sub UserProc;


После выполнения примера в указанной папке будет создана копия базы
 данных временных рядов «TSDB». При копировании запросы для обновления
 таблиц с показателями и значениями будут выполняться без указания TABLOCK.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
