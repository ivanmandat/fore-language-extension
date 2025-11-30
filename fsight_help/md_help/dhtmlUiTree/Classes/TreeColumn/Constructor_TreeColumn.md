# Конструктор TreeColumn

Конструктор TreeColumn
-


# Конструктор TreeColumn


## Синтаксис


PP.Ui.TreeColumn (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор TreeColumn создает экземпляр класса [TreeColumn](TreeColumn.htm).


## Пример


Для выполнения примера создайте компонент [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeList», как показано в описании конструктора [TreeNode](../TreeNode/Constructor_TreeNode.htm). Установим для компонента столбец с наименованием «Population», который будет вторым в [коллекции столбцов](../TreeColumns/TreeColumns.htm):


var columns = treeList.getColumns();


var column = new PP.Ui.TreeColumn({Caption: "Population", Width: 100, MinWidth: 50, Visible: true});


columns.setItem(column, 1);


После выполнения примера для компонента TreeList будет установлен новый столбец.


См. также:


[TreeColumn](TreeColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
