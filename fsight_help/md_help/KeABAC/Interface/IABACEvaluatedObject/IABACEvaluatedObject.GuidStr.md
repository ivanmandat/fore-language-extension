# IABACEvaluatedObject.GuidStr

IABACEvaluatedObject.GuidStr
-


# IABACEvaluatedObject.GuidStr


## Синтаксис


GuidStr: String;


## Описание


Свойство GuidStr позволяет получить
 уникальный идентификатор элемента структуры [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) в виде строки.


## Пример


Для выполнения примера убедитесь, что в атрибутном доступе содержится
 набор политик с вложенным набором политик.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub Main;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet, PolicySet2: IABACPolicySet;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    PolicyObject := MB.Security.Policy.ABACRules;

    // Получим первый набор политик в структуре атрибутного доступа

    PolicySet := PolicyObject.Policies.Item(0);

    // Получим первый набор политик в выбранном наборе

    PolicySet2 := PolicySet.PolicySets.Item(0);

    // Выведем в консоль уникальный идентификатор набора политик

    Debug.WriteLine("Уникальный идентификатор (Guid): " + PolicySet.GuidStr);

    Debug.WriteLine("Уникальный идентификатор (Guid): " + PolicySet2.GuidStr);

    // Освободим лицензию

    Lic := Null;

End Sub Main;


В результате выполнения примера в консоль будут выведены уникальные
 идентификаторы наборов политик структуры атрибутного доступа в виде строки:


Уникальный идентификатор (Guid): {31C234D0-73CB-4223-8829-AA8C58C2D0AD}


Уникальный идентификатор (Guid): {C49B51FD-DE78-4E64-9C0E-3C8C8336CE15}


См. также:


[IABACEvaluatedObject](IABACEvaluatedObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
