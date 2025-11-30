# IABACAttribute.UIEditorBinding

IABACAttribute.UIEditorBinding
-


# IABACAttribute.UIEditorBinding


## Синтаксис


UIEditorBinding: String;


## Описание


Свойство UIEditorBinding определяет
 формат даты и времени в значении атрибута.


## Комментарии


Используйте свойство, если выполняются условия:


	- [тип данных](IABACAttribute.DataType.htm) атрибута
	 «[DateTime](Dal.chm::/Enums/DbDataType.htm)»;


	- [значение](IABACAttribute.DefaultValue.htm) атрибута
	 задается с помощью метода [DateTime.Parse](ForeSys.chm::/Class/DateTime/DateTime.Parse.htm).


Значение свойства UIEditorBinding
 содержит формат даты и времени:


	- DateTimePicker. Формат
	 даты и времени в виде <ДД.ММ.ГГГГ
	 ЧЧ:ММ>.


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

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Добавим временной атрибут для пользователей

    ABACAttributes := MS.Users.Attributes;

    ABACAttribute := ABACAttributes.Add;

    ABACAttribute.Name(MB.CurrentLocale) := "Временной атрибут";

    ABACAttribute.Id := "ATTR_TIME";

    ABACAttribute.DataType := DbDataType.DateTime;

    ABACAttribute.DefaultValue := Datetime.Parse("22.10.2018 20:00:00");

    ABACAttribute.UIEditorBinding := "DateTimePicker";

    // Применим изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в менеджере безопасности для пользователей
 будет добавлен временной [атрибут](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#properties_attr)
 со значением в формате <ДД.ММ.ГГГГ
 ЧЧ:ММ>.


См. также:


[IABACAttribute](IABACAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
