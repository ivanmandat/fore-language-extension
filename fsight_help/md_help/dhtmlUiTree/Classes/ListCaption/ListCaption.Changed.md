# ListCaption.Changed

ListCaption.Changed
-


# ListCaption.Changed


## Синтаксис


Changed: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- ChangedProperty. String. Измененное свойство;


	- NewValue. Новое значение.


## Описание


Событие Changed наступает после
 изменения любых свойств заголовка, влияющих на отображение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
cap.Changed.add( function(sender, args) {
  console.log("Событие Changed:");
  console.log(args);
});
// Инициируем событие
cap.setWidth(200);
В результате выполнения примера добавлено событие.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
