# IABACRootPolicyObject.Metabase

IABACRootPolicyObject.Metabase
-


# IABACRootPolicyObject.Metabase


## Синтаксис


Metabase: Object;


## Описание


Свойство Metabase возвращает
 данные репозитория.


## Комментарии


Данное свойство актуально при определении [отдельной](../../Class/ABACRootPolicyObject/ABACRootPolicyObject.htm)
 структуры атрибутного доступа.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    Engine: IABACEngine;

    PolicyObject: IABACRootPolicyObject;

    PolicySet: IABACPolicySet;

    Policy: IABACPolicy;

    Res: ABACEvaluateResult;

    MB: IMetabase;

    User, ObjDescr, Env: IABACAttributeInstances;

Begin

    MB := MetabaseClass.Active;

    // Создадим отдельную структуру атрибутного доступа

    PolicyObject := New ABACRootPolicyObject.Create;

    PolicyObject.Metabase := MB;

    PolicyObject.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    // Создадим набор политик

    PolicySet := PolicyObject.Policies.Add;

    PolicySet.Name(LocaleCodeID.None) := "Тестовый набор политик";

    PolicySet.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    // Создадим политику

    Policy := PolicySet.Policies.Add;

    Policy.Name(LocaleCodeID.None) := "Тестовая политика";

    Policy.Target.AttributeId := "OPERATION";

    Policy.Target.Operation := ABACTargetOperation.Equal;

    Policy.Target.AttributeValue := 2;

    Policy.CombineAlgorithm := ABACCombineAlgorithm.PermitOverride;

    // Получим атрибуты первого пользователя, второго объекта и атрибуты среды окружения

    User := MB.Security.Users.Item(0).Attributes;

    ObjDescr := MB.Root.Children.Item(1).Attributes;

    Env := MB.Security.EnvironmentAttributes;

    // Выведем в консоль наименование полученного пользователя и объекта

    Debug.WriteLine("Пользователь: " + MB.Security.Users.Item(0).Name);

    Debug.WriteLine("Объект: " + MB.Root.Children.Item(1).Name);

    // Зададим вычислитель доступа пользователя к объекту

    Engine := New ABACEngine.Create;

    Engine.SetEnvironment(Env);

    Engine.SetParams(User, ObjDescr);

    Engine.SetPolicy(PolicyObject); // созданная структура атрибутного доступа

    // Проверим доступ на чтение объекта

    Res := Engine.Evaluate(2);

    Select Case Res As Integer

        Case 0: Debug.WriteLine("Доступ не определен");

        Case 1: Debug.WriteLine("Правило не применимо");

        Case 2: Debug.WriteLine("Доступ разрешен");

        Case 3: Debug.WriteLine("Доступ запрещен");

    End Select;

End Sub UserProc;


В результате выполнения примера для вычисления доступа на чтение объекта
 будет использоваться отдельно заданная структура атрибутного доступа.


В консоль будет выведен результат доступа:


Пользователь: ADMIN


Объект: Системные объекты


Доступ разрешен


См. также:


[IABACRootPolicyObject](IABACRootPolicyObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
