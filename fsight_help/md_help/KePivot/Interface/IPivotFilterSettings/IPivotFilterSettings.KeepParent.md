# IPivotFilterSettings.KeepParent

IPivotFilterSettings.KeepParent
-


# IPivotFilterSettings.KeepParent


## Синтаксис


KeepParent: Boolean;


## Описание


Свойство KeepParent определяет,
 останутся ли [владельцы
 неисключенных элементов](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) в отфильтрованной таблице.


## Комментарии


Допустимые значения:


	- True. Владельцы неисключенных
	 элементов останутся в отфильтрованной таблице;


	- False. По умолчанию.
	 Владельцы неисключенных элементов не останутся в отфильтрованной таблице.


Установка данной опции позволяет оставлять в отфильтрованной таблице
 родительские элементы, не отвечающие условию фильтрации, даже если их
 собственные значения удовлетворяют условию фильтрации.


Для использования свойства необходимо, чтобы свойство [IPivotFilterSettings.Enabled](IPivotFilterSettings.Enabled.htm)
 принимало значение True.


## Пример


Использование свойства приведено в примере для [IPivotFilterSettings.SupressEmpty](IPivotFilterSettings.SupressEmpty.htm).


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
