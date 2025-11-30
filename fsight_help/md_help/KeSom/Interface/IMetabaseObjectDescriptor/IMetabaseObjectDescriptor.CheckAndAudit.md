# IMetabaseObjectDescriptor.CheckAndAudit

IMetabaseObjectDescriptor.CheckAndAudit
-


# IMetabaseObjectDescriptor.CheckAndAudit


## Синтаксис


		CheckAndAudit(Operation: Integer; Comment:
		 String): Decimal;


## Параметры


Operation. Маска, определяющая
 операции, наличие прав на которые необходимо проверить для текущего пользователя.
 Для формирования значения маски необходимо использовать значения перечисления
 типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm). В этом
 перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права и вести аудит доступа. Для определенных
 классов объектов доступны специфические
 операции. Для использования специфических операций, в зависимости от класса
 объекта, в маске можно использовать значения следующих перечислений:


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
	 - специфические операции, доступные для объекта репозитория «База
	 данных»;


	- [DictionarySpecificRights](../../Enums/DictionarySpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория «Справочник
	 НСИ» и «Составной справочник НСИ»;


	- [MDCalcSpecificRights](../../Enums/MDCalcSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория «Многомерный
	 расчет на сервере БД»;


	- [ProblemSpecificRights](../../Enums/ProblemSpecificRights.htm)
	 - специфические операции, доступные для объекта контейнера моделирования
	 «Задача моделирования»;


	- [ProcedureSpecificRights](../../Enums/ProcedureSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория «Процедура»;


	- [ScenarioDimensionSpecificRights](../../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория «Сценарий
	 моделирования»;


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 «Таблица», «Представление», «Журнал», «Присоединенная таблица»;


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория «Правило
	 валидации» и «Группа валидаций».


Comment. Комментарий, который
 заносится в протокол доступа.


## Описание


Метод CheckAndAudit проверяет
 права доступа текущего пользователя на указанные операции и заносит запись
 в протокол доступа с указанным комментарием.


## Комментарии


Если у текущего пользователя отсутствуют права хотя бы на одну из проверяемых
 операций, то в протокол доступа будет занесена запись с неуспешным результатом
 и будет сгенерирована исключительная ситуация.


Метод возвращает уникальный ключ записи, который вместе с записью заносится
 в протокол доступа.


Если необходимо проверить права доступа на [операцию
 пользовательского класса](../IMetabaseCustomClassOperation/IMetabaseCustomClassOperation.htm), то используйте метод [IMetabaseCustomObject.CheckAndAudit](../IMetabaseCustomObject/IMetabaseCustomObject.CheckAndAudit.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1111».


Добавьте ссылку на системную сборку Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("Obj_1111");

		    MObj.CheckAndAudit(

		    MetabaseObjectPredefinedRights.Delete Or

		    MetabaseObjectPredefinedRights.Access,

		    "Проверка наличия прав у текущего пользователя на операции Удаление и Изменение прав" );

		End Sub UserProc;


После выполнения примера будет осуществлена проверка наличия прав у
 текущего пользователя на удаление и изменение прав доступа объекта «Obj_1111».
 В протокол доступа будет добавлена соответствующая запись.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
