# ListBox.removeItem

ListBox.removeItem
-


# ListBox.removeItem


## Синтаксис


removeItem(value, isDispose);


## Параметры


value. Индекс удаляемого элемента;


isDispose. Определяет, уничтожается ли элемент (true), или удаляется из списка (false).


## Описание


Метод removeItem удаляет элемент списка по указанному индексу.


## Пример


Для выполнения примера создайте компонент [ListBox](../../Components/ListBox/ListBox.htm) с наименованием «LB», как показано в описании метода [ListBox.filterByText](ListBox.filterByText.htm). Создадим кнопку, при нажатии на которую будет удален элемент списка:


<button onclick = "LB.removeItem(0);">Удалить</button>


После выполнения примера при нажатии на кнопку «Удалить» будет удаляться первый элемент списка.


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
