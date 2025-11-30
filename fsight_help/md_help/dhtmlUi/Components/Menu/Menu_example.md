# Пример создания компонента Menu

Пример создания компонента Menu
-


# Пример создания компонента Menu


Для выполнения примера в теге HEAD добавьте ссылки на библиотеку PP.js и визуальные стили PP.css. далее приведен пример статического создания компонента [Menu](Menu.htm), состоящего из заголовка, шести пунктов и разделителя между третьим и четвертым пунктами:


<body>


<div id="but"></div>


<div id= "div1">Item6</div>


<script type="text/javascript">


    var showBut = new PP.Ui.Button({ ParentNode: document.getElementById("but"), Content: "Show" });


    //меню


    var menu = new PP.Ui.Menu();


    //первый дочерний элемент меню


    var item1 = new PP.Ui.MenuItem();


    //подменю первого элемента


    var childMenu1 = new PP.Ui.Menu();


    //первый пункт подменю первого элемента


    childMenu1Item1 = new PP.Ui.MenuItem();


    //содержимое


    childMenu1Item1.setContent("Element 1");


    //установлен флаг


    childMenu1Item1.setChecked(true);


    //второй пункт подменю первого элемента


    childMenu1Item2 = new PP.Ui.MenuItem();


    //содержимое


    childMenu1Item2.setContent("Element 2");


    //установлен флаг


    childMenu1Item2.setChecked(true);


    //добавляем пункты для подменю первого элемента


    childMenu1.addItem(childMenu1Item1);


    childMenu1.addItem(childMenu1Item2);


    //устанавливаем меню для первого элемента


    item1.setMenu(childMenu1);


    //содержимое


    item1.setContent("Item1");


    //второй элемент меню


    var item2 = new PP.Ui.MenuItem();


    //имя группы


    item2.setGroupName("gr1");


    //содержимое


    item2.setContent("Item2");


    var item3 = new PP.Ui.MenuItem();


    //содержимое


    item3.setContent("Item3");


    //имя группы


    item3.setGroupName("gr1");


    //создаем и добавляем заголовок в меню


    var header = new PP.Ui.MenuHeader();


    header.setContent("Main");


    menu.addItem(header);


    //добавляем элементы в меню; элементы 1-3 - экземпляры класса [MenuItem](../../Classes/MenuItem/MenuItem.htm)


    menu.addItem(item1);


    menu.addItem(item2);


    menu.addItem(item3);


    //создаем и добавляем разделитель в меню


    var sep = new PP.Ui.Separator();


    menu.addItem(sep);


    //текст


    menu.addItem("Item4");


    //html-разметка


    menu.addItem("<span>Item5</span>");


    //DOM-вершина


    menu.addItem(document.getElementById("div1"));


    //вызов меню при нажатии на кнопку


    showBut.Click.add(function (sender, args) { menu.[show](../../Classes/DropPanel/DropPanel.show.htm)(50, 50) });


</script>


</body>


После выполнения примера при нажатии на кнопку «Show», будет раскрыто меню, имеющее следующий вид:


![](Menu1.gif)


Меню состоит из ,[заголовка](../../Classes/MenuHeader/MenuHeader.htm) «Main», [разделителя](../../Classes/Separator/Separator.htm) (между третьим и четвертым элементов) и шести [пунктов](../../Classes/MenuItem/MenuItem.htm). Первые три пункта являются экземплярами класса [MenuItem](../../Classes/MenuItem/MenuItem.htm), четвертый - текст, пятый представлен html-разметкой, шестой - DOM-вершиной.


Для первого пункта при помощи свойства [Menu](../../Classes/MenuItem/MenuItem.Menu.htm) установлено подменю, состоящее из двух пунктов, для каждого из которых при помощи свойства [Checked](../../Classes/MenuItem/MenuItem.Checked.htm) установлен [флажок](../CheckBox/CheckBox.htm).


Для второго и третьего элемента меню при помощи свойства [GroupName](../../Classes/MenuItem/MenuItem.GroupName.htm) установлено общее имя группы. Это означает, что для данных элементов настроен [переключатель](../RadioButton/RadioButton.htm), который устанавливается при выборе элемента:


![](Menu2.gif)


Одновременно может быть установлен только один переключатель: или для «Item2», или для «Item3».


См. также:


[Menu](Menu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
