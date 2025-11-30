# ListCaptions.SortChanged

ListCaptions.SortChanged
-


# ListCaptions.SortChanged


## Синтаксис


SortChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Caption. Number. Индекс столбца с сортировкой;


	- Direction. String. Направление сортировки;


	- Method. String. Метод сортировки.


## Описание


Событие SortChanged наступает
 после изменения сортировки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
// Зададим событие
caps.SortChanged.add( function(sender, args) {
  console.log("Событие SortChanged:");
  console.log(args);
});
// Инициируем событие изменив мышью сортировку столбца
В результате выполнения примера добавлено событие SortChanged.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
