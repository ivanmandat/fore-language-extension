# IDalConnection2.Clone

IDalConnection2.Clone
-


# IDalConnection2.Clone


## Синтаксис


Clone(Type: [DalConnectionType](../../Enums/DalConnectionType.htm)):
 [IDalConnection](../IDalConnection/IDalConnection.htm);


## Параметры


Type. Тип соединения.


## Описание


Метод Clone создает специализированную
 копию соединения.


## Пример


Для выполнения примера подключите к модулю системные сборки Metabase
 и Dal.


			Sub UserProc;

Var

    Driver: IDalDriver;

    SchemeName: string;

    Connect: IDalConnection;

    CloneConnect: IDalConnection;

    Connect2: IDalConnection2;

    ConnectDesc: IDalConnectionDescriptor;

    ConnectDesc2: IDalConnectionDescriptor2;

    Params: IDalConnectionDescriptorParams;

Begin

    driver := New DalOrcl8Driver.Create;

    SchemeName := "Schema";

    ConnectDesc := Driver.CreateDescriptor;

    Params := ConnectDesc.Params;

    Params.Find("User Name").Value := "Warehouse";

    Params.Find("Password").Value := "Warehouse";

    Params.Find("Host BSTR").Value := "TestServer";

    Params.Find(SchemeName).Value := "Warehouse";

    Connect := ConnectDesc.CreateConnection As IDalConnection;

    ConnectDesc2 := ConnectDesc As IDalConnectiondescriptor2;

    Connect2 := Connect As IDalConnection2;

    CloneConnect := Connect2.Clone(DalConnectionType.FastInsert);

End Sub UserProc;


При выполнении примера будет осуществлено подключение к указанному репозиторию.
 После этого будет создана копия подключения, предназначенная для быстрой
 вставки данных.


См. также:


[IDalConnection2](IDalConnection2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
