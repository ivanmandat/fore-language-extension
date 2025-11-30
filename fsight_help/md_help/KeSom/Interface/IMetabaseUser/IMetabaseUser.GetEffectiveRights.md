# IMetabaseUser.GetEffectiveRights

IMetabaseUser.GetEffectiveRights
-


# IMetabaseUser.GetEffectiveRights


## Синтаксис


GetEffectiveRights(SecurityDescriptor: [ISecurityDescriptor](../ISecurityDescriptor/ISecurityDescriptor.htm)):
 Integer;


## Параметры


SecurityDescriptor. Параметры
 безопасности объекта репозитория.


## Описание


Метод GetEffectiveRights возвращает
 значение, соответствующее эффективным правам доступа данного пользователя
 к объекту репозитория.


## Комментарии


Эффективные права включают в себя все операции, на которые для пользователя
 установлено явное разрешение. Значение, возвращаемое данным методом, представляет
 собой маску доступа. Значение маски является 4-x байтовым двоичным числом,
 приведенным к десятичному виду. Для проверки значения маски необходимо
 использовать значения перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права. Для определенных классов объектов доступны
 специфические операции. Для проверки
 специфических операций, в зависимости от класса объекта, можно использовать
 значения следующих перечислений:


	- [CalculatedCubeSpecificRights](../../Enums/CalculatedCubeSpecificRights.htm)
	 - специфические операции, доступные для вычисляемых кубов;


	- [CubeLoaderSpecificRights](../../Enums/CubeLoaderSpecificRights.htm)
	 - специфические операции, доступные для загрузчика данных в куб;


	- [CubeSpecificRights](../../Enums/CubeSpecificRights.htm)
	 - специфические операции, доступные для различных видов кубов;


	- [CustomObjectSpecificRights](../../Enums/CustomObjectSpecificRights.htm)
	 - специфические операции, доступные для объектов пользовательских
	 классов;


	- [DataBaseSpecificRights](../../Enums/DataBaseSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - База
	 данных;


	- [DictionarySpecificRights](../../Enums/DictionarySpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория - Справочник
	 НСИ и Составной справочник НСИ;


	- [MDCalcSpecificRights](../../Enums/MDCalcSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Многомерный
	 расчет на сервере БД;


	- [ProblemSpecificRights](../../Enums/ProblemSpecificRights.htm)
	 - специфические операции, доступные для объекта контейнера моделирования
	 - Задача моделирования;


	- [ProcedureSpecificRights](../../Enums/ProcedureSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Процедура;


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 - Таблица, Представление, Журнал, Присоединенная таблица;


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Правило
	 валидации и Группа валидаций;


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе [Типы
 событий](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm).


Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе [Примеры: Работа с маской
 доступа](../../Examples/Example_2_AccessMask.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1». Среди субъектов безопасности, созданных в менеджере
 безопасности текущего репозитория, имеется пользователь «TestUser».


			Sub Main;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    User: IMetabaseUser;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    User := MB.Security.ResolveName("TestUser") As IMetabaseUser;

    MDesc := MB.ItemById("Obj_1");

    i := User.GetEffectiveRights(MDesc.SecurityDescriptor);

    Debug.WriteLine(i);

End Sub Main;


После выполнения примера в переменной «i» будет содержаться значение,
 соответствующее эффективным правам, которые розданы указанному пользователю
 на объект «Obj_1».


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
