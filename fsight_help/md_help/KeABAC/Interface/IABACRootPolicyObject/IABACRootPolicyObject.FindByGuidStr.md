# IABACRootPolicyObject.FindByGuidStr

IABACRootPolicyObject.FindByGuidStr
-


# IABACRootPolicyObject.FindByGuidStr


## Синтаксис


FindByGuidStr(GuidStr: String): [IABACEvaluatedObject](../IABACEvaluatedObject/IABACEvaluatedObject.htm);


## Описание


Метод FindByGuidStr осуществляет
 поиск элемента структуры атрибутного доступа по [уникальному
 идентификатору](../IABACEvaluatedObject/IABACEvaluatedObject.GuidStr.htm).


## Пример


Для выполнения примера убедитесь, что в [атрибутном
 доступе](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) содержится набор политик c вложенной политикой.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policies: IABACPolicies;

    Policy: IABACEvaluatedObject;

    Guid: IABACEvaluatedObject;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим структуру атрибутного доступа

    PolicyObject := MB.Security.Policy.ABACRules;

    // Получим политику с индексом 0 в первом наборе политик

    PolicySet := PolicyObject.Policies.Item(0);

    Policies := PolicySet.Policies;

    Policy := Policies.Item(0);

    //Найдем элемент структуры атрибутного доступа по уникальному идентификатору

    Guid := PolicyObject.FindByGuidStr(Policy.GuidStr);

    // Выведем в консоль наименование и уникальный идентификатор набора политик

    Debug.WriteLine(Policy.Name(MB.CurrentLocale)); // наименование

    Debug.WriteLine(Policy.GuidStr); // уникальный идентификатор

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в консоль будет выведено наименование
 и уникальный идентификатор указанной политики, например:


Тестовый набор политик


{8AFCD069-B6DC-4205-A76C-7FF28AD78199}


См. также:


[IABACRootPolicyObject](IABACRootPolicyObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
