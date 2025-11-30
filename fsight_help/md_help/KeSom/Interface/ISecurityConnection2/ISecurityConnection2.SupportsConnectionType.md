# ISecurityConnection2.SupportsConnectionType

ISecurityConnection2.SupportsConnectionType
-


# ISecurityConnection2.SupportsConnectionType


## Синтаксис


SupportsConnectionType(Type:[DalConnectionType](Dal.chm::/Enums/DalConnectionType.htm)): Boolean;


## Параметры


Type. Параметр определяет тип соединения с базой данных.


## Описание


Метод SupportsConnectionType определяет, поддерживается ли драйвером указанный в параметрах тип соединения.


## Комментарии


Метод возвращает True, если указанный в параметрах тип соединения поддерживается драйвером, в противном случае - возвращает False.


## Пример


Для выполнения примера подключите к модулю системные сборки Metabase, Dal и Db.


			Sub UserProc;

Var

    MB: IMetabase;

    DB: IDatabaseInstance;

    Connect: ISecurityConnection;

    CloneConnect: ISecurityConnection;

    Connect2: ISecurityConnection2;

Begin

    MB := MetabaseClass.Active;

    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

    Connect := DB.Connection;

    Connect2 := Connect As ISecurityConnection2;

    debug.WriteLine(Connect2.Type);

    if Connect2.SupportsConnectionType(DalConnectionType.FastInsert) then

        CloneConnect := Connect2.Clone(DalConnectionType.FastInsert);

    end if;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен тип соединения, и будет создана копия установленного соединения (Соединения для быстрой вставки), если драйвером поддерживается данный тип соединения.


См. также:


[ISecurityConnection2](ISecurityConnection2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
