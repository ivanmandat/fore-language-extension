# TreeList.ColumnVisibilityChanged

TreeList.ColumnVisibilityChanged
-


# TreeList.ColumnVisibilityChanged


## Синтаксис


ColumnVisibilityChanged: function (sender, args);


## Параметры


sender. Источник
 события;


args. Информация
 о событии. Доступные аргументы: Column
 - индекс столбца, для которого была изменена видимость; Visibility - видимость столбца: true
 - столбец отображается, false - столбец скрыт.


## Описание


Событие ColumnVisibilityChanged
 наступает после изменения видимости столбца дерева.


## Комментарии


Отображение заголовков столбцов доступно, если для свойства [TreeList.CaptionVisible](TreeList.CaptionVisible.htm)
 установлено значение true.


Чтобы отобразить/скрыть столбец дерева, нажмите на кнопку ![](showColumns.gif) в верхнем правом углу дерева
 и в раскрывающемся меню установите/снимите флажки для столбцов, которые
 необходимо отобразить/скрыть.


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавьте обработчики
 событий ColumnVisibilityChanged и [ColumnVisibilityChanging](TreeList.ColumnVisibilityChanging.htm):


treeListSett.ColumnVisibilityChanging.add(function (sender, args) {
   console.log("Изменение видимости столбца с индексом " + args.Column)
});
treeListSett.ColumnVisibilityChanged.add(function (sender, args) {
   if (args.Visibility == true) {
      console.log("Столбец с индексом " + args.Column + " отображается")
   } else {
      console.log("Столбец с индексом " + args.Column + " скрыт")
   }
});
После выполнения примера, при изменении видимости столбца в дереве,
 в консоль будет выведено сообщение «Изменение видимости столбца с индексом
 <индекс столбца>».


После изменения видимости столбца в консоль будет выведено сообщение
 «Столбец с индексом <индекс столбца> отображен/скрыт».


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
