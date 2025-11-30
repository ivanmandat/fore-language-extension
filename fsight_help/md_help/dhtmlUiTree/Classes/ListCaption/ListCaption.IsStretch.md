# ListCaption.IsStretch

ListCaption.IsStretch
-


# ListCaption.IsStretch


## Синтаксис


IsStretch: Boolean;


## Описание


Свойство IsStretch определяет
 признак растянутости заголовка.


## Комментарии


Заголовок считается растянутым, когда его ширина установлена в % от
 общей ширины.


Значение свойства устанавливается из JSON и с помощью метода setIsStretch, а возвращается с помощью
 метода getIsStretch.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Определим признак растянутости заголовка
cap.getIsStretch();
В результате выполнения примера был получен признак растянутости заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
