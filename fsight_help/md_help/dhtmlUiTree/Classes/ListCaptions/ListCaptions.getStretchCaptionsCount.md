# ListCaptions.getStretchCaptionsCount

ListCaptions.getStretchCaptionsCount
-


# ListCaptions.getStretchCaptionsCount


## Синтаксис


getStretchCaptionsCount();


## Описание


Метод getStretchCaptionsCount
 возвращает количество заголовков с относительной шириной.


## Комментарии


Ширина заголовка бывает фиксированная, заданная в пикселях и относительная,
 заданная в процентах.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим количество заголовков с относительной шириной
caps.getStretchCaptionsCount();
В результате выполнения примера было получено количество заголовков
 с относительной шириной.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
