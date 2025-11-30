# ICredentials.ForceError

ICredentials.ForceError
-


# ICredentials.ForceError


## Синтаксис


ForceError: Boolean;


## Описание


Свойство ForceError определяет заведомо неудачный вход в систему.


## Комментарии


По умолчанию свойство имеет значение False. При установке в True учетные данные будут определены как неверные. При вызове [IMetabaseDefinition.Open](../IMetabaseDefinition/IMetabaseDefinition.Open.htm) с заведомо неудачными учетными данными в протоколе доступа будет отображена запись о неудачном входе. Свойство является способом запротоколировать неудачный вход в систему.


Для задания комментария, который будет добавлен к записи протокола доступа, следует использовать свойство [ICredentials.ErrorMessage](ICredentials.ErrorMessage.htm).


## Пример


В рассматриваемом примере происходит подключение к схеме «student» под пользователем «UserTest».


			Sub UserProc;

Var

    metabase: IMetabase;

    package: ISecurityPackage;

    credentials: IPasswordCredentials;

    definition: IMetabaseDefinition;

Begin

    definition := MetabaseManagerFactory.Active.Definitions.FindById("student");

    package := MetabaseManagerFactory.Active.Packs.FindById(definition.SecurityPackage).Package;

    credentials := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

    credentials.UserDescription := "MyDescription";

    credentials.UserOS := "MyUserOS";

    credentials.UserName := "UserTest";

    credentials.Password := "UserTest";

    credentials.ForceError := True;

    credentials.ErrorMessage := "Заведомо неудачный вход в систему";

    Try

        metabase := definition.Open(credentials);

    Except

        On E: Exception Do

        WinApplication.InformationBox(E.message);

    End Try;

End Sub UserProc;


При выполнении примера будет обработана исключительная ситуация (Неверное имя пользователя/пароль). В протокол доступа будет добавлена запись о неудачном входе.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
