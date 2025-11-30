# IDimensionViewerBase.GetCheckedNodes

IDimensionViewerBase.GetCheckedNodes
-


# IDimensionViewerBase.GetCheckedNodes


## Синтаксис


GetCheckedNodes([WithIndeterminate: Boolean = False]):
 [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Параметры


WithIndeterminate. Необязательный параметр, определяющий,
 будут ли включаться в коллекцию элементы, имеющие неопределенное состояние
 ([IDimensionViewerBase.CheckState](IDimensionViewerBase.CheckState.htm)=Indeterminate). По умолчанию элементы
 с неопределенным состоянием отметки флага в коллекцию не включаются.


## Описание


Метод GetCheckedNodes возвращает
 отметку содержащую те элементы, у которых установлены флажки.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
