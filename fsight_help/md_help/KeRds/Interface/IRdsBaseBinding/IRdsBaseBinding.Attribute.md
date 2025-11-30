# IRdsBaseBinding.Attribute

IRdsBaseBinding.Attribute
-


# IRdsBaseBinding.Attribute


## Синтаксис


Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Attribute определяет
 атрибут, для которого настраивается привязка.


## Комментарии


Если привязка была создана с помощью метода [AddByAttribute](../IRdsLoaderBindings/IRdsLoaderBindings.AddByAttribute.htm),
 то свойство Attribute вернет атрибут,
 который был указан в качестве параметра метода.


Если привязка была создана с помощью метода [Add](../IRdsLoaderBindings/IRdsLoaderBindings.Add.htm)
 либо [GenerateBindingsBySource](../IMetaRdsLoader/IMetaRdsLoader.GenerateBindingsBySource.htm)
 и используется при обновлении существующего справочника, то в качестве
 значения свойства Attribute необходимо
 указать один из атрибутов справочника, заданного в свойстве [Dictionary](../IMetaRdsLoader/IMetaRdsLoader.Dictionary.htm).


Если привязка используется при создании нового справочника НСИ, то свойство
 Attribute не указывается.


## Пример


Пример использования приведен в описании метода [IRdsLoaderBindings.AddByAttribute](../IRdsLoaderBindings/IRdsLoaderBindings.AddByAttribute.htm).


См. также:


[IRdsBaseBinding](IRdsBaseBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
