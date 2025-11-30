# IPivot.ContainsHierarchy

IPivot.ContainsHierarchy
-


# IPivot.ContainsHierarchy


## Синтаксис


ContainsHierarchy(Hierarchy: [IDimHierarchy](KeDims.chm::/interface/IDimHierarchy/IDimHierarchy.htm)):
 Boolean;


## Параметры


Hierarchy. Данные альтернативной
 иерархии справочника.


## Описание


Свойство ContainsHierarchy возвращает
 признак наличия указанной альтернативной иерархии в коллекции.


## Комментарии


Допустимые значения:


	- True. Альтернативная
	 иерархия содержится в коллекции;


	- False. Альтернативная
	 иерархия не содержится в коллекции.


Для добавления альтернативной иерархии в коллекцию используйте метод
 [IPivot.AddHierarchy](IPivot.AddHierarchy.htm).


Для удаления альтернативной иерархии из коллекции используйте метод
 [IPivot.RemoveHierarchy](IPivot.RemoveHierarchy.htm).


## Пример


Использование свойства приведено в примере для [IPivot.AddHierarchy](IPivot.AddHierarchy.htm).


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
