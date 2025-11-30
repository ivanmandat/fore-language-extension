# ISecurityDescriptor.GetEffectiveRights

ISecurityDescriptor.GetEffectiveRights
-


# ISecurityDescriptor.GetEffectiveRights


## Синтаксис


GetEffectiveRights(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)):
 Integer;


## Параметры


Subject. Субъект безопасности,
 для которого необходимо вычислить эффективные права доступа.


## Описание


Метод GetEffectiveRights осуществляет
 вычисление эффективных прав доступа указанного субъекта безопасности к
 объекту репозитория.


## Комментарии


При вычислении [эффективных
 прав](Admin.chm::/03_Admin/Admin_AdminObjects_Effective.htm) учитываются выбранные [методы разграничения
 доступа](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm). Если используется дискреционный
 контроль доступа, то для конкретного типа объектов дополнительно вычисляются
 права по классам.


Эффективные права включают в себя все операции, на которые для пользователя
 установлено явное разрешение. Значение, возвращаемое данным методом, представляет
 из себя маску доступа. Значение маски является 4-x байтовым двоичным числом,
 приведенным к десятичному виду. Для проверки значения маски необходимо
 использовать значения перечисления [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права. Для определенных классов объектов доступны
 специфические операции. Для проверки
 специфических операций, в зависимости от класса объекта, можно использовать
 значения следующих перечислений:


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


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе «[Типы
 событий](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm)».


Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе «[Работа с маской доступа](../../Examples/Example_2_AccessMask.htm)».


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

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Subj := MB.Security.ResolveName("TestUser");

    MDesc := MB.ItemById("Obj_1");

    SecDesc := MDesc.SecurityDescriptor;

    i := SecDesc.GetEffectiveRights(Subj);

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться значение,
 соответствующее эффективным правам, которые розданы указанному пользователю
 на объект «Obj_1».


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
