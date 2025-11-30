# IMetabaseUpdate.AbacRulesNode

IMetabaseUpdate.AbacRulesNode
-


# IMetabaseUpdate.AbacRulesNode


## Синтаксис


AbacRulesNode:
 [IMetabaseUpdateAbacRulesNode](../IMetabaseUpdateAbacRulesNode/IMetabaseUpdateAbacRulesNode.htm);


## Описание


Свойство AbacRulesNode возвращает
 структуру правил [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) в обновлении.


## Комментарии


Если структуры правил атрибутного доступа не было в обновлении, то она
 создается.


## Пример


Для выполнения примера убедитесь, что в структуре атрибутного доступа
 содержится набор политик с двумя вложенными политиками и на диске С находится
 файл обновления Update.pefx. В первой политике содержится несколько правил
 атрибутного доступа.


Добавьте ссылки на системные сборки: ABAC, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    PolicyObject: IABACRootPolicyObject;

	    PolicySet: IABACPolicySet;

	    Policy: IABACPolicy;

	    Update: IMetabaseUpdate;

	    UpdateNode, AbacRulesNode: IMetabaseUpdateAbacRulesNode;

	Begin

	    // Получим доступ к репозиторию

	    MB := MetabaseClass.Active;

	    MS := MB.Security;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    // Проверим наличие правил атрибутного доступа в обновлении

	    UpdateNode := Update.FindAbacRulesNode;

	    If UpdateNode <> Null Then

	        Debug.WriteLine("В обновлении есть Правила ABAC");

	    Else

	        // Будем переносить все атрибуты

	        Update.IncludeAbacAttributes := True;

	        // Добавим правила атрибутного доступа в обновление

	        AbacRulesNode := Update.AbacRulesNode;

	        AbacRulesNode.Label := "Правила ABAC";

	        // Получим структуру атрибутного доступа

	        PolicyObject := MB.Security.Policy.ABACRules;

	        // Получим первую политику в первом наборе политик

	        PolicySet := PolicyObject.Policies.Item(0);

	        Policy := PolicySet.Policies.Item(0);

	        // Сохраним в обновлении статусы полученной политики и вложенных правил

	        AbacRulesNode.KeepActive := True;

	        // Добавим политику с вложенными правилами в обновление

	        AbacRulesNode.Add(Policy, True);

	    End If;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


В результате выполнения примера в файл
 обновления Update.pefx будет добавлена первая политика атрибутного доступа
 с вложенными правилами. Также в обновлении будут сохранены [статусы](../IMetabaseUpdateAbacRulesNode/IMetabaseUpdateAbacRulesNode.KeepActive.htm)
 политики и правил.


При повторном выполнении примера в консоль будет выведено сообщение:


В обновлении есть «Правила ABAC»


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
