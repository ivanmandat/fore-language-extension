# IDalConnectionDescriptor2.SupportsConnectionType

IDalConnectionDescriptor2.SupportsConnectionType
-


# IDalConnectionDescriptor2.SupportsConnectionType


## Синтаксис


SupportsConnectionType(Type: [DalConnectionType](../../Enums/DalConnectionType.htm))
 Boolean;


## Параметры


Type. Параметр определяет тип
 соединения с базой данных.


## Описание


Метод SupportsConnectionType
 определяет, поддерживается ли драйвером указанный в параметрах тип соединения.


## Пример


Для выполнения примера подключите к модулю системную сборку Dal.


	Sub Macro;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    Connect2: IDalConnection2;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDesc2: IDalConnectionDescriptor2;

	    Params: IDalConnectionDescriptorParams;

	    CmdParams: IDalCommandParams;

	    Command: IDalCommand;

	    i: Integer;

	Begin

	    Driver := New DalMsSql2012Driver.Create;

	    ConnectDesc := Driver.CreateDescriptor;

	    Params := ConnectDesc.Params;

	    Params.Find("User Name").Value := "repositoryP";

	    Params.Find("Password").Value := "repositoryP";

	    Params.Find("Host BSTR").Value := "ms2012a";

	    Params.Find("Database").Value := "Test";

	    ConnectDesc2 := ConnectDesc As IDalConnectionDescriptor2;

	        If ConnectDesc2.SupportsConnectionType(DalConnectionType.FastInsert) Then

	            ConnectDesc2.ConnectionType := DalConnectiontype.FastInsert;

	        End If;

	    Connect2 := ConnectDesc.CreateConnection As IDalConnection2;

	End Sub Macro;


После выполнения примера будет использован тип соединения с базой данных
 - «Соединение для быстрой вставки», при условии, что драйвером поддерживается
 указанный тип соединения.


См. также:


[Интерфейсы
 сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
