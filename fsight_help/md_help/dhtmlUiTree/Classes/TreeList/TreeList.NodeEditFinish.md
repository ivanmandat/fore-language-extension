# TreeList.NodeEditFinish

TreeList.NodeEditFinish
-


# TreeList.NodeEditFinish


## Синтаксис


NodeEditFinish: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Доступные аргументы:
 Node - вершина, которая была отредактирована;
 Column - номер столбца, в котором находится вершина,
 которая была отредактирована; Value - новое значение вершины; OldValue - старое значение вершины; Esc
 - признак нажатия кнопки ESC: true - кнопка ESC была нажата, false
 - кнопка ESC не была нажата.


## Описание


Событие NodeEditFinish наступает
 после завершения редактирования вершины иерархического дерева.


## Комментарии


Редактирование вершин доступно, если для свойства [TreeList.EnableEdit](TreeList.EnableEdit.htm)
 установлено значение true.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) c наименованием
 «treeListSett» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавляем обработчик события окончания
 изменения вершины дерева:


treeListSett.NodeEditFinish.add(function (sender, args) {
    console.log("Содержимое вершины изменилось с " + args.OldValue + " на " + args.Value );
});
Меняем содержимое вершины «South Africa» на «North Africa». В результате
 в консоль будет выведено сообщение об изменении содержимого вершины:


Содержимое вершины изменилось с South Africa на
 North Africa


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
