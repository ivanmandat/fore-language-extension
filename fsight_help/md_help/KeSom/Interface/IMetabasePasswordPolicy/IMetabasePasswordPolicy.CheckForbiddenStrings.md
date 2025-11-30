# IMetabasePasswordPolicy.CheckForbiddenStrings

IMetabasePasswordPolicy.CheckForbiddenStrings
-


# IMetabasePasswordPolicy.CheckForbiddenStrings


## Синтаксис


CheckForbiddenStrings: Boolean;


## Описание


Свойство CheckForbiddenStrings
 определяет признак использования проверки пароля на вхождение запрещенных
 строк.


## Комментарии


Если свойству установлено значение True,
 то при смене пароля будет осуществляться проверка на наличие в новом пароле
 запрещенных строк, указанных в списке [ForbiddenStrings](IMetabasePasswordPolicy.ForbiddenStrings.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Collections.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    PassPol: IMetabasePasswordPolicy;

    Zapret: IStringList;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    PassPol := MU.PasswordPolicy;

    Zapret := PassPol.ForbiddenStrings;

    // Установим проверку пароля на вхождение запрещённых строк

    PassPol.CheckForbiddenStrings := True;

    // Очистим список и добавим запрещённые слова

    Zapret.Clear;

    Zapret.Add("abc");

    Zapret.Add("123");

    Zapret.Add("admin");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлена проверка пароля на вхождение
 запрещенных строк и в список будут добавлены три запрещенных значения.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
