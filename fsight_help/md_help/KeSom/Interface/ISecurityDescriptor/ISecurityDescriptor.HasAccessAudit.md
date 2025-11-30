# ISecurityDescriptor.HasAccessAudit

ISecurityDescriptor.HasAccessAudit
-


# ISecurityDescriptor.HasAccessAudit


## Синтаксис


HasAccessAudit(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);
 DesiredAccess: Integer; Var Access: Boolean; Var Audit: Boolean);


## Параметры


Subject. Субъект безопасности,
 для которого осуществляется проверка наличия прав на определенные операции
 над объектом.


DesiredAccess. Маска, определяющая
 операции, наличие прав на которые, необходимо проверить для субъекта безопасности
 Subject. Для формирования значения
 маски необходимо использовать значения перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm). В
 этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права и вести аудит доступа. Для определенных
 классов объектов доступны специфические
 операции. Для использования специфических операций, в зависимости от класса
 объекта, в маске можно использовать значения следующих перечислений:


	- [CalculatedCubeSpecificRights](../../Enums/CalculatedCubeSpecificRights.htm)
	 - специфические операции, доступные для вычисляемых кубов.


	- [CubeLoaderSpecificRights](../../Enums/CubeLoaderSpecificRights.htm)
	 - специфические операции, доступные для загрузчика данных в куб.


	- [CubeSpecificRights](../../Enums/CubeSpecificRights.htm)
	 - специфические операции, доступные для различных видов кубов.


	- [CustomObjectSpecificRights](../../Enums/CustomObjectSpecificRights.htm)
	 - специфические операции, доступные для объектов пользовательских
	 классов.


	- [DataBaseSpecificRights](../../Enums/DataBaseSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - База
	 данных.


	- [DictionarySpecificRights](../../Enums/DictionarySpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория - Справочник
	 НСИ и Составной справочник НСИ.


	- [MDCalcSpecificRights](../../Enums/MDCalcSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Многомерный
	 расчет на сервере БД.


	- [ProblemSpecificRights](../../Enums/ProblemSpecificRights.htm)
	 - специфические операции, доступные для объекта контейнера моделирования
	 - Задача моделирования.


	- [ProcedureSpecificRights](../../Enums/ProcedureSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Процедура.


	- [ScenarioDimensionSpecificRights](../../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Сценарий
	 моделирования.


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 - Таблица, Представление, Журнал, Присоединенная таблица.


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Правило
	 валидации и Группа валидаций.


Access. Переменная, в которой
 будет содержаться признак наличия прав на указанные операции над объектом.
 В переменной будет содержаться значение True,
 если субъект безопасности имеет права произвести все указанные операции
 над объектом.


Audit. Переменная, в которой
 будет содержаться признак ведения аудита указанных операций для субъекта
 безопасности Subject. В переменной
 будет содержаться значение True,
 если для указанного субъекта безопасности будет вестись аудит хотя бы
 по одной из указанных операций.


## Описание


Метод HasAccessAudit осуществляет
 проверку и возвращает признак наличия прав произвести указанные операции,
 и признак ведения аудита для указанных операций над объектом.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1». Среди субъектов безопасности, созданных в менеджере
 безопасности текущего репозитория, имеется пользователь «TestUser».


			Sub UserProc;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    Subj: ISecuritySubject;

    b, b1: Boolean;

Begin

    MB := MetabaseClass.Active;

    Subj := MB.Security.ResolveName("TestUser");

    MDesc := MB.ItemById("Obj_1");

    SecDesc := MDesc.SecurityDescriptor;

    SecDesc.HasAccessAudit(Subj,

        MetabaseObjectPredefinedRights.Access +

        MetabaseObjectPredefinedRights.Delete, b, b1);

End Sub UserProc;


После выполнения примера в переменных «b» будут содержаться признаки
 наличия прав на изменение прав и удаление объекта, а в переменной «b1»
 - признак ведения аудита одной из этих операций. Проверка осуществляется
 для объекта репозитория «Obj_1» относительно пользователя «TestUser».


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
