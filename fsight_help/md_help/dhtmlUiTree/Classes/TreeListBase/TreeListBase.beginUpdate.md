# TreeListBase.beginUpdate

TreeListBase.beginUpdate
-


# TreeListBase.beginUpdate


## Синтаксис


beginUpdate();


## Описание


Метод beginUpdate устанавливает
 флаг блокировки обновления.


## Комментарии


Метод добавляет единицу к флагу блокировки обновления. Обновление будет
 произведено, когда флаг блокировки будет равен нулю. Для снятия флага
 используйте метод [TreeListBase.endUpdate](TreeListBase.endUpdate.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Приостановим обновление дерева
Tree.beginUpdate();
// Создадим вершины
node7 = { Key: '7', Content: 'No7' };
node8 = { Key: '8', Content: 'No8' };
nodes = [node7, node8];
// Проверим статус обновления
console.log(Tree.isUpdating()? "Идет обновление" : "Режим обновления не активен");
// Загрузим новые вершины
Tree.loadNodes(nodes);
// Обновим дерево
Tree.endUpdate();
В результате выполнения примера добавленные вершины будут обновлены
 только после вызова метода [TreeListBase.endUpdate](TreeListBase.endUpdate.htm).


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
