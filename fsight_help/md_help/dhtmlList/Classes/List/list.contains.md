# List.contains

List.contains
-


# List.contains


## Синтаксис


contains (item);


## Параметры


item. Элемент для поиска


## Описание


Метод contains определяет, входит
 ли указанный элемент в коллекцию.


## Комментарии


Метод возвращает значение true,
 если элемент входит в коллекцию. Иначе возвращается значение false.


## Пример


Для выполнения примера [создайте
 компонент Breadcrumb](dhtmlUi.chm::/components/breadcrumb/example_breadcrumb.htm) c наименованием «bread» и кнопку с надписью «CheckIndex».


var b1 = new PP.Ui.Button({ ParentNode: "b1",
 Content: "CheckIndex" });


b1.Click.add(function (sender, args){


    if (bread.getItems().contains(item1)==
 true)


    {


    alert(bread.getItems().indexOf(item1));


    }


});


После выполнения примера на при нажатии на кнопку на экран будет выведено
 сообщение с индексом элемента «item1», если данный элемент присутствует
 в коллекции.


См. также:


[List](List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
