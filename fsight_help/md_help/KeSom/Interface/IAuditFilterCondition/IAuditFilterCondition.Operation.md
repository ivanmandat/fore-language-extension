# IAuditFilterCondition.Operation

IAuditFilterCondition.Operation
-


# IAuditFilterCondition.Operation


## Синтаксис


Operation(Index: Integer): Integer;


## Параметры


Index. Индекс
 позиции определяемой операции.


## Описание


Свойство Operation определяет
 операции, информация по которым будет отображаться в протоколе доступа.


## Комментарии


Количество позиций определяется свойством [IAuditFilterCondition.OperationCount](IAuditFilterCondition.OperationCount.htm).


Значения операций могут совпадать, поэтому для определения однозначности
 операции обязательно следует задавать [класс
 объекта](IAuditFilterCondition.OperationClass.htm), для которого данные операции будут отображаться в протоколе
 доступа.


Для указания операции необходимо использовать значения перечислимого
 типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права и вести аудит доступа. Для определенных
 классов объектов доступны специфические
 операции. Для использования специфических операций, в зависимости от класса
 объекта, можно использовать значения следующих перечислений:


	- [AuditLogSpecificRights](../../Enums/AuditLogSpecificRights.htm)
	 - специфические операции, доступные для протокола доступа;


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


	- [ScenarioDimensionSpecificRights](../../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Сценарий
	 моделирования;


	- [ScheduledTaskSpecificRights](../../Enums/ScheduledTaskSpecificRights.htm)
	 - специфические операции, доступные для задач, создаваемых в контейнере
	 запланированных задач;


	- [SecuritySpecificRights](../../Enums/SecuritySpecificRights.htm)
	 - специфические операции, доступные для политики безопасности;


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 - Таблица, Представление, Журнал, Присоединенная таблица;


	- [UpdateObjectSpecificRights](../../Enums/UpdateObjectSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Обновление;


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Правило
	 валидации и Группа валидаций.


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе «[Протоколируемые
 операции](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm)».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Log: IAuditLog;

    Fil: IAuditFilter;

    Con: IAuditFilterCondition;

    AL: IAuditLogons;

    AO: IAuditOperations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    Log := Mb.Security.OpenAuditLog;

    Fil := Log.Filter;

    Fil.Clear;

    Con := Fil.Add;

    Con.MinDate := DateTime.Parse("11.01.2019 00:00:00");

    Con.OperationCount := 2;

    Con.Operation(0) := MetabaseObjectPredefinedRights.Create_;

    Con.OperationClass(0) := MetabaseObjectClass.KE_CLASS_METABASEUPDATEOBJECT;

    Con.Operation(1) := MetabaseObjectPredefinedRights.Delete Or MetabaseObjectPredefinedRights.Create_;

    Con.OperationClass(1) := MetabaseObjectClass.KE_CLASS_FOLDER;

    AL := Log.OpenLogons(False);

    While Not AL.Eof Do

        Debug.WriteLine(AL.UserName + " " + AL.UserOS + " " + (DateTime.FromDouble(AL.Stamp)).ToString);

        Debug.Indent;

        AO := Log.OpenOperations(AL.Session);

        While Not AO.Eof Do

            Debug.WriteLine("Операция: " + AO.Name + "; Объект:" + AO.ObjectId + "; Номер операции:" + AO.Operation.ToString);

            AO.Next;

        End While;

        AL.Next;

        Debug.Unindent;

    End While;

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будут выведены все действия с определенными
 классами объектов по заданным операциям, начиная с конкретной даты 11.01.2019.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
