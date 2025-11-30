# SelectionCopyToExOptions

SelectionCopyToExOptions
-


# SelectionCopyToExOptions


## Описание


Перечисление SelectionCopyToExOptions
 используется для определения опций, которые будут скопированы из измерения-источника
 в измерение-приёмник.


Используется следующими методами:


	- [IDimSelection.CopyToEx](../interface/IDimSelection/IDimSelection.CopyToEx.htm);


	- [IDimSelectionSet.CopyToEx](../interface/IDimSelectionSet/IDimSelectionSet.CopyToEx.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Копируется только
		 отметка в измерении.


		 1
		 WithGroup. Копируется
		 отметка и группы элементов измерения-источника.


		 2
		 WithSchema. Копируется
		 отметка и схема отметки измерения-источника.


		 4
		 WithoutAdditionalHierarchy.
		 Копируются заданные параметры измерения без дополнительных альтернативных
		 иерархий, связанных с отметкой. Если значение не используется,
		 параметры измерения копируются с дополнительной альтернативной
		 иерархией.


		 8
		 WithPredefinedSchema.
		 Копируется отметка и [предопределенная
		 схема](../interface/IPredefinedSelectionSchema/IPredefinedSelectionSchema.htm) отметки измерения-источника.


		 16
		 ForceHierarchy. Обновляет
		 иерархию измерения.


		 27
		 DefaultWithForceHierarchy.
		 Комбинация значений: WithGroup, WithSchema, WithPredefinedSchema
		 и ForceHierarchy.


		 32
		 AltOnly. Копируется
		 только отметка в альтернативной иерархии. Значение имеет наивысший
		 приоритет - при его использовании все остальные заданные значения,
		 кроме DestMultiSel,
		 игнорируются. Если значение не используется, копируются
		 альтернативные иерархии.


		 64
		 NoAlternate. При синхронизации
		 копируются заданные параметры измерения без альтернативных иерархий.


		 128
		 DestMultiSel. Сохраняет
		 свойство [IDimSelection.MultiSelect](../interface/IDimSelection/IDimSelection.MultiSelect.htm)
		 при копировании. Если значение используется, в свойстве приёмника
		 [IDimSelection.MultiSelect](../interface/IDimSelection/IDimSelection.MultiSelect.htm) перед
		 копированием будет принудительно установлено значение True.
		 После копирования будет восстановлено предыдущее значение свойства.


		 256
		 Invalidate. Используется
		 для принудительной генерации события изменения при копировании
		 отметки, даже если ничего не изменилось. Данное значение необходимо
		 использовать при синхронизации отметок через копирование.


		 512
		 CompareByKeys. Измерения
		 проверяются на равенство по ключам, а не только по адресам.


## Комментарии


При использовании значения Invalidate
 возможно уменьшение быстродействия аналитических панелей и регламентных
 отчетов.


См. также:


[Перечисления
 сборки Dimensions](KeDims_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
