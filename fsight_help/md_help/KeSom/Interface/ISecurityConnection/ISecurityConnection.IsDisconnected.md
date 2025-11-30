# ISecurityConnection.IsDisconnected

ISecurityConnection.IsDisconnected
-


# ISecurityConnection.IsDisconnected


## Синтаксис


IsDisconnected: Boolean;


## Описание


Метод IsDisconnected возвращает признак отключения соединения с сервером БД.


## Комментарии


Если соединение с сервером БД отключено, то метод возвращает значение True, иначе - False.


## Пример


Для выполнения примера подключите ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    LoS: ILogonSession;

    User: ISecurityConnection;

    Disconnection: Boolean;

Begin

    MB:=MetabaseClass.Active;

    LoS:=MB.LogonSession;

    User:=LoS.PrimaryConnection;

    Disconnection:=User.IsDisconnected;

    Debug.WriteLine (Disconnection);

End Sub UserProc;


После выполнения примера при отключении сетевого соединения в консоль будет выведено значение «True», иначе - «False».


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
