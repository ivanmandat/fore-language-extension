# TreeListBase.getRequestTimeout

TreeListBase.getRequestTimeout
-


# TreeListBase.RequestTimeout


## Синтаксис


RequestTimeout: Number;


## Описание


Свойство RequestTimeout определяет
 задержку перед перерисовыванием дерева.


## Комментарии


Значение свойства устанавливается через JSON, а возвращается с помощью
 метода getRequestTimeout.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим задержку перед перерисовыванием дерева
Tree.getRequestTimeout();
// -> 1000
В результате выполнения примера будет получена задержка перед перерисовыванием
 дерева.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
