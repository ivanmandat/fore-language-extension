# ISaveMetabaseObjectHandler.Class_

ISaveMetabaseObjectHandler.Class_
-


# ISaveMetabaseObjectHandler.Class_


## Синтаксис


Class_: String;


## Описание


Свойство Class_ определяет наименование
 класса, в котором реализованы обработчики событий.


## Комментарии


Указываемый класс должен содержать реализацию методов, имеющих следующую
 сигнатуру:


	Class <Наименование
	 класса>: Object

	    Sub OnBeforeSave(<Параметр
	 1>: IMetabaseObject; Параметр 2: IMetabaseObject);

	    Begin

	        //...

	    End Sub OnBeforeSave;


	    Sub OnAfterSave(<Параметр
	 1>: IMetabaseObject; <Параметр 2>: IException);

	    Begin

	        //...

	    End Sub OnAfterSave;

	End Class <Наименование
	 класса>;


Событие OnBeforeSave наступает
 перед сохранением метаданных объекта. Первый параметр позволяет получить
 исходный объект до изменения, второй - объект с внесёнными изменениями,
 но перед сохранением.


Событие OnAfterSave наступает
 после сохранения изменений, первый параметр позволяет получить изменённый
 объект, второй параметр возвращает возможную ошибку сохранения.


Важно. Вносить
 дополнительные изменения в сохраняемый объект в событии OnBeforeSave
 запрещено.


Важно. В событиях
 запрещено редактировать и сохранять другие объекты репозитория. Это может
 привести к рекурсивному срабатыванию событий и зависанию платформы.


## Пример


Использование свойства приведено в примере для [ISaveMetabaseObjectHandlers.Add](../ISaveMetabaseObjectHandlers/ISaveMetabaseObjectHandlers.Add.htm).


См. также:


[ISaveMetabaseObjectHandler](ISaveMetabaseObjectHandler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
