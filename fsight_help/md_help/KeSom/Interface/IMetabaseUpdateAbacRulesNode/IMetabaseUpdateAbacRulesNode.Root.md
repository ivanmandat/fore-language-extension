# IMetabaseUpdateAbacRulesNode.Root

IMetabaseUpdateAbacRulesNode.Root
-


# IMetabaseUpdateAbacRulesNode.Root


## Синтаксис


Root: [IABACRootPolicyObject](KeABAC.chm::/Interface/IABACRootPolicyObject/IABACRootPolicyObject.htm);


## Описание


Свойство Root определяет элемент,
 находящийся на первом уровне иерархии [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Пример


Для выполнения примера убедитесь, что в структуре атрибутного доступа содержится
 набор политик и на диске С находится файл обновления Update.pefx.


Добавьте ссылки на системные сборки: ABAC, Metabase.


	Sub Main;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    PolicyObject, PolicyObjectPef: IABACRootPolicyObject;

	    PolicySet, PolicySetPef: IABACEvaluatedObject;

	    Policy: IABACPolicy;

	    Update: IMetabaseUpdate;

	    AbacRulesNode: IMetabaseUpdateAbacRulesNode;

	    s: string;

	Begin

	    // Получим доступ к репозиторию

	    MB := MetabaseClass.Active;

	    MS := MB.Security;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    // Добавим правила атрибутного доступа в обновление

	    AbacRulesNode := Update.AbacRulesNode;

	    AbacRulesNode.Label := "Правила ABAC";

	    // Получим структуру атрибутного доступа

	    PolicyObject := MB.Security.Policy.ABACRules;

	    // Получим набор политик с индексом «0»

	    PolicySet := PolicyObject.Policies.Item(0);

	    // Определим элемент, находящийся на первом уровне атрибутного доступа

	    PolicyObjectPef := AbacRulesNode.Root;

	    PolicySetPef := PolicyObjectPef.FindByGuidStr(PolicySet.GuidStr);

	    If PolicySetPef <> Null Then

	        Debug.WriteLine("Набор политик уже был добавлен в обновление");

	        Return;

	    End If;

	    AbacRulesNode.Add(PolicySet, True);

	    PolicySetPef := PolicyObjectPef.FindByGuidStr(PolicySet.GuidStr);

	    If PolicySet <> Null Then

	        Debug.WriteLine("Набор политик добавлен в обновление");

	    Else

	        Debug.WriteLine("Набор политик не добавлен в обновление");

	    End If;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub Main;


В результате выполнения примера в консоль будет выведено сообщение:


	- если набора политик не было в обновлении:


Набор политик добавлен
 в обновление


	- если набор политик был в обновлении:


Набор политик уже был
 добавлен в обновление


См. также:


[IMetabaseUpdateAbacRulesNode](IMetabaseUpdateAbacRulesNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
