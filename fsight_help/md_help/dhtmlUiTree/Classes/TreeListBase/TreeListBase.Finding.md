# TreeListBase.Finding

TreeListBase.Finding
-


# TreeListBase.Finding


## Синтаксис


Finding: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- String. String. Строка поиска;


	- Column. Number. Номер сортируемого столбца;


	- SetFocus. Boolean. Фокусировать найденную вершину;


	- Cancel. Boolean. Если установить данному свойству true
	 в обработчике события, то поиска не произойдет.


## Описание


Событие Finding наступает перед
 применением поиска.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.Finding.add( function(sender, args) {
  console.log("Событие Finding:");
  console.log(args);
});
// Инициируем событие
Tree.find("node", 0, true);
В результате выполнения примера добавлено событие Finding.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
