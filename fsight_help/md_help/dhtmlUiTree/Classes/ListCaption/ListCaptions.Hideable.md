# ListCaption.Hideable

ListCaption.Hideable
-


# ListCaptions.Hideable


## Синтаксис


Hideable: Boolean;


## Описание


Свойство Hideable определяет
 возможность изменять видимость столбца.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setHideable,
 а возвращается с помощью метода getHideable.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Уберем возможность изменять видимость столбца
cap.setHideable(false);
В результате выполнения примера будет убрана возможность изменять видимость
 столбца.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
