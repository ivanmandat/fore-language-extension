# Dictionary.ChildEls

Dictionary.ChildEls
-


# Dictionary.ChildEls


## Синтаксис


ChildEls: Array;


## Описание


Свойство ChildEls определяет массив дочерних элементов справочника НСИ.


## Комментарии


Значение свойства устанавливается с помощью метода setChildEls, а возвращается - с помощью метода getChildEls. Из JSON значение задать нельзя.


При вызове метода setChildEls используются следующие параметры: key - ключ родительского элемента, elsMd - массив дочерних элементов в формате метаданных, withHidden - признак использования скрытых элементов.


Метод getChildEls имеет параметр key и возвращает массив объектов типа [PP.Rds.DItem](../DItem/DItem.htm).


## Пример


Пример использования свойства приведён на странице описания метода [RdsService.beginBatch](../RdsService/RdsService.beginBatch.htm).


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
