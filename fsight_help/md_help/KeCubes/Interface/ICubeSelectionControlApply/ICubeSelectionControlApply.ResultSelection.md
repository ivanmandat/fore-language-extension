# ICubeSelectionControlApply.ResultSelection

ICubeSelectionControlApply.ResultSelection
-


# ICubeSelectionControlApply.ResultSelection


## Синтаксис


ResultSelection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство ResultSelection возвращает
 результирующую отметку, полученную после применения параметров управления.


## Комментарии


В результирующей отметке будут отмечены элементы только в управляющих
 измерениях, которые были переданы в свойстве [ICubeSelectionControlApply.SourceSelection](ICubeSelectionControlApply.SourceSelection.htm).
 По управляемым измерениям будут доступны те элементы, которые были получены
 при построении этих измерений в результате применения параметров управления.


Если применение параметров управления выполняется в режиме сортировки,
 то свойство ResultSelection вернет
 список измерений в отсортированном виде (сначала управляющие, а затем
 управляемые измерения куба).


## Пример


Пример использования приведен в описании метода [ICubeSelectionControlApply.Apply](ICubeSelectionControlApply.Apply.htm).


См. также:


[ICubeSelectionControlApply](ICubeSelectionControlApply.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
