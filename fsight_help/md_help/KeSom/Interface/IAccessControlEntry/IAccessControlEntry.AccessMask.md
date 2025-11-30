# IAccessControlEntry.AccessMask

IAccessControlEntry.AccessMask
-


# IAccessControlEntry.AccessMask


## Синтаксис


AccessMask: Integer;


## Описание


Свойство AccessMask определяет
 маску доступа к объекту.


## Комментарии


Значение маски является 4-x байтовым двоичным числом, приведенным к
 десятичному виду. В зависимости от [типа
 дополнительного параметра](IAccessControlEntry.Type.htm) данное свойство возвращает различные значения:


	- разрешающий параметр - свойство возвращает значение, соответствующее
	 списку явно установленных разрешений на операции.


	- запрещающий параметр - свойство возвращает значение, соответствующее
	 списку явно установленных запретов на операции.


	- аудит операций над объектом - свойство возвращает значение,
	 соответствующее списку операций, для которых ведется аудит доступа.


Для формирования и проверки значения маски необходимо использовать значения
 перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
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


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе [Типы
 событий](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm).


Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе [Примеры: Работа с маской
 доступа](../../Examples/Example_2_AccessMask.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором TABLE. Среди субъектов безопасности, созданных в менеджере
 безопасности текущего репозитория, имеется пользователь «TestUser».


	Sub Main;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    User: ISecuritySubject;

	    Acl: IAccessControlList;

	    Entry, AllowedEntry, DeniedEntry: IAccessControlEntry;

	    AccessAllowed, AccessDenied: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("TABLE");

	    //Дескриптор безопасности объекта

	    SecDesc := MDesc.SecurityDescriptor;

	    //Пользователь, для которого необходимо изменить права доступа

	    User := MB.Security.ResolveName("TestUser");

	    SecDesc.Edit;

	    //Дополнительные параметры безопасности

	    Acl := SecDesc.Acl;

	    //Формирование разрешающей и запрещающей маски:

	    //Основные операции, которые будут разрешены

	    AccessAllowed := MetabaseObjectPredefinedRights.Read;

	    //Специфические операции, которые будут разрешены

	    AccessAllowed := AccessAllowed Or

	        TableSpecificRights.SelectRows Or

	        TableSpecificRights.UpdateRows;

	    //Основные операции, которые будут запрещены

	    AccessDenied := MetabaseObjectPredefinedRights.WritePars Or

	        MetabaseObjectPredefinedRights.WriteDescr;

	    //Специфические операции, которые будут запрещены

	    AccessDenied := AccessDenied Or

	        TableSpecificRights.InsertRows Or

	        TableSpecificRights.DeleteRows;

	    //Поиск дополнительного параметра безопасности,

	    //разрешающего операции для указанного пользователя

	    For Each Entry In Acl Do

	        If (Entry.Sid.AsString = User.Sid.AsString) And (Entry.Type = AceType.AccessAllowed) Then

	            AllowedEntry := Entry;

	        End If;

	    End For;

	    //Если параметр существует, то устанавливаем в нем сформированную маску,

	    //иначе создаем новый дополнительный параметр безопасности

	    If AllowedEntry <> Null Then

	        AllowedEntry.AccessMask := AccessAllowed;

	    Else

	        Acl.AddAce(AceType.AccessAllowed, User.Sid, AccessAllowed);

	    End If;

	    //Поиск дополнительного параметра безопасности,

	    //запрещающего операции для указанного пользователя

	    For Each Entry In Acl Do

	        If (Entry.Sid.AsString = User.Sid.AsString) And (Entry.Type = AceType.AccessDenied) Then

	            DeniedEntry := Entry;

	        End If;

	    End For;

	    //Если параметр существует, то устанавливаем в нем сформированную маску,

	    //иначе создаем новый дополнительный параметр безопасности

	    If DeniedEntry <> Null Then

	        DeniedEntry.AccessMask := AccessDenied;

	    Else

	        Acl.AddAce(AceType.AccessDenied, User.Sid, AccessDenied);

	    End If;

	    SecDesc.Apply(True);

	End Sub Main;


После выполнения примера для указанного объекта будут изменены элементы
 контроля доступа. Если в элементах контроля доступа имеются параметры,
 определяющие права доступа для пользователя «TestUser», то они будут изменены.
 Если соответствующих параметров нет, то они будут созданы. Разрешающая
 и запрещающая маска доступа формируются в переменных «AccessAllowed» и «AccessDenied»
 соответственно.


См. также:


[IAccessControlEntry](IAccessControlEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
