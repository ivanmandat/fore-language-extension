# IMetabasePasswordPolicy.NotAllowUserName

IMetabasePasswordPolicy.NotAllowUserName
-


# IMetabasePasswordPolicy.NotAllowUserName


## Синтаксис


NotAllowUserName: Boolean;


## Описание


Свойство NotAllowUserName определяет
 запрет на совпадение имени пользователя и пароля.


## Комментарии


Если свойству установлено значение True,
 то при смене пароля будет осуществляться проверка на его совпадение с
 [именем пользователя](../ISecuritySubject/ISecuritySubject.Name.htm).
 При их совпадении генерируется ошибка.


По умолчанию свойству установлено значение False,
 при этом проверка на совпадение не производится.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    PswPolicy: IMetabasePasswordPolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    PswPolicy := MS.Policy.PasswordPolicy;

    // Установим запрет на совпадение имени пользователя и пароля

    PswPolicy.NotAllowUserName := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлен запрет на совпадение имени
 пользователя и пароля.


См.
 также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
