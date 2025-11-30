# IABACPolicy.Key

IABACPolicy.Key
-


# IABACPolicy.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 политики.


## Пример


Для выполнения примера убедитесь, что в [атрибутном
 доступе](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) содержится набор политик с вложенной политикой.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policy: IABACPolicy;

    MB: IMetabase;

    MS: IMetabaseSecurity;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Получим структуру атрибутного доступа

    PolicyObject := MB.Security.Policy.ABACRules;

    // Выведем в консоль свойства первой политики в наборе политик

    PolicySet := PolicyObject.Policies.Item(0);

    Policy := PolicySet.Policies.Item(0);

    Debug.WriteLine(Policy.Name(MB.CurrentLocale)); // наименование

    Debug.WriteLine(Policy.Key); // ключ

    Debug.WriteLine(Policy.Id); // идентификатор

End Sub UserProc;


В результате выполнения примера в консоль будет выведено наименование,
 ключ и идентификатор указанной политики:


Тестовая политика


10


TEST_POLICY


См. также:


[IABACPolicy](IABACPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
