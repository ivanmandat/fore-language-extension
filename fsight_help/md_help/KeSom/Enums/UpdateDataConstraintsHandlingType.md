# UpdateDataConstraintsHandlingType

UpdateDataConstraintsHandlingType
-


# UpdateDataConstraintsHandlingType


## Описание


Перечисление UpdateDataConstraintsHandlingType
 определяет способ обработки ограничений целостности данных.


Используется следующими свойствами и методами:


	- [IMetabaseUpdateDataObjectNode.ReferenceConstraintsHandling](../Interface/IMetabaseUpdateDataObjectNode/IMetabaseUpdateDataObjectNode.ReferenceConstraintsHandling.htm);


	- [IMetabaseUpdateUserEvents.OnAskConstraintsHandling](../Interface/IMetabaseUpdateUserEvents/IMetabaseUpdateUserEvents.OnAskConstraintsHandling.htm);


	- [IMetabaseUpdateProgress.OnAskConstraintsHandling](../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAskConstraintsHandling.htm);


	- [ICubeMetaUpdateAdditionalObjectDataSettings.ReferenceConstraintsHandling](KeCubes.chm::/Interface/ICubeMetaUpdateAdditionalObjectDataSettings/ICubeMetaUpdateAdditionalObjectDataSettings.ReferenceConstraintsHandling.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Способ не
		 установлен. Выбирается ядром.


		 1
		 Ask. Запрашивать в
		 диалоге. В случае если в обновляемом объекте присутствуют элементы/записи,
		 отсутствующие в обновлении, будет выдан диалог, в котором производится
		 выбора действия. При обновлении через язык Fore будет генерироваться
		 событие [OnAskConstraintsHandling](../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAskConstraintsHandling.htm),
		 в котором можно обработать конкретные ситуации.


		 2
		 NoCheck. Не проверять.
		 Объект будет обновлен без проверки целостности.


		 3
		 KeepRecordUnchanged.
		 Не удалять/не изменять элементы/записи. В случае если в обновляемом
		 объекте присутствуют элементы/записи, отсутствующие в обновлении,
		 то такие записи будут сохранены.


		 4
		 KeepTableUnchanged.
		 Не обновлять весь справочник/таблицу. Объект не будет обновлен,
		 если в нем присутствуют элементы/записи, отсутствующие в обновлении.


		 5
		 ErrorBreak. Генерировать
		 исключительную ситуацию. Процесс обновления объекта будет прерван
		 с ошибкой, если присутствуют элементы/записи, отсутствующие в
		 обновлении.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
