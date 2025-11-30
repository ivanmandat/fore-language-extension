# IPivot.Selection

IPivot.Selection
-


# IPivot.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 отметку, в соответствии с которой отстраивается таблица.


## Комментарии


Данное свойство возвращает отметки всех измерений всех источников данных
 экспресс-отчёта. Полученную отметку можно изменить. Все изменения передаются
 в источники данных, в результате чего они будут перестроены. Также при
 этом будет перестроена и таблица с данными. Если необходимо произвести
 многочисленные изменения в отметках, то рекомендуется все изменения производить
 между вызовами методов [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
 и [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm).
 Это позволит избежать постоянного перестроения источников данных, что
 влечет за собой постоянное извлечение данных.


Если в источнике есть измерения, управляемые другими измерениями, то
 работа с ними осуществляется в два этапа:


	- Между вызовами методов [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
	 и [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
	 устанавливаем отметку по тем измерениям, которые управляют какими-либо
	 другими измерениями. При вызове метода [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
	 те измерения, которыми управляют, будут перестроены.


	- Получаем обновленную отметку через свойство IPivot.Selection.


	- Между вызовами методов [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
	 и [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
	 устанавливаем отметку в перестроенных управляемых измерениях.


Важно. После
 вызова метода [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
 и внесения каких-либо изменений в отметку все изменения будут применены
 при вызове метода [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm).
 Для работы с актуальной отметкой после вызова [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
 её необходимо повторно получить, используя свойства Selection.


Примечание.
 В «Форсайт. Аналитическая платформа»
 может быть задано [ограничение отметки](uiexpress.chm::/FAQ/SelectionLimit.htm).


## Пример


Использование свойства приведено в примере для [IPivot.BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm).


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
