# ISecurityCategory.RemoveLevel

ISecurityCategory.RemoveLevel
-


# ISecurityCategory.RemoveLevel


## Синтаксис


RemoveLevel(Index: Integer): Boolean;


## Параметры


Index. Индекс уровня безопасности,
 который необходимо удалить.


## Описание


Метод RemoveLevel осуществляет
 удаление уровня безопасности и возвращает признак удачного удаления.


## Пример


Для выполнения примера убедитесь, что в мандатном доступе содержится
 хотя бы одна категория и два уровня.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    Cat: ISecurityCategory;

    MAccess: IMetabaseMandatoryAccess;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    MAccess := MU.MandatoryAccess;

    // Удалим второй уровень первой категории

    Cat := MAccess.Category(0);

    Cat.RemoveLevel(1);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в первой категории безопасности мандатного
 доступа будет удален второй уровень.


См. также:


[ISecurityCategory](ISecurityCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
