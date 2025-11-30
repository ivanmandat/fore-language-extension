# ICredentialsEx.Impersonation

ICredentialsEx.Impersonation
-


# ICredentialsEx.Impersonation


## Синтаксис


Impersonation: [ICredentials](../ICredentials/ICredentials.htm);


## Описание


Свойство Impersonation определяет
 учетные данные для имперсонации пользователя.


## Комментарии


Имперсонация может использоваться при создании новых подключений к репозиторию
 из прикладного кода. При этом исходный экземпляр учетных данных берется
 у требуемого [описания
 репозитория](../IMetabaseDefinition/IMetabaseDefinition.htm). Сохранение учётных данных осуществляется с помощью приложения
 [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm),
 входящего в состав «Форсайт. Аналитическая платформа».


В качестве значения свойства Impersonation
 необходимо указать учетные данные какого-либо другого пользователя, за
 которого необходимо выдать учетные данные текущего экземпляра ICredentials.
 Указываемый пользователь должен быть создан в менеджере безопасности репозитория.
 Фактическое подключение будет производиться под текущими учетными данными,
 а вся дальнейшая работа будет осуществляться от заданного в свойстве Impersonation пользователя:


	- Если пользователь, учетные данные которого указаны в свойстве
	 Impersonation обладает большими
	 привилегиями чем пользователь, которому соответствуют учетные данные
	 текущего экземпляра ICredentials,
	 то подключение будет невозможно;


	- После подключения будут обновлены права в соответствии с правами
	 указанного пользователя;


	- В протоколе доступа будут фиксироваться записи от имени указанного
	 пользователя.


## Пример


			Function MBConnect(Definition: String; ImpUser: String; ImpPassword: String): IMetabase;

Var

    MBMan: IMetabaseManager;

    MBDef: IMetabaseDefinition;

    ScPack: ISecurityPackage;

    DefCrs, ImpCrs: ICredentials;

    DefEx: ICredentialsEx;

    MB: IMetabase;

Begin

    MBMan := MetabaseManagerFactory.Active;

    MBDef := MBMan.Definitions.FindById(Definition);

    If MBDef = Null Then

        Return Null;

    End If;

    DefCrs := (MBDef As IMetabaseLink).Credentials;

    ScPack := MBMan.Packs.FindById(MbDef.SecurityPackage).Package;

    ImpCrs := ScPack.CreateCredentials(AuthenticationMode.Password);

    //Учетные данные

    (ImpCrs As IPasswordCredentials).UserName := ImpUser;

    (ImpCrs As IPasswordCredentials).Password := ImpPassword;

    DefEx := DefCrs As ICredentialsEx;

    DefEx.Impersonation := ImpCrs;

    Try

        //Подключение с учетными данными DefCrs c имперсонацией ImpCrs

        MB := MBDef.Open(DefCrs);

    Except On e: Exception Do

        Debug.Write("Ошибка подключения: ");

        Debug.Write(e.Message);

        Return Null;

    End Try;

    Return MB;

End Function MBConnect;


Указанная функция может применяться для создания подключения к репозиторию
 с имперсонацией пользователя, учетные данные которого передаются в качестве
 входных параметров ImpUser и ImpPassword. При выполнении функции
 осуществляется поиск описания репозитория, передаваемого в параметре Definition. Если описание отсутствует,
 либо при подключении произойдут какие-либо другие ошибки, то функция вернет
 значение Null. После получения
 описания будут созданы учетные данные для имперсонизируемого пользователя.
 После указания всех параметров осуществляется подключение. Фактическое
 подключение производится с учетными данными, которые предварительно должны
 быть сохранены для указываемого описания репозитория (смотрите описание
 [IMetabaseLink.Credentials](../IMetabaseLink/IMetabaseLink.Credentials.htm)).


См. также:


[ICredentialsEx](ICredentialsEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
