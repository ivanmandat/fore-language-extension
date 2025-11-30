# ISecurityConnection.Driver

ISecurityConnection.Driver
-


# ISecurityConnection.Driver


## Синтаксис


Driver: String;


## Описание


Свойство Driver возвращает идентификатор
 драйвера БД, с использованием которого осуществлено данное подключение.


## Комментарии


Свойство возвращает один из идентификаторов, список которых приведён
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


			Sub UserProc;

Var

    Mb: IMetabase;

    Connection: ISecurityConnection;

Begin

    Mb := MetabaseClass.Active;

    Connection := Mb.LogonSession.PrimaryConnection;

    Debug.WriteLine(Connection.Driver);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен идентификатор
 драйвера БД, который использован при подключении к репозиторию.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
