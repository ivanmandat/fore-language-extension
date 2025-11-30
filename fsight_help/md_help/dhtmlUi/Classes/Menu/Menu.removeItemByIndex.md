# Menu.removeItemByIndex

Menu.removeItemByIndex
-


# Menu.removeItemByIndex


## Синтаксис


removeItemByIndex (value);


## Параметры


value. Индекс элемента меню, который необходимо удалить.


## Описание


Метод removeItemByIndex удаляет элемент меню по его индексу.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [Menu](../../Components/Menu/Menu.htm) с наименованием «menu1» (см. пример для свойства [Menu.ImageList](Menu.ImageList.htm)). Создадим html- кнопку, при нажатии на которую будет удаляться первый (верхний) элемент меню, в том числе заголовок и разделитель:


<button onclick = "removeFirst();">Remove first</button>


В javascript-код должна быть добавлена следующая функция:


    function removeFirst() {


        menu1.removeItemByIndex(0);


    }


После выполнения примера при нажатии на кнопку «Remove first» будет удаляться первый элемент меню.


См. также:


[Menu](Menu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
