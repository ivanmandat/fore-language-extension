# ISQLCondition

ISQLCondition
-


# ISQLCondition


Сборка: Db;


## Описание


Интерфейс ISQLCondition содержит
 свойства отдельного условия, входящего в [ISQLComponents.Where](../ISQLComponents/ISQLComponents.Where.htm).


## Иерархия наследования


ISQLCondition


## Комментарии


Количество условий, входящих в [ISQLComponents.Where](../ISQLComponents/ISQLComponents.Where.htm),
 возвращает свойство [ISQLComponents.ConditionCount](../ISQLComponents/ISQLComponents.ConditionCount.htm).
 Отдельное условие можно получить в свойстве [ISQLComponents.Condition](../ISQLComponents/ISQLComponents.Condition.htm).
 Каждое отдельное условие соответствует отбору элементов одного измерения.
 Значения свойств с префиксом Temp*
 будут доступны, если для измерения в стратегии фильтрации задан [метод](KeCubes.chm::/Interface/ICubeDimensionQueryStrategy/ICubeDimensionQueryStrategy.FilterMethod.htm)
 с использованием временных таблиц.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](ISQLCondition.Condition.htm)
		 Свойство Condition
		 возвращает полный текст отдельного условия, входящего в [ISQLComponents.Where](../ISQLComponents/ISQLComponents.Where.htm).


		 ![](../../Property_Image.gif)
		 [Fields](ISQLCondition.Fields.htm)
		 Свойство Fields возвращает
		 поля исходной таблицы, значения которых помещаются во временную
		 таблицу.


		 ![](../../Property_Image.gif)
		 [TempTable](ISQLCondition.TempTable.htm)
		 Свойство TempTable
		 возвращает наименование временной таблицы, в которую будут загружены
		 значения атрибутов.


		 ![](../../Property_Image.gif)
		 [TempTableAlias](ISQLCondition.TempTableAlias.htm)
		 Свойство TempTableAlias
		 возвращает псевдоним, используемый для сокращения [наименования](ISQLCondition.TempTable.htm)
		 временной таблицы.


		 ![](../../Property_Image.gif)
		 [TempTableAttrLinkedFields](ISQLCondition.TempTableAttrLinkedFields.htm)
		 Свойство TempTableAttrLinkedFields
		 возвращает список полей временной таблицы, которые связываются
		 с атрибутами измерения.


		 ![](../../Property_Image.gif)
		 [TempTableFields](ISQLCondition.TempTableFields.htm)
		 Свойство TempTableFields
		 возвращает список полей временной таблицы.


		 ![](../../Property_Image.gif)
		 [TempTableHasNulls](ISQLCondition.TempTableHasNulls.htm)
		 Свойство TempTableHasNulls
		 возвращает признак того, что во временной таблице есть записи,
		 содержащие пустые значения (Null).


		 ![](../../Property_Image.gif)
		 [TempTableRecCount](ISQLCondition.TempTableRecCount.htm)
		 Свойство TempTableRecCount
		 возвращает количество записей во временной таблице.


См. также:


[Интерфейсы
 сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
