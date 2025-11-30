# ICustomDimAttributes.FindById

ICustomDimAttributes.FindById
-


# ICustomDimAttributes.FindById


## Синтаксис


FindById(AttributeId: String): [ICustomDimAttribute](../ICustomDimAttribute/ICustomDimAttribute.htm);


## Параметры


AttributeId. Идентификатор
 искомого атрибута.


## Описание


Метод FindById осуществляет
 поиск атрибута по идентификатору.


## Комментарии


Поиск регистрозависимый. Если атрибут с указанным идентификатором не
 найден, то метод возвращает значение Null.


Для поиска атрибута по его ключу используйте метод [ICustomDimAttributes.FindByKey](ICustomDimAttributes.FindByKey.htm).


## Пример


Использование свойства приведено в примере для [ICustomDimAttributes.Clear](ICustomDimAttributes.Clear.htm).


См. также:


[ICustomDimAttributes](ICustomDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
