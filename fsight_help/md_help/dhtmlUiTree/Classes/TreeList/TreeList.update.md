# TreeList.update

TreeList.update
-


# TreeList.update


## Синтаксис


update ();


## Описание


Метод update обновляет отображение
 дерева.


## Комментарии


Метод используется для обновления отображения компонента в составе высокоуровневых
 компонентов, таких как [EaxDimBar](dhtmlExpress.chm::/Components/Express/EaxDimBar/EaxDimBar.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) с наименованием
 «treeListSett» (см. [Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)). Установим для дерева сортировку по
 убыванию по первому столбцу и вернем в консоль параметры сортировки:


treeListSett.sort(0, PP.Ui.TreeListSort.desc,
 'Checked', true);


treeListSett.update();


treeListSett.getSort();


После выполнения примера для дерева будет применяться сортировка по
 убыванию по первому столбцу. В консоль будет выведен объект с параметрами
 сортировки.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
