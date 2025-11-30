# IAuditOperations.Mask

IAuditOperations.Mask
-


# IAuditOperations.Mask


## Синтаксис


Mask: Integer;


## Описание


Свойство Mask возвращает маску
 операции.


## Комментарии


Маска операции соответствует тому действию, для которого была добавлена
 запись в протоколе доступа. Для проверки значения маски необходимо использовать
 значения перечислимого типа [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 В этом перечислении содержатся основные
 и дополнительные операции, на
 которые можно раздавать права. Для определенных классов объектов доступны
 специфические операции. Для проверки
 специфических операций, в зависимости от класса объекта, можно использовать
 значения следующих перечислений:


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


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе [Типы
 событий](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm).


Для разбора значения маски необходимо реализовать пользовательскую функцию,
 которая позволит сопоставить отдельные биты маски соответствующим значениям
 перечислений. Пример работы с маской доступа представлен в разделе «[Работа с маской доступа](../../Examples/Example_2_AccessMask.htm)».


## Пример


Использование свойства приведено в примере для [IAuditOperations.Position](IAuditOperations.Position.htm).


См. также:


[IAuditOperations](IAuditOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
