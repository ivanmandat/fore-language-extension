# IMetabaseAuditPolicy.FilterClass

IMetabaseAuditPolicy.FilterClass
-


# IMetabaseAuditPolicy.FilterClass


## Синтаксис


FilterClass(ClassID: Integer): Integer;


## Параметры


ClassId.
 Числовой идентификатор класса
 объекта.


## Описание


Свойство FilterClass определяет
 маску операций, для которых будет вестись аудит доступа.


## Комментарии


Для указания класса объекта в параметре ClassId
 используйте значения перечислимого типа
 [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


Аудит доступа по указанным операциям будет вестись для всех объектов
 указанного класса. Аудит операций, включенных для классов, имеет больший
 приоритет, чем аудит операций, отключенных для конкретного объекта. Для
 настройки доступа аудита операций для конкретного объекта используется
 метод [AddAce](../IAccessControlList/IAccessControlList.AddAce.htm)
 и свойство [AccessMask](../IAccessControlEntry/IAccessControlEntry.AccessMask.htm).


Для формирования и проверки значения маски необходимо использовать значения
 перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права и вести аудит доступа. Для определенных
 классов объектов доступны специфические
 операции. В зависимости от класса объекта, в маске можно использовать
 значения следующих перечислений:


	- [AuditLogSpecificRights](../../Enums/AuditLogSpecificRights.htm)
	 - специфические операции, доступные для протокола доступа.


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
	 - специфические операции, доступные для объектов репозитория: Справочник
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


	- [ScheduledTaskSpecificRights](../../Enums/ScheduledTaskSpecificRights.htm)
	 - специфические операции, доступные для задач, создаваемых в контейнере
	 запланированных задач.


	- [SecuritySpecificRights](../../Enums/SecuritySpecificRights.htm)
	 - специфические операции, доступные для политики безопасности.


	- [TableSpecificRights](../../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория:
	 Таблица, Представление, Журнал, Присоединенная таблица.


	- [UpdateObjectSpecificRights](../../Enums/UpdateObjectSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Обновление.


	- [ValidationSpecificRights](../../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория: Правило
	 валидации и Группа валидаций.


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе «[Протоколируемые
 операции](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm)».


Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе «[Работа с маской доступа](../../Examples/Example_2_AccessMask.htm)».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AuditPolicy: IMetabaseAuditPolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Изменим аудит типа объектов «Ярлык»

    AuditPolicy := MS.Policy.AuditPolicy;

    AuditPolicy.FilterClass(MetabaseObjectClass.KE_CLASS_SHORTCUT_AUDIT) := MetabaseObjectPredefinedRights.Write;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включен аудит типа объектов «Ярлык» только
 на изменение.


См. также:


[IMetabaseAuditPolicy](IMetabaseAuditPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
