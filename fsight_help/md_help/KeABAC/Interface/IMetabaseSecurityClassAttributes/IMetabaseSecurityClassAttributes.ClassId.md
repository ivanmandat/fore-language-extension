# IMetabaseSecurityClassAttributes.ClassId

IMetabaseSecurityClassAttributes.ClassId
-


# IMetabaseSecurityClassAttributes.ClassId


## Синтаксис


ClassId: Integer;


## Описание


Свойство ClassId возвращает
 идентификатор типа объектов.


## Комментарии


Свойство доступно только для чтения и используется методами [IMetabaseSecurityClassesAttributes.Add](../IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.Add.htm),
 [IMetabaseSecurityClassesAttributes.FindByClass](../IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.FindByClass.htm),
 [IMetabaseSecurityClassesAttributes.RemoveByClass](../IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.RemoveByClass.htm).


Также идентификатор типов объектов содержится в перечислении [MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


## Пример


Для выполнения примера убедитесь, что хотя бы для одного типа объектов
 содержатся атрибуты.


Добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    Attrs: IMetabaseSecurityObjectsAttributes;

    ClassAttrs: IMetabaseSecurityClassAttributes;

    Id: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Удалим атрибуты типа объектов

    Attrs := MS.Policy.ObjectsAttributes;

    ClassAttrs := Attrs.Classes.Item(0); // определение
 типа объектов по индексу, для которого есть атрибуты

    Id := ClassAttrs.ClassId; // определение идентификатора данного типа объектов

    Attrs.Classes.RemoveByClass(Id);

    // Сохраним изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера будут удалены атрибуты типа объектов
 с индексом «0».


См. также:


[IMetabaseSecurityClassAttributes](IMetabaseSecurityClassAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
