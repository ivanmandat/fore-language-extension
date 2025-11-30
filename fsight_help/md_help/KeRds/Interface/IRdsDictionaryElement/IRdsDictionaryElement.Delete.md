# IRdsDictionaryElement.Delete

IRdsDictionaryElement.Delete
-


# IRdsDictionaryElement.Delete


## Синтаксис


Delete;


## Описание


Метод Delete осуществляет удаление текущего элемента.


## Комментарии


Если для справочника включено отслеживание ссылок на элементы и от данного элемента, либо от его дочерних элементов, зависят какие-либо объекты, то при вызове метода генерируется исключительная ситуация. В данном случае рекомендуется использовать метод [DeleteRaw](IRdsDictionaryElement.DeleteRaw.htm).


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
