# Определение прав доступа субъекта к объекту

Определение прав доступа субъекта к объекту
-


# Определение прав доступа субъекта к объекту


Права доступа субъекта на выполнение операции над объектом определяются
 с помощью интерфейса [IABACEngine](../Interface/IABACEngine/IABACEngine.htm).


Для определения доступа задаются:


	- [атрибуты
	 субъекта](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject), для которого проверяется доступ к объекту;


	- [атрибуты
	 объекта](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object), к которому проверяется доступ субъекта;


	- [атрибуты
	 среды окружения](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment) по умолчанию;


	- структура атрибутного доступа, через которую определяется доступ
	 к объекту.


Атрибуты субъекта определяются с помощью свойства [IMetabaseUser.Attributes](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.Attributes.htm),
 атрибуты объекта - [IMetabaseObjectDescriptor.Attributes](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Attributes.htm),
 атрибуты среды окружения - [IMetabaseSecurity.EnvironmentAttributes](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.EnvironmentAttributes.htm).


Для формирования структуры атрибутного доступа обратитесь к статье «[Формирование структуры атрибутного
 доступа](Structure_AttrAccess.htm)».


Рассмотрим пример определения прав доступа пользователя на чтение объекта.


## Пример


Для выполнения примера должны выполняться условия:


	- в менеджере безопасности содержится хотя бы один пользователь;


	- в репозитории содержится объект с ключом «12254»;


	- в структуре атрибутного доступа есть [правило](admin.chm::/04_securitypolicy/admin_attributeaccess.htm#rule):


		- цель: «OPERATION = 2»;


		- эффект: разрешить;


	- вся структура атрибутного доступа [переопределена
	 разрешением](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#properties). Если хотя бы один из результатов вычисления
	 вернет разрешение, то доступ пользователю на выполнение операции над
	 объектом будет разрешен.


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Engine: IABACEngine;

    Res: ABACEvaluateResult;

    User, Obj, Env: IABACAttributeInstances;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Получим атрибуты среды окружения

    Env := MS.EnvironmentAttributes;

    // Получим атрибуты первого пользователя и объекта с ключом «12254»

    User := MS.Users.Item(0).Attributes;

    Obj := MB.Root.Children.FindByKey(12254).Attributes;

    // Выведем в консоль наименование полученного пользователя и объекта

    Debug.WriteLine("Пользователь: " + MS.Users.Item(0).Name);

    Debug.WriteLine("Объект: " + MB.Root.Children.FindByKey(12254).Name);

    // Зададим методы для вычисления доступа пользователя к объекту

    Engine := New ABACEngine.Create;

    Engine.SetEnvironment(Env);

    Engine.SetParams(User, Obj);

    // Зададим структуру атрибутного доступа, которая содержится в менеджере безопасности

    Engine.SetPolicy(MB.Security.Policy.ABACRules);

    // Проверим доступ на чтение объекта и выведем результат в консоль

    Res := Engine.Evaluate(2);

    Select Case Res As Integer

        Case 0: Debug.WriteLine("Доступ не определен");

        Case 1: Debug.WriteLine("Правило не применимо");

        Case 2: Debug.WriteLine("Доступ разрешен");

        Case 3: Debug.WriteLine("Доступ запрещен");

    End Select;

End Sub UserProc;


В результате выполнения примера в консоль будет выведен результат доступа:


Пользователь: ADMIN


Объект: Системные объекты


Доступ разрешен


См. также:


[Общие
 принципы программирования с использованием сборки ABAC](KeABAC_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
