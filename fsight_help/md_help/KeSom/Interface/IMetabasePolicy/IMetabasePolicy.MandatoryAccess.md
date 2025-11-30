# IMetabasePolicy.MandatoryAccess

IMetabasePolicy.MandatoryAccess
-


# IMetabasePolicy.MandatoryAccess


## Синтаксис


MandatoryAccess: [IMetabaseMandatoryAccess](../IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.htm);


## Описание


Свойство MandatoryAccess возвращает
 настройки мандатного доступа менеджера безопасности.


## Комментарии


Для настройки прав доступа к объектам используйте свойство [SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    MAccess: IMetabaseMandatoryAccess;

    Cat: ISecurityCategory;

    Lvl: ISecurityLevel;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Активируем использование мандатного метода разграничения доступа

    Policy.MandatoryAccessControl := True;

    MAccess := Policy.MandatoryAccess;

    // Добавим категорию безопасности с уровнями доступа

    Cat := MAccess.AddCategory("Категория 1");

    Lvl := Cat.AddLevel(0, "Уровень 0");

    Lvl.Marking := True; // включим возможность маркировки объектов

    Lvl := Cat.AddLevel(1, "Уровень 1");

    Lvl.ExportAllowed := False; // отключим возможность экспорта объектов

    Lvl := Cat.AddLevel(2, "Уровень 2");

    Lvl.ExportAllowed := False; // отключим возможность экспорта объектов

    Lvl.PrintAllowed := False; // отключим возможность печати объектов

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в мандатном доступе
 менеджера безопасности будет создана новая категория, в которой содержатся
 три уровня безопасности. Для каждого уровня выставлены различные параметры
 разрешений экспорта и печати, а также маркировки при экспорте и печати.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
