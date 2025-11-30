# UpdateLoadMode

UpdateLoadMode
-


# UpdateLoadMode


## Описание


Перечисление UpdateLoadMode
 содержит режимы обновления различных объектов.


определяет метод загрузки объектов в обновление.


Используется следующими методами:


	- [IMetabaseUpdate.LoadFromFile](../Interface/IMetabaseUpdate/IMetabaseUpdate.LoadFromFile.htm);


	- [IMetabaseUpdate.LoadFromFileNF](../Interface/IMetabaseUpdate/IMetabaseUpdate.LoadFromFileNF.htm);


	- [IMetabaseUpdateObject.ReadUpdate](../Interface/IMetabaseUpdateObject/IMetabaseUpdateObject.ReadUpdate.htm);


	- [IMetabaseUpdateObject.WriteUpdate](../Interface/IMetabaseUpdateObject/IMetabaseUpdateObject.WriteUpdate.htm);


	- [IMetaRdsImportSchema.Mode](KeRds.chm::/Interface/IMetaRdsImportSchema/IMetaRdsImportSchema.Mode.htm);


	- [IMetaRdsLoader.Load](KeRds.chm::/Interface/IMetaRdsLoader/IMetaRdsLoader.Load.htm);


	- [IDtRdsConsumer.UpdateMode](KeDt.chm::/Interface/IDtRdsConsumer/IDtRdsConsumer.UpdateMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Replace. Замещать объекты
		 в обновлении.


		 1
		 Insert. Добавлять только
		 новые объекты.


		 2
		 Update. Обновлять только
		 существующие объекты.


		 3
		 InsertUpdate. Добавлять
		 новые объекты и обновлять существующие.


		 4
		 NoUpdate. Не обновлять
		 существующие объекты.


		 128
		 Refresh. Данное значение
		 не предназначено для использования в прикладном коде.


		 256
		 Start. Данное значение
		 не предназначено для использования в прикладном коде.


		 512
		 Apply. Данное значение
		 не предназначено для использования в прикладном коде.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
