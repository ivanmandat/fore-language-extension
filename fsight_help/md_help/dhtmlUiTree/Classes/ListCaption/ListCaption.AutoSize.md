# ListCaption.AutoSize

ListCaption.AutoSize
-


# ListCaption.AutoSize


## Синтаксис


AutoSize: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Не содержит аргументов.


## Описание


Событие AutoSize наступает перед
 авто-определением ширины столбца.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Зададим событие
cap.AutoSize.add( function(sender, args) {
  console.log("Событие AutoSize:");
  console.log(args);
});
// Инициируем событие двойным щелчком мыши по линии разделения столбцов.
В результате выполнения примера добавлено событие.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
