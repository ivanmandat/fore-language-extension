# IMetabaseMandatoryAccess.AddCategory

IMetabaseMandatoryAccess.AddCategory
-


# IMetabaseMandatoryAccess.AddCategory


## Синтаксис


AddCategory(Name: String): [ISecurityCategory](../ISecurityCategory/ISecurityCategory.htm);


## Параметры


Name. Наименование новой категории.


## Описание


Метод AddCategory создает категорию
 безопасности.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    MAccess: IMetabaseMandatoryAccess;

    Cat: ISecurityCategory;

    Lvl: ISecurityLevel;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    // Получим настройки мандатного доступа

    MAccess := MU.MandatoryAccess;

    // Добавим новую категорию и уровни безопасности

    Cat := MAccess.AddCategory("Категория 1");

    Lvl := Cat.AddLevel(0, "Уровень 0");

    Lvl.Marking := True;

    Lvl := Cat.AddLevel(1, "Уровень 1");

    Lvl.ExportAllowed := False;

    Lvl := Cat.AddLevel(2, "Уровень 2");

    Lvl.ExportAllowed := False;

    Lvl.PrintAllowed := False;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в мандатном доступе менеджера безопасности
 будет создана новая категория. В данной категории будут созданы три уровня
 безопасности. Для каждого уровня будут выставлены различные параметры
 разрешений экспорта и печати, а также маркировки при экспорте и печати.


См. также:


[IMetabaseMandatoryAccess](IMetabaseMandatoryAccess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
