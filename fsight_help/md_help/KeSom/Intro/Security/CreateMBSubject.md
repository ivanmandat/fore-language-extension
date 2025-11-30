# Субъекты безопасности: Сборка Metabase

Субъекты безопасности: Сборка Metabase
-


# Субъекты безопасности


Работа в репозитории всегда осуществляется под определённым пользователем.
 Пользователь может быть создан непосредственно в менеджере безопасности,
 подключен существующий пользователь СУБД или доменный пользователь. Несколько
 пользователей могут быть объединены в группу. Использование групп упрощает
 процесс администрирования за счёт распределение привилегий только у группы,
 а не у каждого пользователя, которые в неё входят. Пользователи наследуют
 привилегии от группы, но также могут иметь и отдельные привилегии, которых
 нет у группы.


При создании нового репозитория, по умолчанию, будет создан пользователь
 ADMIN, группы АДМИНИСТРАТОРЫ и ПОЛЬЗОВАТЕЛИ. Пользователь ADMIN входит
 в группу АДМИНИСТРАТОРЫ и обладает всеми привилегиями.


Для создания новых пользователей и групп пользователей предназначены
 различные методы Add* интерфейса [IMetabaseSecurity](../../Interface/IMetabaseSecurity/IMetabaseSecurity.htm).
 При создании субъекта безопасности в менеджере безопасности он также создаётся
 на уровне СУБД. Если в СУБД уже имеется нужный пользователь, то для создания
 пользователя, подключаемого с сервера, установите свойству [IMetabaseUser.External](../../Interface/IMetabaseUser/IMetabaseUser.External.htm)
 значение True. При этом также
 может быть актуальна отмена раздачи грантов на уровне СУБД за счёт установки
 свойству [IMetabaseUser.ManageDBGrants](../../Interface/IMetabaseUser/IMetabaseUser.ManageDBGrants.htm)
 значения False. При добавлении
 доменных субъектов безопасности аналогичные настройки задаются в свойстве
 [IMetabaseSecurity.CurrentDomainSubjectAddState](../../Interface/IMetabaseSecurity/IMetabaseSecurity.CurrentDomainSubjectAddState.htm).


Для работы с коллекциями добавленных в менеджере субъектов безопасности
 используйте свойства [IMetabaseSecurity.Users](../../Interface/IMetabaseSecurity/IMetabaseSecurity.Users.htm)
 и [IMetabaseSecurity.Groups](../../Interface/IMetabaseSecurity/IMetabaseSecurity.Groups.htm).


Для того, чтобы субъект безопасности мог выполнять в репозитории какие-либо
 действия, ему необходимо раздать привилегии. Для этого используйте свойство
 [IMetabasePolicy.Privilege](../../Interface/IMetabasePolicy/IMetabasePolicy.Privilege.htm).


Пример создания группы пользователей:


	Sub CreateGroup;

	Var

	    MB: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Group: IMetabaseGroup;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MbSec := MB.Security;

	    // Добавим группу пользователей

	    Group := MbSec.AddGroup("WORKING_GROUP");

	    Group.Description := "Группа для работы с отчётами";

	    // Раздадим привилегии группе

	    MbSec.Policy.Privilege("ВХОД").Grant(Group);

	    MbSec.Policy.Privilege("ЧТЕНИЕ").Grant(Group);

	    MbSec.Policy.Privilege("ВХОД В НАВИГАТОР ОБЪЕКТОВ").Grant(Group);

	    // Сохраним изменения

	    MbSec.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub CreateGroup;


Пример создания пользователей:


	Sub CreateUsers;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    AdmGroup, Group: IMetabaseGroup;

	    User: IMetabaseUser;

	    Data: ISecurityPackageUserData;

	    Package: ISecurityPackage;

	    PswCreds: IPasswordCredentials;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MS := MB.Security;

	    // Получим группы, в которые будут включены пользователи

	    AdmGroup := MS.ResolveName("АДМИНИСТРАТОРЫ") As IMetabaseGroup;

	    Group := MS.ResolveName("WORKING_GROUP") As IMetabaseGroup;

	    // Создадим пользователей

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    //---Owner---

	    User := MS.AddUserEx("OWNER", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Владелец репозитория";

	    Data := User.PackageData;

	    PswCreds.Password := "Owner";

	    Data.Credentials := PswCreds;

	    AdmGroup.AddMember(User); // Добавление пользователя в группу администраторов

	    //---Manager---

	    User := MS.AddUserEx("MANAGER", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Руководитель";

	    Data := User.PackageData;

	    PswCreds.Password := "Manager";

	    Data.Credentials := PswCreds;

	    AdmGroup.AddMember(User); // Добавление пользователя в группу администраторов

	    //---Executor---

	    User := MS.AddUserEx("EXECUTOR", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Исполнитель";

	    Data := User.PackageData;

	    PswCreds.Password := "Executor";

	    Data.Credentials := PswCreds;

	    Group.AddMember(User); // Добавление пользователя в группу WORKING_GROUP

	    // Сохраним изменения

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub CreateUsers;


См. также:


[Работа с
 менеджером безопасности](Security.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
