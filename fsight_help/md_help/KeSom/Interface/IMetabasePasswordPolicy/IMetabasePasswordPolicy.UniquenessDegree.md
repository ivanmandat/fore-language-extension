# IMetabasePasswordPolicy.UniquenessDegree

IMetabasePasswordPolicy.UniquenessDegree
-


# IMetabasePasswordPolicy.UniquenessDegree


## Синтаксис


UniquenessDegree: Integer;


## Описание


Свойство UniquenessDegree определяет
 минимальное отличие старого пароля от нового (символов).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    PassPol: IMetabasePasswordPolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    PassPol := MU.PasswordPolicy;

    // Установим минимальное отличие старого пароля от нового в символах

    PassPol.UniquenessDegree := 5;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлено минимальное отличие старого
 пароля от нового в 5 символов.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
