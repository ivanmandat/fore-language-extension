# IMetabaseGroups.Attributes

IMetabaseGroups.Attributes
-


# IMetabaseGroups.Attributes


## Синтаксис


Attributes:
 [IABACAttributes](KeABAC.chm::/Interface/IABACAttributes/IABACAttributes.htm);


## Описание


Свойство Attributes возвращает
 коллекцию атрибутов групп пользователей.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase,
 Dal.


			Sub UserProc;

Var

    Attr: IABACAttribute;

    Attrs: IABACAttributes;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    // Добавим атрибут для пользователей

    Attrs := MS.Users.Attributes;

    Attr := Attrs.Add;

    Attr.Name(MB.CurrentLocale) := "Новый атрибут"; // наименование атрибута

    Attr.Id := "ATTR_USER"; // идентификатор атрибута

    Attr.DataType := DbDataType.String; // тип данных атрибута

    Attr.DefaultValue := "Имя пользователя"; // значение по умолчанию

    // Добавим атрибут для групп пользователей

    Attrs := MS.Groups.Attributes;

    Attr := Attrs.Add;

    Attr.Name(MB.CurrentLocale) := "Новый атрибут"; // наименование атрибута

    Attr.Id := "ATTR_GROUP"; // идентификатор атрибута

    Attr.DataType := DbDataType.Integer; // тип данных атрибута

    Attr.DefaultValue := 20; // значение по умолчанию

    // Сохраним изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера для пользователей и групп пользователей
 будут добавлены атрибуты с заданными свойствами.


В менеджере безопасности добавленные атрибуты содержатся в окне «[Атрибуты](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm)».


См. также:


[IMetabaseGroups](IMetabaseGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
