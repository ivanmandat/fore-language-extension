# IMetabaseObjectInstance.Object

IMetabaseObjectInstance.Object
-


# IMetabaseObjectInstance.Object


## Синтаксис


		Object: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство Object возвращает объект
 репозитория, с открытым экземпляром которого осуществляется работа.


Примечание.
 Если открываемый объект, является ярлыком для объекта из другого репозитория,
 то после открытия данное свойство вернет структуру объекта, для которого
 он создан. В этом случае доступ к структуре самого ярлыка осуществляется
 посредством свойства [IMetabaseObjectInstance.ThisObject](IMetabaseObjectInstance.ThisObject.htm).


См. также:


[IMetabaseObjectInstance](IMetabaseObjectInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
