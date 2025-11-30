# IABACPolicySets.IndexOf

IABACPolicySets.IndexOf
-


# IABACPolicySets.IndexOf


## Синтаксис


IndexOf(Value: [IABACPolicySet](../IABACPolicySet/IABACPolicySet.htm)):
 Integer;


## Параметры


Value. Значение набора политик.


## Описание


Метод IndexOf возвращает индекс
 набора политик в структуре [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Комментарии


Если указанный набор политик не найден, то метод возвращает значение
 «-1».


Индексация наборов политик начинается с нуля.


Для получения элемента структуры атрибутного доступа по его индексу
 используйте свойство [IABACPolicySets.Item](IABACPolicySets.Item.htm).


## Пример


Для выполнения примера убедитесь, что в атрибутном доступе содержится
 два набора политик.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySets: IABACPolicySets;

    PolicySet: IABACPolicySet;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    Index: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим структуру атрибутного доступа

    PolicyObject := MB.Security.Policy.ABACRules;

    PolicySets := PolicyObject.Policies;

    // Добавим набор политик

    PolicySet := PolicyObject.Policies.Add;

    PolicySet.Name(MB.CurrentLocale) := "Тестовый набор политик";

    // Получим индекс набора политик

    Index := PolicySets.IndexOf(PolicySet);

    // Выведем в консоль наименование и индекс набора политик

    Debug.WriteLine(PolicySet.Name(MB.CurrentLocale));

    Debug.WriteLine("Индекс = " + Index.ToString);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в консоль будет выведено сообщение:


Тестовый набор политик


Индекс = 2


См. также:


[IABACPolicySets](IABACPolicySets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
