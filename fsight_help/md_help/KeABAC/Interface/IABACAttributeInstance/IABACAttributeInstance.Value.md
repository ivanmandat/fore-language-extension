# IABACAttributeInstance.Value

IABACAttributeInstance.Value
-


# IABACAttributeInstance.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 атрибута.


## Комментарии


Данное свойство актуально при редактировании значения [пользовательского
 атрибута](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm).


Для определения значения атрибута по умолчанию используйте свойство
 [IABACAttribute.DefaultValue](../IABACAttribute/IABACAttribute.DefaultValue.htm).


## Пример


Для выполнения примера убедитесь, что для пользователей добавлен целочисленный
 [пользовательский
 атрибут](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#subject) с идентификатором «WORKDAYS».


Добавьте ссылки на системные сборки: ABAC, Metabase.


	Sub UserProc;

	Var

	    Insts: IABACAttributeInstances;

	    Inst: IABACAttributeInstance;

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    User: IMetabaseUser;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MS := MB.Security;

	    // Получим атрибуты первого пользователя

	    User := MS.Users.Item(0);

	    Insts := User.Attributes;

	    // Найдем атрибут с идентификатором «WORKDAYS»

	    Inst := Insts.FindById("WORKDAYS");

	    // Проверим множественное ли значение найденного атрибута

	    If Inst.IsArray = False Then

	        // Изменим значение атрибута, если оно не множественное

	        Inst.Value := 20;

	    End If;

	    // Сохраним изменения в менеджере безопасности

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


В результате выполнения примера для указанного пользователя будет изменено
 [значение
 атрибута](Admin.chm::/03_Admin/Users/Admin_UserProp_Attributes.htm) с идентификатором «WORKDAYS».


См. также:


[IABACAttributeInstance](IABACAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
