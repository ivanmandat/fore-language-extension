# TreeListBase.DataRequest

TreeListBase.DataRequest
-


# TreeListBase.DataRequest


## Синтаксис


DataRequest: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Partial. Boolean. Признак частичной подгрузки;


	- Parent. String. Ключ вершины, в которую происходит загрузка;


	- Request. Array. Массив подгруженных вершин.


## Описание


Событие DataRequest наступает
 перед изменением сортировки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.DataRequest.add( function(sender, args) {
  console.log("Событие DataRequest:");
  console.log(args);
});
// Инициируем событие
Tree.requestData([0], 0);
В результате выполнения примера добавлено событие DataRequest.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
