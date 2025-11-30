# IMetaDataRule

IMetaDataRule
-


# IMetaDataRule


## Описание


Интерфейс IMetaDataRule содержит
 свойства, определяющие параметры правил справочника базы данных временных
 рядов.


## Комментарии


Правила справочника проверяется при импорте данных в базу данных временных
 рядов. Задание правил для справочников позволяет отследить, по каким показателям
 были импортированы некорректные данные. Нарушение условий правил не ведет
 к остановке всего импорта. При нарушении условий правила формируется массив,
 содержищий ключи соответствующих показателей. Массив ключей после импорта
 можно получить в свойстве [IImportRequestResultEx.InvalidFactors](KeCubes.chm::/Interface/IImportRequestResultEx/IImportRequestResultEx.InvalidFactors.htm)
 либо [ICubeMetaLoader.InvalidFactors](KeCubes.chm::/Interface/ICubeMetaLoader/ICubeMetaLoader.InvalidFactors.htm).


Для правила в свойстве [Condition](IMetaDataRule.Condition.htm)
 необходимо указать условия отбора показателей, для которых будут проверяться
 условия правила. В свойстве [Rule](IMetaDataRule.Rule.htm)
 необходимо указать сами условия правила, которые необходимо проверить.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](IMetaDataRule.Condition.htm)


		 Свойство Condition
		 возвращает коллекцию условий, в соответствии с которыми будут
		 отбираться данные, для которых необходимо проверить условия правила.


		 ![](../../Property_Image.gif)
		 [Dictionary](IMetaDataRule.Dictionary.htm)


		 Свойство Dictionary
		 возвращает родительский объект.


		 ![](../../Property_Image.gif)
		 [Rule](IMetaDataRule.Rule.htm)


		 Свойство Rule возвращает
		 коллекцию условий правила, которые необходимо проверить для данных.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
