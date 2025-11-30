# TreeList.isSelecting

TreeList.isSelecting
-


# TreeList.isSelecting


## Синтаксис


IsSelecting(): Boolean;


## Описание


Метод IsSelecting определяет
 признак режима выделения.


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик
 события NodeHovered:


treeListSett.NodeHovered.add(function (sender, args)
{
console.debug("Признак редактирования: " + treeListSett.isEditing());
console.debug("Признак перетаскивания: " + treeListSett.isDraging());
console.debug("Признак выделения: " + treeListSett.isSelecting());
};
В результате выполнения примера, при каждом наведении курсора мыши по
 элементу, в консоль будет выведена информация о текущем выделении/перетаскивании/редактированиии
 списка.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
