# TreeListView.highlightText

TreeListView.highlightText
-


# TreeListView.highlightText


## Синтаксис


highlightText(words, caseSensitive, columns);


## Параметры


words. Array | String. Подсвечиваемые
 строки;


caseSensitive. Boolean. Необязательный
 параметр. Признак чувствительности к регистру. По умолчанию false
 - не учитывать регистр;


columns. Array | Number. Необязательный
 параметр. Столбцы, к которым применить подсветку.


## Описание


Метод highlightText подсвечивает
 указанные строки в элементах дерева.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Подсветим текст, содержащий строку "node"
Tree.highlightText("node");
В результате выполнения примера был подсвечен текст в первом столбце,
 содержащий строку "node".


Удалим подсветку:


// Удалим подсветку
Tree.clearhighlightText();
См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
