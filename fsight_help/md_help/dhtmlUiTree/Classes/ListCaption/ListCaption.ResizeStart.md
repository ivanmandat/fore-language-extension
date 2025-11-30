# ListCaption.ResizeStart

ListCaption.ResizeStart
-


# ListCaption.ResizeStart


## Синтаксис


ResizeStart: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Width. Number. Ширина колонки до начала перетаскивания.


## Описание


Событие ResizeStart наступает
 перед сменой ширины столбца мышью.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
cap.ResizeStart.add( function(sender, args) {
  console.log("Событие ResizeStart:");
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
