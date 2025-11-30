# ListCaption.Reduction

ListCaption.Reduction
-


# ListCaption.Reduction


## Синтаксис


Reduction: Number;


## Описание


Свойство Reduction определяет
 уменьшение видимой ширины заголовка.


## Комментарии


Используется для уменьшения видимой ширины заголовка из-за наложения
 кнопки меню заголовка. Задается в пикселях.


Значение свойства устанавливается из JSON и с помощью метода setReduction, а возвращается с помощью
 метода getReduction.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим второй заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[1];
// Получим текущее уменьшение видимой ширины
cap.getReduction();
В результате выполнения примера было получено значение, на которое уменьшена
 ширина второго заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
