# TreeListBase.ExpansionMode

TreeListBase.ExpansionMode
-


# TreeListBase.ExpansionMode


## Синтаксис


ExpansionMode: PP.Ui.TreeListExpansionMode;


## Описание


Свойство ExpansionMode определяет
 режим раскрывания вершин.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setExpansionMode,
 а возвращается с помощью метода getExpansionMode.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим режим раскрывания вершин
Tree.setExpansionMode(PP.Ui.TreeListExpansionMode.SingleExpand);
В результате выполнения примера будет включен единичный режим раскрывания
 вершин.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
