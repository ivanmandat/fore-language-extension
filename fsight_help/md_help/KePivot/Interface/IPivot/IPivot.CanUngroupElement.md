# IPivot.CanUngroupElement

IPivot.CanUngroupElement
-


# IPivot.CanUngroupElement


## Синтаксис


CanUngroupElement(Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
Boolean;


## Параметры


Dimension. Дополнительное измерение,
 полученное после [группировки](IPivot.GroupElement.htm).


## Описание


Метод CanUngroupElement определяет
 возможность отмены группировки данных после группировки столбцов при [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation)
 в реляционные данные.


## Комментарии


Допустимые значения:


	- True. Отмена группировки
	 элементов возможна;


	- False. Отмена группировки
	 элементов невозможна.


Для отмены группировки данных после группировки столбцов используйте
 [IPivot.UngroupElement](IPivot.UngroupElement.htm).


## Пример


Использование метода приведено в примере для [IPivot.GroupElement](IPivot.GroupElement.htm).


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
