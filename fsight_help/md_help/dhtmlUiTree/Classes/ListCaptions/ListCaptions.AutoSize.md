# ListCaptions.AutoSize

ListCaptions.AutoSize
-


# ListCaptions.AutoSize


## Синтаксис


AutoSize: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


	- Caption. PP.Ui.ListCaption. Заголовок, для которого инициировано
	 авто-определение ширины;


	- Index. Number. Индекс заголовка.


## Описание


Событие AutoSize наступает перед
 авто-определением ширины заголовков.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
// Зададим событие
caps.AutoSize.add( function(sender, args) {
  console.log("Событие AutoSize:");
  console.log(args);
});
// Инициируем событие двойным щелчком мыши по линии разделения столбцов.
В результате выполнения примера добавлено событие AutoSize.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
