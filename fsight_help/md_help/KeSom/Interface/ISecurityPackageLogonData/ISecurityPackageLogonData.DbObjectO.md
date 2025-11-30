# ISecurityPackageLogonData.DbObjectO

ISecurityPackageLogonData.DbObjectO
-


# ISecurityPackageLogonData.DbObjectO


## Синтаксис


DbObjectO (Value: String; [Options: Integer = 0]): String;


## Параметры


Value. Идентификатор объекта.


Options. Параметр зарезервирован на будущее.


## Описание


Метод DbObjectO возвращает идентификатор объекта с префиксом, соответствующим текущему репозиторию.


## Комментарии


Полученный идентификатор может использоваться в различных SQL-выражениях, например, для выполнения одного и того же запроса в рамках различных соединений.


Примечание. В результирующем значении между префиксом и идентификатором также будет добавлен разделитель, используемый определенной СУБД.


## Пример


Для выполнения примера подключите ссылки на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    LoS: ILogonSession;

    User: ISecurityConnection;

    SPLD: ISecurityPackageLogonData;

    s:String;

Begin

    MB:=MetabaseClass.Active;

    LoS:=MB.LogonSession;

    User:=LoS.PrimaryConnection;

    SPLD:=User.LogonData;

    s:=SPLD.DbObjectO("Obj1");

    Debug.WriteLine(s);

End Sub UserProc;


После выполнения примера в консоль будет выведен идентификатор объекта с префиксом, соответствующим текущему репозиторию.


См. также:


[ISecurityPackageLogonData](ISecurityPackageLogonData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
