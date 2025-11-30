# ISecurityPackageUserData.IsGroup

ISecurityPackageUserData.IsGroup
-


# ISecurityPackageUserData.IsGroup


## Синтаксис


IsGroup: Boolean;


## Описание


Свойство IsGroup определяет признак того, является ли пользователь пакета безопасности членом группы.


## Комментарии


Если свойство возвращает значение False, значит текущий пользователь не является членом группы. Иначе свойство возвращает значение True.


## Пример


Для выполнения примера подключите ссылку на сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    LoS: ILogonSession;

    Mu: IMetabaseUser;

    SPUD: ISecurityPackageUserData;

    Grp: Boolean;

Begin

    MB:=MetabaseClass.Active;

    LoS:=MB.LogonSession;

    Mu:=Los.User;

    SPUD:=Mu.PackageData;

    Cr:=SPUD.IsGroup;

    Debug.WriteLine (Grp);

End Sub UserProc


После выполнения примера в окне консоли появится сообщение о том, является ли текущий пользователь членом группы.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
