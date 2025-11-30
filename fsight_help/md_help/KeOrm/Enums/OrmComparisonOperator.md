# OrmComparisonOperator

OrmComparisonOperator
-


# OrmComparisonOperator


## Описание


Перечисление OrmComparisonOperator
 содержит варианты оператора сравнения.


Используется следующими свойствами:


	- [ICubeMetaExporterFilter.Operator_](kecubes.chm::/Interface/ICubeMetaExporterFilter/ICubeMetaExporterFilter.Operator_.htm);


	- [IOrmCondition.Operator_](../Interface/IOrmCondition/IOrmCondition.Operator_.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет.


		 1
		 Equal. Равенство.


		 2
		 NotEqual. Неравный.


		 3
		 NotLike. Неравный
		 (сравнение по маске).


		 4
		 Like. Равенство (сравнение
		 по маске).


		 5
		 Greater. Больше.


		 6
		 GreaterOrEqual. Больше
		 или равно.


		 7
		 Less. Меньше.


		 8
		 LessOrEqual. Меньше
		 или равно.


		 9
		 In_. Наличие значения
		 атрибута в указанном массиве значений. Сравнение выполняется,
		 если атрибут содержит одиночное значение.


		 10
		 NotIn. Отсутствие значения
		 атрибута в указанном массиве значений. Сравнение выполняется,
		 если атрибут содержит одиночное значение.


		 11
		 Exists. Существует.


		 12
		 NotExists. Не существует.


		 13
		 InSelect. Отмеченный.


		 14
		 NotInSelect. Не отмеченный.


		 15
		 Conditions. Условия.
		 При использовании данного варианта оператора для создания вложенных
		 условий следует использовать [IOrmCondition.Nested](../Interface/IOrmCondition/IOrmCondition.Nested.htm).


		 16
		 NotConditions. Нет
		 условия. При использовании данного варианта оператора для создания
		 вложенных условий следует использовать [IOrmCondition.Nested](../Interface/IOrmCondition/IOrmCondition.Nested.htm).


		 17
		 IsNull. Пустой.


		 18
		 IsNotNull. Непустой.


		 20
		 InQuery. Подзапрос.
		 Позволяет указывать произвольный подзапрос в виде строки SQL,
		 которая будет добавляться в основное условие запроса.


		 256
		 Join. Объединение.


		 257
		 JoinEqual. Равное объединение.


		 261
		 JoinGreater. Большее
		 объединение.


		 512
		 FreeText. Свободный
		 поиск в тексте. Если в orm-условии задан оператор FreeText, то
		 значение атрибута проверяется через IComparerClass.FreeTextComparer.Compare
		 ([IComparerClass.FreeTextComparer](ModCollections.chm::/Interface/IComparerClass/IComparerClass.FreeTextComparer.htm)).


		 1024
		 MatchCase. С учётом
		 регистра.


		 2048
		 WholeWord. Поиск всего
		 слова целиком.


		 4096
		 ForEachWord. Поиск
		 по каждому слову.


См. также:


[Перечисления сборки Orm](KeOrm_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
