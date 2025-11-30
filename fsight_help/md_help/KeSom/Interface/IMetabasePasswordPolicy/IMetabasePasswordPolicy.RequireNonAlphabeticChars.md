# IMetabasePasswordPolicy.RequireNonAlphabeticChars

IMetabasePasswordPolicy.RequireNonAlphabeticChars
-


# IMetabasePasswordPolicy.RequireNonAlphabeticChars


## Синтаксис


RequireNonAlphabeticChars: Boolean;


## Описание


Свойство RequireNonAlphabeticChars
 определяет признак обязательного использования в пароле спецсимволов (_,
 @, #, $, %, &, *, ^).


## Комментарии


Если задано значение для устаревшего свойства RequireAlphaNumeric,
 то данное значение присваивается в оба новых свойства [RequireDigitsAndChars](IMetabasePasswordPolicy.RequireDigitsAndChars.htm)
 и [RequireNonAlphabeticChars](IMetabasePasswordPolicy.RequireNonAlphabeticChars.htm).


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

    // Установим использование в пароле спецсимволов

    PassPol.RequireNonAlphabeticChars := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлено обязательное использование
 спецсимволов в новом пароле.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
