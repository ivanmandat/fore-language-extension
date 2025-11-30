# Пример создания компонента ListBox с механизмом DragAndDrop

Пример создания компонента ListBox с механизмом DragAndDrop
-


# Пример создания компонента ListBox с механизмом Drag&Drop


Ниже приведен полный код html-страницы, на которой размещены два экземпляра
 компонента ListBox. Элементы первого списка перетаскиваются в область
 второго списка при помощи механизма Drag&Drop, реализованного посредством
 обработчиков событий [DragStart](dhtmlUi.chm::/Classes/Control/Control.DragStart.htm)
 и [DragEnd](dhtmlUi.chm::/Classes/Control/Control.DragEnd.htm).


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML
 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">


<head>


    <title>ListBox</title>


    <script src="PP.js"
 type="text/javascript"></script> <!--ссылка
 на библиотеку PP.js-->


    <link href="PP.css"
 rel="stylesheet" type="text/css" /> <!--ссылка
 на таблицы визуальных стилей PP.css-->


</head>


<body>


<!--Размещаем 2 компонента
 ListBox с идентификаторами «sample» и «sample2» в ячейках таблицы:-->


    <table>


        <tr>


            <td
 style="vertical-align: top;">


               <div
 id="sample" style="margin-top: 0px; width: 150px; height:
 72px;


                     border:
 1px solid silver;">


                </div>


            </td>


            <td
 style="vertical-align: top;">


                <div
 id="sample2" style="margin-top: 0px; width: 150px; height:
 72px;


                    border:
 1px solid silver;">


                </div>


            </td>


        </tr>


     </table>


<script type="text/javascript">


    var listbox = new PP.Ui.ListBox({//Создаем экземпляр класса ListBox.


        ParentNode:
 document.getElementById("sample")});//Устанавливаем
 идентификатор для DOM-объекта.


//Добавим элементы списка:


    listbox.addItem("Элемент1");


    listbox.addItem("Элемент2");


    var a = listbox.getItems();


//Устанавливаем параметры
 элементов списка «sample2»:


    for (var i = 0; i < a.length;
 i++) {


        a[i].setColumnIndex(0);//индекс столбца


        a[i].setRowIndex(i);//индекс строки


        a[i].setHeight(36);


        a[i].setWidth(150);


        a[i].setResourceKey("listBoxListBoxListItem"
 + (i + 1));//определим ресурсный ключ для
 элементов


    }


    var listbox2 = new PP.Ui.ListBox({//Создаем экземпляр класса ListBox.


        ParentNode:
 document.getElementById("sample2"),


        Height:
 72});


    var DraggedElement = null;


//События для перетаскивания
 элементов списка:


    listbox.DragStart.add(function
 (sender, args) {//Добавляем обработчик события
 DragStart.


        DraggedElement
 = sender.getSelectedItem();


        args.Data
 = { data: 1 };//пользовательские данные
 компонента


        args.DoDragDrop
 = true;


        console.log('listbox.DragStart');


    });


    listbox.Drag.add(function
 (sender, args) {//Добавляем обработчик события
 Drag.


        console.log('Drag');


    });


    listbox2.DragEnd.add(function
 (sender, args) {//Добавляем обработчик события
 DragEnd для listbox2.


        listbox2.addItem(new
 PP.Ui.ListItem({


        Content:
 DraggedElement.getContent() }));


        console.log('listbox2.DragEnd');


    });


</script>


</body>


</html>


После выполнения примера на html-странице будут размещены два списка:


![](ListBoxDragDrop.gif)


При помощи механизма Drag&Drop элементы первого списка перетаскиваются
 в область второго списка:


![](ListBoxDragDrop1.gif)


При перетаскивании компонентов в консоль выводятся сообщения о происходящих
 событиях.


См. также:


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
