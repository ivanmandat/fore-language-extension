# ListCaptions.Changed

ListCaptions.Changed
-


# ListCaptions.Changed


## Синтаксис


Changed: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Changed. Object. Измененный заголовок;


	- Type. String. Измененное свойство.


## Описание


Событие Changed наступает после
 изменения любых свойств заголовков, влияющих на отображение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
caps.Changed.add( function(sender, args) {
  console.log("Событие Changed:");
  console.log(args);
});
// Инициируем событие
cap.setWidth(200);
В результате выполнения примера добавлено событие Changed.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
