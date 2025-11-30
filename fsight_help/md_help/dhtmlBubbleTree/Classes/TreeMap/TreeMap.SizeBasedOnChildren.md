# TreeMap.SizeBasedOnChildren

TreeMap.SizeBasedOnChildren
-


# TreeMap.SizeBasedOnChildren


## Синтаксис


SizeBasedOnChildren: Boolean;


## Описание


Свойство SizeBasedOnChildren
 определяет, зависит ли размер родительской ветви от суммы потомков.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSizeBasedOnChildren,
 а возвращается с помощью метода getSizeBasedOnChildren.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ):


// Уберем зависимость размера родителей от размера потомков
treeMap.setSizeBasedOnChildren(false);
В результате выполнения примера дерево было перестроено, размер родительских
 элементов не зависит от размеров потомков.


См. также:


[TreeMap](TreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
