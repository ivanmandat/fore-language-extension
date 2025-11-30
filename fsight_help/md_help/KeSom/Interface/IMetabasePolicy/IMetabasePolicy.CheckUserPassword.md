# IMetabasePolicy.CheckUserPassword

IMetabasePolicy.CheckUserPassword
-


# IMetabasePolicy.CheckUserPassword


## Синтаксис


CheckUserPassword: Boolean;


## Описание


Свойство CheckUserPassword определяет,
 будет ли использоваться авторизация средствами платформы.


## Комментарии


По умолчанию свойство принимает значение False
 и используется авторизация средствами СУБД.


При установке значения True
 будет использоваться авторизация средствами платформы: для доступа к данным
 СУБД происходит соединение под встроенным администратором (владельцем
 схемы в СУБД). Проверка прав и паролей осуществляется на уровне платформы,
 не используется механизм раздачи грантов через сервер БД.


Включенная встроенная авторизация не будет использоваться, если в настройках
 репозитория установлена интегрированная доменная или доменная аутентификация
 в СУБД.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Разрешим использование встроенной авторизации

    If Policy.CheckUserPassword = False Then

        Policy.CheckUserPassword := True;

    End If;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включена авторизация
 средствами платформы, если ранее использовалась авторизация средствами
 СУБД.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
