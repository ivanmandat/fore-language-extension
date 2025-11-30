# ListCaption.ResizeEnd

ListCaption.ResizeEnd
-


# ListCaption.ResizeEnd


## Синтаксис


ResizeEnd: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Width. Number. Ширина колонки.


## Описание


Событие ResizeEnd наступает
 после смены ширины столбца мышью.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
cap.ResizeEnd.add( function(sender, args) {
  console.log("Событие ResizeEnd:");
  console.log(args);
});
// Инициируем событие растянув первый столбец мышью.
В результате выполнения примера добавлено событие.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
