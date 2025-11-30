# TreeListBase.NodeClass

TreeListBase.NodeClass
-


# TreeListBase.NodeClass


## Синтаксис


NodeClass: String;


## Описание


Свойство NodeClass определяет
 CSS класс указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeClass(nodeKey,
 value), а возвращается с помощью метода getNodeClass(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. String. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»), на странице должен быть объявлен
 CSS класс "test".


<style>
   .test {
    font-size: 120%;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #333366;
   }
</style>
Определим вершине стиль:


// Определим CSS класс вершины с индексом 0
Tree.setNodeClass(0, "test");
В результате выполнения примера вершине с индексом ноль будет присвоен
 CSS класс "test".


<tr id="TLVNodeRow0" class="PPTLVNodeRow
 test PPTLVNodeCollapsed">


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
