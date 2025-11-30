# ISecurityConnection.Checks

ISecurityConnection.Checks
-


# ISecurityConnection.Checks


## Синтаксис


Checks(TableName: String): [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


TableName. Физическое
 имя таблицы, информацию об ограничениях которой необходимо получить.


## Описание


Свойство Checks возвращает курсор
 с метаданными ограничений указанной таблицы.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB. В базе данных имеется таблица с физическим именем
 TABLE_1


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    DB: IDatabaseInstance;

    Checks: IDalCursor;

    Field: IDalCursorField;

Begin

    MB := MetabaseClass.Active;

    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

    Checks := DB.Connection.Checks("TABLE_1");

    While Not Checks.Eof Do

        For Each Field In Checks.Fields Do

            Debug.WriteLine(Field.Name + ": " + Field.Value);

        End For;

        Debug.WriteLine("");

        Checks.Next;

    End While;

    Checks.Close;

End Sub UserProc;


При выполнении примера будет осуществлено подключение к серверу БД,
 на который настроена указанная база данных. В консоль среды разработки
 будет выведена системная информация об ограничениях таблицы.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
