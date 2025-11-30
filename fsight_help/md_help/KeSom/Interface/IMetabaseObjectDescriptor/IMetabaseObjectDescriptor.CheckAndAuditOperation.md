# IMetabaseObjectDescriptor.CheckAndAuditOperation

IMetabaseObjectDescriptor.CheckAndAuditOperation
-


# IMetabaseObjectDescriptor.CheckAndAuditOperation


## Синтаксис


		CheckAndAuditOperation(Operation: Integer;
		 Comment: String; State: [MetabaseObjectAuditOperationState](../../Enums/MetabaseObjectAuditOperationState.htm)):
		 Decimal;


## Параметры


Operation. Маска проверяемой/протоколируемой
 операции, наличие прав на которые, необходимо проверить для текущего пользователя.
 Для формирования значения маски необходимо использовать значения перечисления
 [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm). В этом перечислении
 содержатся основные и дополнительные
 операции, на которые можно раздавать права и вести аудит доступа. Для
 определенных классов объектов доступны специфические
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


Comment. Комментарий, который
 заносится в протокол доступа;


State. Вариант аудита операции.


## Описание


Метод CheckAndAuditOperation
 проверяет права доступа текущего пользователя на указанные операции и
 протоколирует результат проверки в соответствии с выбранным вариантом
 аудита.


## Комментарии


Если у текущего пользователя отсутствуют права хотя бы на одну из проверяемых
 операций или выбран вариант аудита, запрещающий выполнение операции ([ForceDeny](../../Enums/MetabaseObjectAuditOperationState.htm),
 [ForceDenyAndAudit](../../Enums/MetabaseObjectAuditOperationState.htm)),
 то будет сгенерирована исключительная ситуация. В зависимости от имеющихся
 настроек аудита схемы и выбранного варианта аудита проверяемой операции
 (State) в протокол доступа может
 быть добавлена запись с неуспешным результатом.


Метод возвращает уникальный ключ записи, который вместе с записью заносится
 в протокол доступа.


Если необходимо проверить права доступа на [операцию
 пользовательского класса](../IMetabaseCustomClassOperation/IMetabaseCustomClassOperation.htm), то используйте метод [IMetabaseCustomObject.CheckAndAuditOperation](../IMetabaseCustomObject/IMetabaseCustomObject.CheckAndAuditOperation.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется регламентный
 отчет с идентификатором «Report_11».


Добавьте ссылки на системные сборки: Metabase, Ui.


		Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("Report_11");

		    Try

		        MObj.CheckAndAuditOperation(MetabaseObjectPredefinedRights.Write Or

		        MetabaseObjectPredefinedRights.Print,

		        "Проверка прав пользователя" ,

		        MetabaseObjectAuditOperationState.ForceDeny);

		    Except

		    On E: Exception Do

		    WinApplication.InformationBox(E.message);

		    End Try;

		End Sub Button1OnClick;


После выполнения примера будет сгенерирована исключительная ситуация
 (недостаточно прав для выполнения операций). В протокол доступа будет
 добавлена запись с неуспешным результатом, если в настройках аудита схемы
 включен аудит для типа проверяемого объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
