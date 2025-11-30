# IMetabasePasswordPolicy.HistoryLength

IMetabasePasswordPolicy.HistoryLength
-


# IMetabasePasswordPolicy.HistoryLength


## Синтаксис


HistoryLength: Integer;


## Описание


Свойство HistoryLength определяет
 количество старых паролей, хранимых и проверяемых на совпадение с новым
 паролем пользователя.


## Комментарии


При использовании свойства можно наложить ограничение на полное совпадение
 старого и нового пароля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MbSecurity: IMetabaseSecurity;

    MbPolicy: IMetabasePolicy;

    MbPassPolicy: IMetabasePasswordPolicy;

    Lic: Object;

Begin

    Mb := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MbSecurity := Mb.Security;

    MbPolicy := MbSecurity.Policy;

    MbPassPolicy := MbPolicy.PasswordPolicy;

    // Установим количество старых паролей пользователя

    MbPassPolicy.HistoryLength := 3;

    // Сохраним изменения

    MbSecurity.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в истории будет храниться три старых пароля
 пользователя.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
