# ListCaption.ColumnEditable

ListCaption.ColumnEditable
-


# ListCaption.ColumnEditable


## Синтаксис


ColumnEditable: Boolean;


## Описание


Свойство ColumnEditable определяет
 возможность редактирования столбца заголовка.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setColumnEditable, а возвращается
 с помощью метода getColumnEditable.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовок
caps = Tree.getCaptions();
cap = caps.getCaptions()[0];
// Разрешим редактирование дерева
Tree.setEnableEdit(true);
// Запретим редактирование первого столбца
cap.setColumnEditable(false);
В результате выполнения примера было разрешено редактирование только
 второго столбца.


См. также:


[ListCaption](ListCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
