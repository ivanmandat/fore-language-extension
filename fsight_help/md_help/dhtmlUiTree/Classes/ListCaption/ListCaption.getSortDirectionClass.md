# ListCaption.setSortDirectionClass

ListCaption.setSortDirectionClass
-


# ListCaption.setSortDirectionClass


## Синтаксис


setSortDirectionClass(value);


## Параметры


value. String. Направление
 сортировки. Может принимать значения: "Asc" - по возрастающей,
 "Desc" - по убывающей, "" - без сортировки.


## Описание


Метод setSortDirectionClass
 устанавливает направление значка сортировки.


## Комментарии


Метод устанавливает только значок сортировки, без установки реального
 режима сортировки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Установим значок сортировки для первого столбца
cap.setSortDirectionClass("Asc");
В результате выполнения примера был установлен значок сортировки для
 первого столбца.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
