# TreeListBox.drillTo

TreeListBox.drillTo
-


# TreeListBox.drillTo


## Синтаксис


drillTo(newActiveNode, animate);


## Параметры


newActiveNode. Ключ родительской
 вершины;


animate. Boolean. Показывать
 анимацию перелистывания страниц.


## Описание


Метод drillTo совершает переход
 к указанной вершине.


## Пример


Для выполнения примера необходим компонент TreeListBox с идентификатором
 «treelist» (см. «[Пример
 создания компонента TreeListBox](../../Components/TreeListBox/TreeListBox_Example.htm)»).


// Перейдем к вершине
treelist.drillTo(102000, true);
В результате выполнения примера был совершен переход к родительской
 вершине.


См. также:


[TreeListBox](TreeListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
