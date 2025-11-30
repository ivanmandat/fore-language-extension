# ListBox.Orientation

ListBox.Orientation
-


# ListBox.Orientation


## Синтаксис


Orientation: PP.[Orientation](dhtmlCommon.chm::/enums/pp.orientation.htm)


## Описание


Свойство Orientation определяет
 ориентацию компонента [ListBox](../../Components/ListBox/ListBox.htm).


## Комментарии


Значением свойства являются элементы перечисления [Orientation](dhtmlCommon.chm::/enums/pp.orientation.htm).


По умолчанию установлено значение PP.[Orientation](dhtmlCommon.chm::/Enums/PP.Orientation.htm).Vertical,
 то есть список располагается вертикально.


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку
 PP.js и таблицы визуальных стилей PP.css. Предполагается наличие файла,
 содержащего набор пиктограмм, с наименованием «1.png». Данный файл должен
 находиться на одном уровне с html-страницей. Далее приведен javascript-код,
 с помощью которого на странице размещается горизонтальный [список](../../Components/ListBox/ListBox.htm),
 состоящий из пиктограмм.


<script type="text/javascript">


    var imagelist2 = new PP.ImageList();//Создаем список пиктограмм.


    imagelist2.setSource("1.png");//Адрес png-файла.


    imagelist2.setIconHeight(32);


    imagelist2.setIconWidth(32);


    var listbox2 = new PP.Ui.ListBox({//Создаем компонент ListBox.


        ParentNode:
 document.getElementById("example2"),


        ImageList:
 imagelist2,//Устанавливаем для компонента
 ListBox список пиктограмм.


        Orientation:
 PP.Orientation.Horizontal//Задаем горизонтальную
 ориентацию.


    });


//Добавляем элементы списка
 - объекты класса PP.IconListItem:


    listbox2.addItem(new PP.Ui.IconListItem({
 Content: "IconListItem 0" }));


    listbox2.addItem(new PP.Ui.IconListItem({
 Content: "IconListItem 1" }));


    listbox2.addItem(new PP.Ui.IconListItem({
 Content: "IconListItem 2" }));


    listbox2.addItem(new PP.Ui.IconListItem({
 Content: "IconListItem 3" }));


    listbox2.addItem(new PP.Ui.IconListItem({
 Content: "IconListItem 4" }));


//Задаем параметры для элементов
 списка «listbox2»:


    var a = listbox2.getItems();


    for (var i = 0; i < a.length;
 i++) {


         a[i].setColumnIndex(0);


         a[i].setRowIndex(i);


         a[i].setHeight(36);


         a[i].setWidth(a[i]
 instanceof PP.Ui.IconListItem ? 36 : 150);


    }


</script>


После выполнения примера на html-странице будет размещен горизонтальный
 список с пиктограммами, имеющий следующий вид:


![](../../Components/ListBox/ListBox4.gif)


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
