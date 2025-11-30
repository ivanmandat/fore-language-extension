# ICubeLoaderFromSource.AddAllFields

ICubeLoaderFromSource.AddAllFields
-


# ICubeLoaderFromSource.AddAllFields


## Синтаксис


AddAllFields: Boolean;


## Описание


Свойство AddAllFields определяет,
 будут ли в таблицу с данными куба загружены данные по полям, которые не
 сопоставлены с измерениями/фактами куба.


## Комментарии


Допустимые значения:


	- True. В таблицу куба
	 будут загружены данные из всех полей источника.


	- False. В таблицу куба
	 будут загружены данные только по тем полям, которые сопоставлены с
	 [измеренями](ICubeLoaderFromSource.DimensionBindings.htm)/[фактами](ICubeLoaderFromSource.FactBindings.htm) куба. Также
	 будут загружены данные по полям, которые включены в коллекцию [дополнительных
	 полей](ICubeLoaderFromSource.AdditionalFields.htm).


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
