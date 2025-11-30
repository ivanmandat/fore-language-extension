# ISecurityConnection2.Clone

ISecurityConnection2.Clone
-


# ISecurityConnection2.Clone


## Синтаксис


Clone(Type : [DalConnectionType](Dal.chm::/Enums/DalConnectionType.htm)): [ISecurityConnection](../ISecurityConnection/ISecurityConnection.htm);


## Параметры


Type. Параметр определяет тип соединения с базой данных.


## Описание


Метод Clone создает специализированную копию соединения.


## Пример


Для выполнения примера подключите к модулю системные сборки Metabase, Dal и Db.


			Sub UserProc;

Var

    MB: IMetabase;

    DB: IDatabaseInstance;

    Connect: ISecurityConnection;

    CloneConnect: ISecurityConnection;

    Connect2: ISecurityConnection2;

    Command: IDalCommand;

Begin

    MB := MetabaseClass.Active;

    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

    Connect := DB.Connection;

    Connect2 := Connect As ISecurityConnection2;

    debug.WriteLine(Connect2.Type);

    CloneConnect := Connect2.Clone(DalConnectionType.FastInsert);

End Sub UserProc;


После выполнения примера в окно консоли будет выведен тип соединения, и будет создана копия установленного соединения (Соединения для быстрой вставки).


См. также:


[IDalConnection2](../../../dal/interface/idalconnection2/idalconnection2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
