# IMetabaseSecurityObjectsAttributes.Classes

IMetabaseSecurityObjectsAttributes.Classes
-


# IMetabaseSecurityObjectsAttributes.Classes


## Синтаксис


Classes: [IMetabaseSecurityClassesAttributes](../IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.htm);


## Описание


Свойство Classes возвращает
 параметры типов объектов.


## Комментарии


Данное свойство актуально при добавлении нового атрибута отдельному
 типу объектов.


Определение типа объектов осуществляется с помощью метода [IMetabaseSecurityClassesAttributes.Add](../IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.Add.htm)
 двумя способами:


	- в виде перечисления [MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm),
	 например:


Classes.Add(MetabaseObjectClass.KE_CLASS_STDDIM);


	- в виде [значения](KeSom.chm::/Enums/MetabaseObjectClass.htm),
	 например:


Classes.Add(1025).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase,
 Dal.


Sub UserProc;

Var

    ABACAttribute: IABACAttribute;

    ABACAttributes: IABACAttributes;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    Attrs: IMetabaseSecurityObjectsAttributes;

    ClassAttrs: IMetabaseSecurityClassAttributes;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Добавим атрибут для типа объектов «Табличный справочник»

    Attrs := MS.Policy.ObjectsAttributes;

    ClassAttrs := Attrs.Classes.Add(1025);

    ABACAttribute := ClassAttrs.Attributes.Add;

    ABACAttribute.Name(MB.CurrentLocale) := "Тип объектов";

    ABACAttribute.Id := "Dictionary";

    ABACAttribute.Description(MB.CurrentLocale) := "Для табличных справочников";

    ABACAttribute.DefaultValue := 20;

    ABACAttribute.DataType := DbDataType.Integer;

    // Добавим атрибут для классов объектов

    Attrs := MetabaseClass.Active.Security.Policy.ObjectsAttributes;

    ABACAttribute := Attrs.Global.Add;

    ABACAttribute.Name(MB.CurrentLocale) := "Классы объектов";

    ABACAttribute.Id := "Object";

    ABACAttribute.Description(MB.CurrentLocale) := "Для классов объектов";

    ABACAttribute.DefaultValue := 15;

    ABACAttribute.DataType := DbDataType.Integer;

    // Сохраним изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в менеджере безопасности будут добавлены
 атрибуты для [класса
 объектов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes) и отдельного [типа
 объектов](Admin.chm::/04_SecurityPolicy/Admin_PermSep_Attributes.htm) «Табличный
 справочник».


См. также:


[IMetabaseSecurityObjectsAttributes](IMetabaseSecurityObjectsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
