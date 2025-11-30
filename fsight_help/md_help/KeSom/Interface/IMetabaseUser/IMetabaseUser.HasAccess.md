# IMetabaseUser.HasAccess

IMetabaseUser.HasAccess
-


# IMetabaseUser.HasAccess


## Синтаксис


HasAccess(SecurityDescriptor: [ISecurityDescriptor](../ISecurityDescriptor/ISecurityDescriptor.htm);
 DesiredAccess: Integer): Boolean;


## Параметры


SecurityDescriptor. Параметры
 безопасности объекта репозитория.


DesiredAccess. Маска, определяющая
 операции, наличие прав на которые, необходимо проверить для пользователя.
 Для формирования значения маски необходимо использовать значения перечислимого
 типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
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


## Описание


Метод HasAccess осуществляет
 проверку наличия прав у пользователя на определенные операции над объектом.


## Комментарии


Операции, наличие прав на которые необходимо проверить, передаются посредством
 параметра DesiredAccess. Если
 у пользователя присутствуют права на все указанные операции, то метод
 возвращает значение True, иначе
 - False.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором "Obj_1". Среди субъектов безопасности, созданных
 в менеджере безопасности текущего репозитория, имеется пользователь «TestUser».


			Sub Main;

Var

    MB: IMetabase;

    User: IMetabaseUser;

    MObj: IMetabaseObjectDescriptor;

Begin

    MB := MetabaseClass.Active;

    User := MB.Security.ResolveName("TestUser") As IMetabaseUser;

    MObj := MB.ItemById("Obj_1");

    Debug.WriteLine(User.HasAccess(MObj.SecurityDescriptor,

        MetabaseObjectPredefinedRights.ExportData Or

        MetabaseObjectPredefinedRights.ImportData));

End Sub Main;


После выполнения примера в консоль среды разработки будет выведен признак
 наличия прав у пользователя «TestUser» на экспорт и импорт данных объекта
 с идентификатором «Obj_1».


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
