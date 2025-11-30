# ISecurityDescriptor.GetDeniedAccess

ISecurityDescriptor.GetDeniedAccess
-


# ISecurityDescriptor.GetDeniedAccess


## Синтаксис


GetDeniedAccess(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);
 DesiredAccess: Integer): Integer;


## Параметры


Subject. Субъект безопасности,
 для которого проверяется наличие установленных запретов.


DesiredAccess. Желаемая маска
 доступа, относительно которой вычисляются установленные запреты.


## Описание


Метод GetDeniedAccess для указанного
 субъекта безопасности проверяет наличие установленных запретов выполнения
 действий над текущим объектом.


## Комментарии


Метод вычисляет запреты относительно желаемой маски доступа. Значение
 маски в параметре DesiredAccess является
 4-x байтовым двоичным числом, приведённым к десятичному виду. Для формирования
 значения маски необходимо использовать значения перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
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


Результатом выполнения метода будет маска запретов, также сформированная
 из элементов указанных выше перечислений.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 STD_CUBE.


Добавьте ссылки на системные сборки: Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Subject: ISecuritySubject;

    SDesc: ISecurityDescriptor;

Begin

    Mb := MetabaseClass.Active;

    Subject := Mb.LogonSession.User;

    SDesc := Mb.ItemById("STD_CUBE").SecurityDescriptor;

    Debug.WriteLine(SDesc.GetDeniedAccess(Subject, MetabaseObjectPredefinedRights.All));

End Sub UserProc;


При выполнении примера для текущего пользователя будут вычислены запреты,
 установленные на куб. Запреты вычисляются относительно максимально возможного
 доступа.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
