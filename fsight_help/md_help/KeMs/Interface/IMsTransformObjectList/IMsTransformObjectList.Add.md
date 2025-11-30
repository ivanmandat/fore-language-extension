# IMsTransformObjectList.Add

IMsTransformObjectList.Add
-


# IMsTransformObjectList.Add


## Синтаксис


Add(Value: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)): [IMsTransformObject](../IMsTransformObject/IMsTransformObject.htm);


## Параметры


Value. Добавляемый объект.


## Описание


Метод Add добавляет указанный объект в коллекцию.


## Комментарии


После выполнения метод возвращает добавленный объект. Объект добавляется в конец коллекции, при этом значение свойства [IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm) увеличивается на единицу.


Параметр Value может принимать значение Null, но для корректного использования добавленного объекта необходимо указать его дескриптор в свойстве [IMsTransformObject.Descriptor](../IMsTransformObject/IMsTransformObject.Descriptor.htm).


## Пример


Использование свойства приведено в примере для [IMsFormulaTransformVariable.AttributeId](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.AttributeId.htm).


См. также:


[IMsTransformObjectList](IMsTransformObjectList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
