# IABACPolicies.IndexOf

IABACPolicies.IndexOf
-


# IABACPolicies.IndexOf


## Синтаксис


IndexOf(Value: [IABACPolicy](../IABACPolicy/IABACPolicy.htm)):
 Integer;


## Параметры


Value. Значение политики.


## Описание


Метод IndexOf возвращает индекс
 политики в структуре [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Комментарии


Если указанная политика не найдена, то метод возвращает значение «-1».


Индексация политик начинается с нуля.


Для получения элемента структуры атрибутного доступа по его индексу
 используйте свойство [IABACPolicies.Item](IABACPolicies.Item.htm).


## Пример


Для выполнения примера убедитесь, что в атрибутном доступе содержится
 набор политик с двумя вложенными политиками.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub Main;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policies: IABACPolicies;

    Policy: IABACPolicy;

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

    // Получим политику с индексом 0 в первом наборе политик

    PolicySet := PolicyObject.Policies.Item(0);

    Policies := PolicySet.Policies;

    // Добавим политику

    Policy := PolicySet.Policies.Add;

    Policy.Name(LocaleCodeID.Russian) := "Тестовая политика";

    Policy.Id := "POLICY";

    // Получим индекс политики

    Index := Policies.IndexOf(Policy);

    // Выведем в консоль наименование и индекс политики

    Debug.WriteLine(Policy.Name(MB.CurrentLocale));

    Debug.WriteLine("Индекс = " + Index.ToString);

    // Освободим лицензию

    Lic := Null;

End Sub Main;


В результате выполнения примера в консоль будет выведено сообщение:


Тестовая политика


Индекс = 2


См. также:


[IABACPolicies](IABACPolicies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
