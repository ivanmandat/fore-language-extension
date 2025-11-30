# List.insert

List.insert
-


# List.insert


## Синтаксис


insert (ctrl: PP.Ui.[Control](dhtmlUi.chm::/Classes/control/control.htm),
 index: Number, fireEvent: Boolean);


## Параметры


ctrl. Элемент
 управления, который необходимо вставить в коллекцию. Нумерация начинается
 с 0;


index. Индекс элемента коллекции;


fireEvent. Определяет, будет
 ли при вызове метода генерироваться соответствующее событие. Если установлено
 значение true, событие генерируется,
 иначе - не генерируется.


## Описание


Метод insert добавляет элемент
 в указанную позицию.


## Пример


Для выполнения примера [создайте
 компонент TreeList](dhtmlUiTree.chm::/components/treelist/treelist_example.htm) с наименованием «treeListSett». В теге BODY добавьте
 элемент DIV с идентификатором «but1». Создадим кнопку, при нажатии на
 которую в список столбцов будет добавлен новый элемент:


var columns = treeListSett.getColumns();
function insert()
{
    columns.insert(new PP.Ui.TreeColumn(
    {
        Caption: "Region",
        Width: 100,
        MinWidth: 50,
        Visible: true
    }), 1)
}
var but = new PP.Ui.Button(
{
    ParentNode: "but1",
    Content: "Insert",
    Width: 50,
    Height: 20
})
but.Click.add(insert);
columns.Changed.add(function (sender, args)
{
    alert("Добавлен столбец")
}

После выполнения примера на html-страницу будет добавлена кнопка с наименованием
 «Insert». При нажатии на кнопку в список столбцов на вторую позицию будет
 добавлен новый элемент:


![](treelist19.gif)


При этом на экран будет выведено сообщение «Добавлен столбец».


См. также:


[List](List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
