# ISecurityPackageUserData.HasPrivilege

ISecurityPackageUserData.HasPrivilege
-


# ISecurityPackageUserData.HasPrivilege


## Синтаксис


HasPrivilege(Priv: [SecurityPackageUserPrivilege](../../Enums/SecurityPackageUserPrivilege.htm)):
 Boolean;


## Параметры


Priv.
 Тип привилегии.


## Описание


Свойство HasPrivilege определяет,
 обладает ли пользователь заданной привилегией.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    LoS: ILogonSession;

	    Mu: IMetabaseUser;

	    SPUD: ISecurityPackageUserData;

	Begin

	    MB := MetabaseClass.Active;

	    LoS := MB.LogonSession;

	    Mu := Los.User;

	    SPUD := Mu.PackageData;

	    Debug.WriteLine(SPUD.HasPrivilege(SecurityPackageUserPrivilege.ClearJournal)?

	        "У пользователя " + Mu.Name + " имеется привилегия очистки протокола доступа.":

	        "У пользователя " + Mu.Name + " нет привилегии очистки протокола доступа.");

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о наличии или отсутствии у текущего пользователя привилегии очистки протокола
 доступа.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
