# IABACRules.AddCopy

IABACRules.AddCopy
-


# IABACRules.AddCopy


## Синтаксис


AddCopy(Value: [IABACRule](../IABACRule/IABACRule.htm)):
 [IABACRule](../IABACRule/IABACRule.htm);


## Описание


Метод AddCopy осуществляет добавление
 копии указанного правила в политику.


## Пример


Для выполнения примера убедитесь, что в структуре [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) содержатся две политики. Во второй политике
 содержится правило с идентификатором RULE.


Добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policy: IABACPolicy;

    Rule: IABACRule;

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

    // Получим политику с индексом «1» в первом наборе политик

    PolicySet := PolicyObject.Policies.Item(0);

    Policy := PolicySet.Policies.Item(1);

    // Найдем правило с идентификатором «RULE»

    Rule := Policy.Rules.FindById("RULE");

    // Получим политику с индексом «0»

    Policy := PolicySet.Policies.Item(0);

    // Скопируем найденное правило из политики с индексом «1» в политику с индексом «0»

    Policy.Rules.AddCopy(Rule);

    // Применим изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в заданную политику атрибутного доступа
 будет скопировано существующее правило из другой политики.


См. также:


[IABACRules](IABACRules.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
