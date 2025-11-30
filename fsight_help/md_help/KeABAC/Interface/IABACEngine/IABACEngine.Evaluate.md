# IABACEngine.Evaluate

IABACEngine.Evaluate
-


# IABACEngine.Evaluate


## Синтаксис


Evaluate(Operation: Integer): [ABACEvaluateResult](../../Enums/ABACEvaluateResult.htm);


## Параметры


Operation. Значение [основной](KeSom.chm::/Enums/MetabaseObjectPredefinedRights.htm)
 или специфической операции над объектом.


## Описание


Метод Evaluate возвращает результат
 доступа субъекта к объекту.


## Комментарии


Списки кодов специфических операций для параметра Operation
 содержатся в перечислениях сборки [Metabase](KeSom.chm::/Enums/KeSom_Enums.htm).


Примечание.
 Если в [цели](Admin.chm::/04_SecurityPolicy/Target.htm)
 задан атрибут среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
 с условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)»,
 то параметр может принимать значение дочерней операции. Например, в цели
 атрибутного доступа задана операция «2 - Чтение», тогда параметр метода
 может принимать значение «256 - Чтение дескриптора».


Если в [цели](Admin.chm::/04_SecurityPolicy/Target.htm)
 задан атрибут среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
 с условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)»,
 то для вычисления метода IABACEngine.Evaluate используйте метод
 [IABACEngine.SetOperations](IABACEngine.SetOperations.htm),
 иначе задайте значение переменной «Operation» аналогично значению в цели
 атрибутного доступа.


## Пример


Для выполнения примера должны выполняться условия:


	- в менеджере безопасности содержится хотя бы один пользователь;


	- для [пользователей](admin.chm::/04_securitypolicy/creating_attributes.htm#subject)
	 добавлен атрибут с идентификатором «ATTR1» и типом данных «Целый»;


	- в репозитории содержится объект с ключом «12254»;


	- в структуре атрибутного доступа есть [правило](admin.chm::/04_securitypolicy/admin_attributeaccess.htm#rule):


		- цель: «OPERATION IN 2»;


		- условие: «SUBJECT.ATTR1 = 123»;


		- эффект: разрешить;


	- вся структура атрибутного доступа [переопределена
	 разрешением](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#properties). Если хотя бы один из результатов
	 вычисления вернет разрешение, то доступ пользователю на выполнение
	 операции над объектом будет разрешен.


Добавьте ссылки на системные сборки: ABAC, Metabase.


	Public Class Callback:Object, IABACEvaluateCallback

	    Public Function AttrValue(Id: String; Var Success: Boolean): Object;

	    Begin

	        Success := False;

	    Return Null;

	    End Function AttrValue;


	    Public Function AttrValueRaw(Id:String; Var Result:Variant):Boolean;

	    Var

	        Success: Boolean;

	    Begin

	        If Id = "ATTR1" Then

	            Result := 123;

	            Success := True;

	        Else

	            Success := False;

	        End If;

	        Return Success;

	    End Function AttrValueRaw;

	End Class Callback;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    Calb: Callback;

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

	    Engine.SetCallback(Calb);

	    Engine.SetOperations(2,4,1);

	    // Зададим структуру атрибутного доступа, которая содержится в менеджере безопасности

	    Engine.SetPolicy(MB.Security.Policy.ABACRules);

	    // Проверим доступ на чтение дескриптора объекта и выведем результат в консоль

	    Res := Engine.Evaluate(256);

	    Select Case Res As Integer

	        Case 0: Debug.WriteLine("Доступ не определен");

	        Case 1: Debug.WriteLine("Правило не применимо");

	        Case 2: Debug.WriteLine("Доступ разрешен");

	        Case 3: Debug.WriteLine("Доступ запрещен");

	    End Select;

	End Sub UserProc;


В результате выполнения примера:


	- При проверке цели атрибутного доступа будет найден атрибут «ATTR1»
	 без заданного значения.


	- Вычислитель обратится к функции AttrValue
	 для получения значения атрибута «123».


	- Проверяется условие после успешного выполнения цели. Условие
	 выполняется при найденном атрибуте «ATTR1» со значением «123».


	- Чтение дескриптора объекта доступно для пользователя.


В консоль будет выведен результат доступа:


Пользователь: ADMIN


Объект: Системные объекты


Доступ разрешен


См. также:


[IABACEngine](IABACEngine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
