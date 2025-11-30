# ListCaption.Resizable

ListCaption.Resizable
-


# ListCaption.Resizable


## Синтаксис


Resizable: Boolean;


## Описание


Свойство Resizable определяет
 возможность заголовка менять размеры.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setResizable, а возвращается с помощью
 метода getResizable.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Запретим изменять размер заголовка
cap.setResizable(false);
В результате выполнения примера была выключена возможность изменять
 размер заголовка.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
