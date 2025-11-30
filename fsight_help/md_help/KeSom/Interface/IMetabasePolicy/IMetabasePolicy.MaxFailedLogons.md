# IMetabasePolicy.MaxFailedLogons

IMetabasePolicy.MaxFailedLogons
-


# IMetabasePolicy.MaxFailedLogons


## Синтаксис


MaxFailedLogons: Integer;


## Описание


Свойство MaxFailedLogons определяет
 число неудачных попыток входа, после которого пользователь блокируется.


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

    // Установим число неудачных попыток входа

    Policy.MaxFailedLogons := 6;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлено число
 неудачных попыток входа равное «6». При превышении указанного числа попыток
 пользователь будет заблокирован.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
