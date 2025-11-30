# TreeColumn.WidthChanged

TreeColumn.WidthChanged
-


# TreeColumn.WidthChanged


## Синтаксис


WidthChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие WidthChanged наступает
 при изменении ширины столбца.


## Комментарии


Событие актуально, если для свойства [TreeList.EnableResizeColumn](../TreeList/TreeList.EnableResizeColumn.htm)
 установлено значение true.


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Компонент должен
 содержать как минимум один столбец. Добавим обработчик события WidthChanged:


var column = treeListSett.getColumns().getItem(0);
column.WidthChanged.add(function (sender, args) {
    column.setWidth(treeListSett.getOptimalWidthForColumn(0));
});
После выполнения примера при изменении размера первого столбца для него
 будет установлена [оптимальная
 ширина](../TreeList/TreeList.getOptimalWidthForColumn.htm).


См. также:


[TreeColumn](TreeColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
