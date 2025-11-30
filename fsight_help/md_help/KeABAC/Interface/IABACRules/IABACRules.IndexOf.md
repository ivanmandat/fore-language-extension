# IABACRules.IndexOf

IABACRules.IndexOf
-


# IABACRules.IndexOf


## Синтаксис


IndexOf(Value: [IABACRule](../IABACRule/IABACRule.htm)):
 Integer;


## Параметры


Value. Значение правила.


## Описание


Метод IndexOf возвращает индекс
 правила в политике атрибутного доступа.


## Комментарии


Если указанное правило не найдено, то метод возвращает значение «-1».


Индексация правил начинается с нуля.


Для получения элемента структуры атрибутного доступа по его индексу
 используйте свойство [IABACRules.Item](IABACRules.Item.htm).


## Пример


Для выполнения примера убедитесь, что в атрибутном доступе в наборе
 политик содержится политика с двумя вложенными правилами.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub Main;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policy: IABACPolicy;

    Rules: IABACRules;

    Rule: IABACRule;

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

    // Получим политику с индексом «1» в первом наборе политик

    PolicySet := PolicyObject.Policies.Item(0);

    Policy := PolicySet.Policies.Item(0);

    // Добавим правило

    Rules := Policy.Rules;

    Rule := Rules.Add;

    Rule.Name(LocaleCodeID.Russian) := "Тестовое правило";

    Rule.Id := "RULE";

    // Получим индекс правила

    Index := Rules.IndexOf(Rule);

    // Выведем в консоль наименование и индекс правила

    Debug.WriteLine(Rule.Name(MB.CurrentLocale));

    Debug.WriteLine("Индекс = " + Index.ToString);

    // Освободим лицензию

    Lic := Null;

End Sub Main;


В результате выполнения примера в консоль будет выведено сообщение:


Тестовое правило


Индекс = 2


См. также:


[IABACRules](IABACRules.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
