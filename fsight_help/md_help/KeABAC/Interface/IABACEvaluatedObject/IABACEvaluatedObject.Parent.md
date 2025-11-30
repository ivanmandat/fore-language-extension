# IABACEvaluatedObject.Parent

IABACEvaluatedObject.Parent
-


# IABACEvaluatedObject.Parent


## Синтаксис


Parent: Object;


## Описание


Свойство Parent позволяет получить
 родительский элемент для заданного элемента структуры [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Комментарии


В качестве самого верхнего родительского элемента выступает [первый
 уровень иерархии элементов](../IABACRootPolicyObject/IABACRootPolicyObject.htm).


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

    Parent: Object;

    s: string;

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

    //Зададим родительский элемент для выбранного набора

    Parent := PolicySet2.Parent;

    //Определим находится ли родительский элемент на первом уровне иерархии

    If Parent <> Null Then

        s := s + "parent";

        If Parent Is IABACRootPolicyObject Then

            s := s + " is a root";

        Else

            s := s + " is not a root";

        End If;

    Else

        s := s + "parent is empty";

    End If;

    Debug.WriteLine(s);

    // Освободим лицензию

    Lic := Null;

End Sub Main;


В результате выполнения примера в консоль будет выведено сообщение:


parent is not a root


См. также:


[IABACEvaluatedObject](IABACEvaluatedObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
