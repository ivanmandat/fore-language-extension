# HitTestResult

HitTestResult
-


# HitTestResult


## Описание


Перечисление HitTestResult содержит области компонента, в которых находится точка, передаваемая в качестве параметра методов.


Используется следующими свойствами и методами:


-
[ITreeControl.HitTest](../Interface/ITreeControl/ITreeControl.HitTest.htm)


-
[IListView.HitTest](../Interface/IListView/IListView.HitTest.htm)


-
[IDimensionViewer.HitTest](KeExtCtrls.chm::/Interface/IDimensionViewer/IDimensionViewer.HitTest.htm)


## Допустимые значения


 Значение
 Краткое описание


 1
 Nowhere. В клиентской области, но ниже последнего элемента.


 2
 OnItemIcon. Пиктограмма элемента.


 4
 OnItemLabel. Текст элемента.


 8
 OnItemIndent. В отступе, перед элементом, связанным с иерархической структурой дерева элементов.


 16
 OnItemButton. Кнопка сворачивания/разворачивания иерархии элемента.


 32
 OnItemRight. В клиентской области, справа от элемента.


 64
 OnItemStateIcon. Пиктограмма состояния элемента.


 256
 Above. Выше клиентской области компонента.


 512
 Below. Ниже клиентской области компонента.


 1024
 ToRight. Справа от клиентской области компонента.


 2048
 ToLeft. Слева от клиентской области компонента.


См. также:


[Перечисления сборки Forms](ModForms_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
