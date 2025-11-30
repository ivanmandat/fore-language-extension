# ListCaptions.getFixedCaptionsCount

ListCaptions.getFixedCaptionsCount
-


# ListCaptions.getFixedCaptionsCount


## Синтаксис


getFixedCaptionsCount();


## Описание


Метод getFixedCaptionsCount
 возвращает количество заголовков с фиксированной шириной.


## Комментарии


Ширина заголовка бывает фиксированная, заданная в пикселях и относительная,
 заданная в процентах.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Получим количество заголовков с фиксированной шириной
caps.getFixedCaptionsCount();
В результате выполнения примера было получено количество заголовков
 с фиксированной шириной.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
