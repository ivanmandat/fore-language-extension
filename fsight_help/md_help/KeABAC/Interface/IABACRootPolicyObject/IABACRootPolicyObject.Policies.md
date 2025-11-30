# IABACRootPolicyObject.Policies

IABACRootPolicyObject.Policies
-


# IABACRootPolicyObject.Policies


## Синтаксис


Policies: [IABACPolicySets](../IABACPolicySets/IABACPolicySets.htm);


## Описание


Свойство Policies предназначено
 для обращения к коллекции наборов политик.


## Комментарии


Данное свойство актуально при определении структуры атрибутного доступа.


## Пример


Для выполнения примера убедитесь, что существует группа с наименованием
 «USERS» и объект с ключом «52».


Добавьте ссылки на системные сборки: ABAC, Metabase, Dal.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policy: IABACPolicy;

    Rules: IABACRules;

    Rule: IABACRule;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB:= MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS:= MB.Security;

    // Активируем использование атрибутного доступа

    MS.Policy.AttributeBasedAccessControl := True;

    PolicyObject := MS.Policy.ABACRules;

    // Зададим алгоритм атрибутного доступа - переопределение разрешением

    PolicyObject.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    // Очистим структуру атрибутного доступа

    PolicyObject.Policies.Clear;

    // Добавим набор политик

    PolicySet := PolicyObject.Policies.Add;

    PolicySet.Name(MB.CurrentLocale) := "Тестовый набор политик";

    PolicySet.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    // Добавим политику

    Policy := PolicySet.Policies.Add;

    Policy.Active := True;

    Policy.Name(LocaleCodeID.Russian) := "Тестовая политика";

    Policy.Id := "POLICY";

    Policy.Description(LocaleCodeID.Russian) := "Политика содержит правило для доступа на чтение объекта";

    Policy.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    Policy.Target.AttributeId := "SUBJECT.NAME";

    Policy.Target.Operation := ABACTargetOperation.Equal;

    Policy.Target.AttributeValue := "USERS";

    // Добавим правило

    Rules := Policy.Rules;

    Rule := Rules.Add;

    Rule.Active := True;

    Rule.Name(LocaleCodeID.Russian) := "Тестовое правило";

    Rule.Id := "RULE";

    Rule.Description(LocaleCodeID.Russian) := "Правило на чтение для группы USERS";

    Rule.Target.AttributeId := "OPERATION";

    Rule.Target.Operation := ABACTargetOperation.Equal;

    Rule.Target.AttributeValue := 2;

    Rule.Condition.AsString := "OBJECT.KEY = 52";

    Rule.Effect := ABACRuleEffect.Permit;

    Debug.WriteLine("Ключ правила: " + Rule.Key.ToString);

    // Применим изменения в менеджере безопасности

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера в менеджере безопасности будет активировано
 использование атрибутного доступа, добавлена заданная структура атрибутного
 доступа с определенными параметрами политики и правила для разрешения
 доступа на чтение объекта группе пользователей с наименованием «USERS»:


![](IABACRootPolicyObject_Policies.gif)


В консоль будет выведен ключ нового правила:


Ключ правила: 36


См. также:


[IABACRootPolicyObject](IABACRootPolicyObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
