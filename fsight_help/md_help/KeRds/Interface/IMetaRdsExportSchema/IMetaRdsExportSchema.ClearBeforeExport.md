# IMetaRdsExportSchema.ClearBeforeExport

IMetaRdsExportSchema.ClearBeforeExport
-


# IMetaRdsExportSchema.ClearBeforeExport


## Синтаксис


ClearBeforeExport: Boolean;


## Описание


Свойство ClearBeforeExport определяет,
 очищать ли приёмник перед выгрузкой данных.


## Комментарии


Допустимые значения:


	- True. Очищать приёмник
	 перед выгрузкой данных;


	- False. Не очищать приёмник
	 перед выгрузкой данных.


При экспорте множественных атрибутов значение свойства IMetaRdsExportSchema.ClearBeforeExport
 не учитывается. Экспорт производится по состоянию свойства [IRdsExportSchemaAttribute.UpdateDetailTableMode](../IRdsExportSchemaAttribute/IRdsExportSchemaAttribute.UpdateDetailTableMode.htm).


## Пример


Использование свойства приведено в разделе «[Экспорт
 и импорт справочника НСИ](../../Samples/KeRds_Sample10.htm)».


См. также:


[IMetaRdsExportSchema](IMetaRdsExportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
