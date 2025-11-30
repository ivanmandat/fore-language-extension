# IMetabaseObjectInstance.ThisObject

IMetabaseObjectInstance.ThisObject
-


# IMetabaseObjectInstance.ThisObject


## Синтаксис


		ThisObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство ThisObject возвращает
 структуру объекта, если открываемый объект является ярлыком для объекта
 из другого репозитория.


## Комментарии


Данное свойство актуально для ярлыков, ссылающихся на объекты из другого
 репозитория. После открытия таких ярлыков свойство вернет параметры самого
 ярлыка. Для всех других объектов, свойство вернет значение, аналогичное
 свойству [IMetabaseObjectInstance.Object](IMetabaseObjectInstance.Object.htm).


См. также:


[IMetabaseObjectInstance](IMetabaseObjectInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
