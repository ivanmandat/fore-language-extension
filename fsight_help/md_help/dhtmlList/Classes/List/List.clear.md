# List.clear

List.clear
-


# List.clear


## Синтаксис


clear (withDispose: Boolean);


## Параметры


withDispose.
 Если значение параметра true,
 то объекты уничтожаются, а если false, то просто удаляется из списка элементов
 PP.[List](List.htm);


fireEvent. Определяет,
 будет ли при вызове метода генерироваться соответствующее событие. Если
 установлено значение true, событие генерируется, иначе - не генерируется.


## Описание


Метод clear удаляет все объекты
 коллекции.


## Пример


Для выполнения примера на html-странице в теге HEAD добавьте ссылки
 на библиотеку компонентов PP.js и PP.css. Создадим компонент [Breadcrumb](dhtmlUi.chm::/components/breadcrumb/breadcrumb.htm)
 с тремя элементами, два из которых выбраны, и кнопку, при нажатии на которую
 выбранные элементы удаляются из цепочки навигации:


    var bread = new PP.Ui.Breadcrumb({


        ParentNode:
 document.getElementById("bc1"),


        Width:
 400,


        Items:


          [


                {
 Content: "Элемент1", Id: "el1" },


                {
 Content: "Элемент2", Id: "el2" },


                {
 Content: "Элемент3", Id: "el3" }


          ],


        SelectedItems:
 [0, 1]


    });


    var b1 = new PP.Ui.Button({
 ParentNode: "b1", Content: "Clear" });


    b1.Click.add(function (sender,
 args){


    bread.getSelectedItems().clear(false)});


После выполнения примера на html-странице будет размещен компонент [Breadcrumb](dhtmlUi.chm::/components/breadcrumb/breadcrumb.htm)
 и кнопка с надписью «Clear», при нажатии на которую из навигационной строки
 будут удалены выбранные элементы. Если для параметра withDispose
 установить true, то элементы будут
 полностью удалены из компонента.


См. также:


[List](List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
