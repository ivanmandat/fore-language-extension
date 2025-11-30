# IEaxDataAreaHierarchy.FilterTransformations

IEaxDataAreaHierarchy.FilterTransformations
-


# IEaxDataAreaHierarchy.FilterTransformations


## Синтаксис


FilterTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство FilterTransformations
 возвращает коллекцию формул преобразования, в соответствии с которыми
 будет фильтроваться список элементов в альтернативной иерархии.


## Комментарии


Формула, которая будет указана в [выражении](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.Expression.htm)
 формулы преобразования, должна возвращать логическое значение. Элементы,
 для которых будет вычислено значение True
 будут скрыты, для которых False
 - останутся в альтернативной иерархии.


Для выполнения фильтрации элементов альтернативной иерархии используйте
 [IEaxDataAreaHierarchy.Filter](IEaxDataAreaHierarchy.Filter.htm).


См. также:


[IEaxDataAreaHierarchy](IEaxDataAreaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
