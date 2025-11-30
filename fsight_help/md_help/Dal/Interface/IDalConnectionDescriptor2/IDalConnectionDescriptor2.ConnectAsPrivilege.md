# IDalConnectionDescriptor2.ConnectAsPrivilege

IDalConnectionDescriptor2.ConnectAsPrivilege
-


# IDalConnectionDescriptor2.ConnectAsPrivilege


## Синтаксис


ConnectAsPrivilege: [DalConnectAsPrivilegeType](../../Enums/DalConnectAsPrivilegeType.htm);


## Описание


Свойство ConnectAsPrivilege
 определяет подключение к серверу баз данных с заданной привилегией.


Примечание.
 Свойство не предназначено для использования в прикладном коде. Оставлено
 для совместимости с предыдущими версиями.


## Комментарии


Задать подключение с привилегией можно только для серверов на базе СУБД
 Oracle.


Подключение с привилегиями может понадобиться при выполнении операций
 в «Форсайт. Аналитическая платформа»,
 требующих указания параметров учетной записи, обладающей правами администрирования
 в Oracle, например, когда пользователь SYSTEM заблокирован по требованиям
 безопасности и имеется только пользователь SYS.


## Пример


Для выполнения примера подключите к модулю системные сборки «Metabase»,
 «Dal». Предполагается, что репозиторий находится на сервере Oracle (тип
 СУБД Oracle), на сервере имеется пользователь SYS с паролем «Password»,
 в репозитории есть таблица с идентификатором «Table».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Driv: IDalDriver;

	    Connect: IDalConnection;

	    Connect2: IDalConnectionDescriptor2;

	    Command: IDalCommand;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDescParams: IDalConnectionDescriptorParams;

	Begin

	    MB := MetabaseClass.Active;

	    Driv := New DalOrcl8Driver.Create;

	    ConnectDesc := Driv.CreateDescriptor;

	    ConnectDescParams := ConnectDesc.Params;

	    ConnectDescParams.Find("User Name").Value := "SYS";

	    ConnectDescParams.Find("Password").Value := "Password";

	    ConnectDescParams.Find("Host BSTR").Value := "test";

	    ConnectDescParams.Find("Schema").Value := "Warehouse";

	    //Пользователь с привилегией SYS

	    Connect2 := ConnectDesc As IDalConnectionDescriptor2;

	    Connect2.ConnectAsPrivilege := DalConnectAsPrivilegeType.SYSOPER;

	    Connect := ConnectDesc.CreateConnection;

	    Command := Connect.CreateCommand;

	    Command.SQL := "select * from Table";

	    Connect.StartTransaction;

	    Command.Execute;

	    Connect.Commit;

	    Command.Close;

	    Connect.Close;

	End Sub UserProc;


После выполнения примера будет выполнен SQL-запрос, для соединения были
 указаны учетные данные пользователя с привилегией SYSOPER.


См. также:


[IDalConnectionDescriptor2](IDalConnectionDescriptor2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
