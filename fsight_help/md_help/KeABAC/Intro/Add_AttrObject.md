# Добавление атрибутов объекту

Добавление атрибутов объекту
-


# Добавление атрибутов объекту


Добавление атрибутов объекту осуществляется двумя способами:


	- при [создании
	 пользовательских атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes) в менеджере безопасности;


	- в среде разработки с помощью сборки ABAC.


Для добавления атрибутов объекту:


	- задайте атрибуты для [классов
	 объектов](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes). Для всех объектов репозитория будут добавлены
	 заданные атрибуты;


	- задайте атрибуты для отдельного [типа
	 объектов](admin.chm::/04_SecurityPolicy/Admin_PermSep_Attributes.htm). Для всех объектов определенного типа
	 будут добавлены заданные атрибуты;


	- задайте атрибуты для [классов
	 объектов](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes) и для отдельного [типа
	 объектов](admin.chm::/04_SecurityPolicy/Admin_PermSep_Attributes.htm). Для всех объектов определенного типа
	 будут добавлены атрибуты классов объектов и отдельного типа объектов.


После выполнения одного из действий заданные атрибуты будут добавлены
 объекту. Атрибуты объекта содержатся на вкладке «[Атрибуты](UiNav.chm::/03_Objects/UiNav_Obj_BasicPropAttributes.htm)».


Рассмотрим пример добавления атрибутов объекту с помощью сборки ABAC.


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

    ObjAttrs: IMetabaseSecurityObjectsAttributes;

    ClassAttrs: IMetabaseSecurityClassAttributes;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    // Добавим атрибут для классов объектов

    ObjAttrs := MetabaseClass.Active.Security.Policy.ObjectsAttributes;

    Attr := ObjAttrs.Global.Add;

    Attr.Name(MB.CurrentLocale) := "Классы объектов"; // наименование атрибута

    Attr.Id := "OBJECT_CLASSES"; // идентификатор атрибута

    Attr.DataType := DbDataType.Integer; // тип данных атрибута

    Attr.DefaultValue := 15; // значение по умолчанию

    // Добавим атрибут для типа объектов «Табличный справочник»

    ObjAttrs := MS.Policy.ObjectsAttributes;

    ClassAttrs := ObjAttrs.Classes.Add(MetabaseObjectClass.KE_CLASS_STDDIM);

    Attr := ClassAttrs.Attributes.Add;

    Attr.Name(MB.CurrentLocale) := "Тип объектов"; // наименование атрибута

    Attr.Id := "DICTIONARY"; // идентификатор атрибута

    Attr.DataType := DbDataType.Integer; // тип данных атрибута

    Attr.DefaultValue := 20; // значение по умолчанию

    // Сохраним изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера для всех объектов репозитория будет
 добавлен атрибут, заданный для классов объектов. Для объектов типа «Табличный справочник» будет дополнительно
 добавлен атрибут, заданный для данного типа объектов.


См. также:


[Общие
 принципы программирования с использованием сборки ABAC](KeABAC_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
