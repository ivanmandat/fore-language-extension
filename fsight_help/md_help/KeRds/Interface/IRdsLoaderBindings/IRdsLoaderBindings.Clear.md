# IRdsLoaderBindings.Clear

IRdsLoaderBindings.Clear
-


# IRdsLoaderBindings.Clear


## Синтаксис


Clear;


## Описание


Метод Clear удаляет все привязки
 из коллекции.


## Комментарии


При выполнении метода Clear
 из коллекции будут удалены все привязки, созданные с помощью методов [Add](IRdsLoaderBindings.Add.htm), [AddByAttribute](IRdsLoaderBindings.AddByAttribute.htm)
 либо созданные автоматически при выполнении метода [IMetaRdsLoader.GenerateBindingsBySource](../IMetaRdsLoader/IMetaRdsLoader.GenerateBindingsBySource.htm).
 В коллекции останутся только три привязки для системных атрибутов [Ключ](IRdsLoaderBindings.KeyBinding.htm),
 [Наименование](IRdsLoaderBindings.NameBinding.htm) и [Порядок](IRdsLoaderBindings.OrderBinding.htm).


См. также:


[IRdsLoaderBindings](IRdsLoaderBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
