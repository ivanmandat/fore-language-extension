# IMetaRdsImportSchema.Mode

IMetaRdsImportSchema.Mode
-


# IMetaRdsImportSchema.Mode


## Синтаксис


Mode: [UpdateLoadMode](KeSom.chm::/Enums/UpdateLoadMode.htm);


## Описание


Свойство Mode определяет
 режим импорта данных.


## Комментарии


Допустимые значения:


	- UpdateLoadMode.Replace.
	 Замещать все элементы;


	- UpdateLoadMode.Insert.
	 Добавлять новые (отсутствующие) элементы;


	- UpdateLoadMode.Update.
	 Обновлять существующие элементы;


	- UpdateLoadMode.InsertUpdate.
	 Добавлять новые элементы и обновлять существующие.


## Пример


Использование свойства приведено в разделе «[Экспорт
 и импорт справочника НСИ](../../Samples/KeRds_Sample10.htm)».


См. также:


[IMetaRdsImportSchema](IMetaRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
