# IPivot.EndSelectionUpdate

IPivot.EndSelectionUpdate
-


# IPivot.EndSelectionUpdate


## Синтаксис


EndSelectionUpdate;


## Описание


Метод EndSelectionUpdate возобновляет
 применение отметки в источнике данных при изменении отметки в таблице.


## Комментарии


Данный метод возобновляет применение отметки в источнике данных после
 того как применение было отменено методом [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm).
 При вызове данного метода также будет применена отметка, установленная
 в таблице в промежутке между вызовами методов [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
 и IPivot.EndSelectionUpdate.


## Пример


Использование метода приведено в примере для [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm).


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
