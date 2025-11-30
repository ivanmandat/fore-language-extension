# MetabaseUpdateObjectApplyState

MetabaseUpdateObjectApplyState
-


# MetabaseUpdateObjectApplyState


## Описание


Перечисление MetabaseUpdateObjectApplyState
 содержит значения, соответствующие состоянию готовности объекта к обновлению.


Используется следующим свойством:


	- [IMetabaseUpdateObjectApplyState.State](../Interface/IMetabaseUpdateObjectApplyState/IMetabaseUpdateObjectApplyState.State.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Состояние не
		 определено.


		 1
		 CreateNew. Создание
		 нового объекта.


		 2
		 EditExisting. Обновление
		 существующего объекта.


		 4
		 Conflict. Конфликт
		 при подготовке к обновлению. Данное состояние возникает в комбинации
		 со следующими значениями:


			- MetabaseUpdateObjectApplyState.ConflictKey

			- MetabaseUpdateObjectApplyState.ConflictId

			- MetabaseUpdateObjectApplyState.ConflictClassId

			- MetabaseUpdateObjectApplyState.ConflictObjectNotFound

			- MetabaseUpdateObjectApplyState.ConflictMissingMetadata


		 8
		 ConflictKey. Существует
		 объект с таким же ключом.


		 16
		 ConflictId. Существует
		 объект с таким же идентификатором.


		 32
		 ConflictClassId. Найденный
		 объект имеет другой класс.


		 64
		 ConflictObjectNotFound.
		 Не найден объект, для которого установлен тип обновления [MetabaseObjectUpdateType.UpdateOnly](MetabaseObjectUpdateType.htm).


		 128
		 ConflictMissingMetadata.
		 В обновлении отсутствуют метаданные для создания объекта.


		 256
		 ConflictVcsObject.
		 Найденный объект находится под управлением VCS.


		 512
		 MandatoryConflict.
		 Несоответствие между уровнями или категориями мандатного
		 доступа в обновлении и обновляемом репозитории.


		 8192
		 ConflictDependenciesMissing.
		 У объекта отсутствуют зависимости.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
