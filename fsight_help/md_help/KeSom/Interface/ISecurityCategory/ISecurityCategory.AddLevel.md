# ISecurityCategory.AddLevel

ISecurityCategory.AddLevel
-


# ISecurityCategory.AddLevel


## Синтаксис


AddLevel(CriticalityLabel: Integer; Name: String):
 [ISecurityLevel](../ISecurityLevel/ISecurityLevel.htm);


## Параметры


CriticalityLabel. Метка критичности
 для уровня;


Name. Наименование уровня.


## Описание


Метода AddLevel создает уровень
 в категории безопасности.


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

    MAccess := MU.MandatoryAccess;

    // Добавим категорию с уровнями

    Cat := MAccess.AddCategory("Категория 1");

    Cat.Hierarchical := False;

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


После выполнения примера в настройках мандатного доступа менеджера безопасности
 будет создана новая неирархическая категория. В данной категории будут
 созданы три уровня критичности. Для каждого уровня будут выставлены различные
 параметры разрешений экспорта и печати, а также маркировки при экспорте
 и печати.


См. также:


[ISecurityCategory](ISecurityCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
