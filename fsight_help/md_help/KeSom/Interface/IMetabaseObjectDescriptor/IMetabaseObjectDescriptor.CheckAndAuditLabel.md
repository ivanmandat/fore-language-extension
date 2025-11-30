# IMetabaseObjectDescriptor.CheckAndAuditLabel

IMetabaseObjectDescriptor.CheckAndAuditLabel
-


# IMetabaseObjectDescriptor.CheckAndAuditLabel


## Синтаксис


CheckAndAuditLabel(Operation: Integer; Comment:
 String; Var Label: [ISecurityDocumentLabel](../ISecurityDocumentLabel/ISecurityDocumentLabel.htm));


## Параметры


Operation. Маска, определяющая
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
	 - специфические операции, доступные для различных видов кубо;


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


	- [ScenarioDimensionSpecificRights](../../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Сценарий
	 моделирования;


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 - Таблица, Представление, Журнал, Присоединенная таблица;


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Правило
	 валидации и Группа валидаций.


Comment. Комментарий, который
 заносится в протокол доступа;


Label.
 Переменная, в которую будут помещены параметры метки безопасности.


## Описание


Метод CheckAndAuditLabel проверяет
 права доступа текущего пользователя на указанные операции и заносит запись
 в протокол доступа с указанным комментарием, а также вычисляет параметры
 метки безопасности, используемой при печати и экспорте объектов репозитория.


## Комментарии


Метка безопасности вычисляется при включенном мандатном доступе к объектам.


Если у текущего пользователя отсутствуют права хотя бы на одну из проверяемых
 операций, то в протокол доступа будет занесена запись с неуспешным результатом
 и будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Obj_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    SecLabel: ISecurityDocumentLabel;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Obj_1");

	    MObj.CheckAndAuditLabel(

	        MetabaseObjectPredefinedRights.Delete Or

	        MetabaseObjectPredefinedRights.Access,

	        "Проверка наличия прав у текущего пользователя на операции Удаление и Изменение прав" ,

	        SecLabel);

	    If SecLabel.IsON Then

	        Debug.WriteLine(SecLabel.Label);

	        Debug.WriteLine(SecLabel.LabelDescription);

	        Debug.WriteLine(SecLabel.TreatSectionAsDocument);

	        Debug.WriteLine(SecLabel.User.Name);

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлена проверка наличия прав у
 текущего пользователя на удаление и изменение прав доступа указанного
 объекта. В протокол доступа будет добавлена соответствующая запись. Если
 в репозитории включен мандатный контроль доступа и для объекта выставлен
 уровень, для которого предусмотрена маркировка объектов при экспорте и
 печати, то в переменной «Lab» будут содержаться параметры метки безопасности,
 используемой для маркировки. Данные параметры будут выведены в консоль
 среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
