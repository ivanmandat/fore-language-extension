# DbDataDomain

DbDataDomain
-


# DbDataDomain


## Описание


Перечисление DbDataDomain содержит
 типы данных для хранения многобайтовой информации.


Используется следующими свойствами и методами:


	- [ICubeMetaExporterBinding.DataDomain](kecubes.chm::/Interface/ICubeMetaExporterBinding/ICubeMetaExporterBinding.DataDomain.htm);


	- [IDalCursorField.DataDomain](../Interface/IDalCursorField/IDalCursorField.DataDomain.htm);


	- [IDatasetModelField.DataDomain](KeDb.chm::/Interface/IDatasetModelField/IDatasetModelField.DataDomain.htm);


	- [IDimAttribute.DataDomain](kedims.chm::/interface/IDimAttribute/IDimAttribute.DataDomain.htm);


	- [IDimAttribute.DisplayDataDomain](kedims.chm::/interface/IDimAttribute/IDimAttribute.DisplayDataDomain.htm);


	- [IDimAttributeInstance.DataDomain](kedims.chm::/interface/IDimAttributeInstance/IDimAttributeInstance.DataDomain.htm);


	- [IDimAttributeInstance.DisplayDataDomain](kedims.chm::/interface/IDimAttributeInstance/IDimAttributeInstance.DisplayDataDomain.htm);


	- [IMetaAttribute.DataDomain](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.DataDomain.htm);


	- [IRdsAttribute.DataDomain](KeRds.chm::/Interface/IRdsAttribute/IRdsAttribute.DataDomain.htm);


	- [IRdsBaseBinding.DataDomain](KeRds.chm::/Interface/IRdsBaseBinding/IRdsBaseBinding.DataDomain.htm);


	- [ITableField.DataDomain](KeDb.chm::/Interface/ITableField/ITableField.DataDomain.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Двоичный тип
		 данных. Предназначен для хранения неструктурированных двоичных
		 данных.


		 1
		 Memo. Текстовый тип
		 данных. Предназначен для хранения многобайтовых данных, определенных
		 в наборе символов БД или в национальном наборе символов, если
		 БД использует юникод для представления данных.


		 2
		 Raw. Пользовательский
		 тип данных. Предназначен для хранения данных фиксированной длины.


		 3
		 RefCur. Курсор, содержащий
		 набор записей. Данный тип нельзя установить в качестве типа поля,
		 он используется для проверки типа полей, полученных в результате
		 выполнения SQL-запроса, который возвращает набор данных произвольной
		 структуры.


		 4
		 MSec. Дата и время
		 с точностью до миллисекунд.


		 5
		 Tiny. Предназначен
		 для поддержки типов данных BIT (логические данные) и tinyint (целые
		 данные) для СУБД Microsoft SQL Sevrer.


Примечание.
 СУБД Oracle поддерживает типы данных «Текстовый» и «Двоичный» только для
 версий Oracle 9.x и выше.


## Комментарии


Если поле имеет тип DbDataDomain.RefCur,
 то значением данного поля в каждой записи будет являться курсор.
 Для его получения необходимо [значение
 поля](../Interface/IDalCursorField/IDalCursorField.Value.htm) привести к типу [IDalCursor](../Interface/IDalCursor/IDalCursor.htm).


См. также:


[Перечисления сборки Dal](Dal_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
