# ListCaptions.Changing

ListCaptions.Changing
-


# ListCaptions.Changing


## Синтаксис


Changing: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Changing. Object. Изменяемый заголовок;


	- Type. String. Изменяемое свойство.


## Описание


Событие Changing наступает перед
 изменением любых свойств заголовков, влияющих на отображение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
caps.Changing.add( function(sender, args) {
  console.log("Событие Changing:");
  console.log(args);
});
// Инициируем событие
cap.setWidth(200);
В результате выполнения примера добавлено событие Changing.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
