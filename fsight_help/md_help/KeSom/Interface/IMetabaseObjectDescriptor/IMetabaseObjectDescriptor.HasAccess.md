# IMetabaseObjectDescriptor.HasAccess

IMetabaseObjectDescriptor.HasAccess
-


# IMetabaseObjectDescriptor.HasAccess


## Синтаксис


		HasAccess(AccessMask: Integer): Boolean;


## Параметры


AccessMask. Маска, определяющая
 операции, наличие прав на которые, необходимо проверить для текущего пользователя.
 Для формирования значения маски необходимо использовать значения перечислимого
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
	 - специфические операции, доступные для объекта репозитория - База
	 данных;


	- [DictionarySpecificRights](../../Enums/DictionarySpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория - Справочник
	 НСИ и Составной справочник НСИ;


	- [MDCalcSpecificRights](../../Enums/MDCalcSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Многомерный
	 расчет на сервере БД;


	- [ScenarioDimensionSpecificRights](../../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Сценарий
	 моделирования;


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
	 валидации и Группа валидаций.


## Описание


Метод HasAccess осуществляет
 проверку наличия прав у текущего пользователя на определенные операции
 над объектом.


## Комментарии


Операции, наличие прав на которые необходимо проверить, передаются посредством
 параметра AccessMask. Если у
 текущего пользователя присутствуют права на все указанные операции, то
 метод возвращает значение True,
 иначе - False.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «ObjTest».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("ObjTest");

		    Debug.WriteLine(MObj.HasAccess(

		    MetabaseObjectPredefinedRights.ExportData Or

		    MetabaseObjectPredefinedRights.ImportData));

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен признак
 наличия прав у текущего пользователя на экспорт и импорт данных объекта
 с идентификатором «ObjTest».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
