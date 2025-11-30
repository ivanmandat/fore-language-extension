# ISecurityConnection.OpenSame

ISecurityConnection.OpenSame
-


# ISecurityConnection.OpenSame


## Синтаксис


OpenSame: [ISecurityConnection](ISecurityConnection.htm);


## Описание


Метод OpenSame открывает новое соединение с сервером БД с теми же параметрами, что и у текущего соединения.


## Комментарии


Метод применяется для одновременной работы пользователей с сервером БД. Например, репликацию данных в одну и ту же базу данных временных рядов осуществляют сразу несколько пользователей. Для каждого пользователя требуется создать отдельное соединение с помощью метода OpenSame.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором «OBJ_DB». Также необходимо добавить ссылки на системные сборки «Metabase» и «Db».


			Sub UserProc;

Var

    Mb: IMetabase;

    Db: IDatabase;

    DbInst: IDatabaseInstance;

    ConFirst: ISecurityConnection;

    ConSecond: ISecurityConnection;

Begin

    Mb := MetabaseClass.Active;

    Db := Mb.ItemById("OBJ_DB").Bind As IDatabase;

    DbInst := (Db As IMetabaseObject).Open(Null) As IDatabaseInstance;

    ConFirst := DbInst.Connection;

    ConSecond := ConFirst.OpenSame;

End Sub UserProc;


После выполнения примера будут открыты два идентичных соединения с сервером БД.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
