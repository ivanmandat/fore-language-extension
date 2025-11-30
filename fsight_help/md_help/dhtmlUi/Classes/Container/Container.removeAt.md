# Container.removeAt

Container.removeAt
-


# Container.removeAt


## Синтаксис


removeAt (index, notDispose);


## Параметры


index. Индекс элемента, который необходимо удалить;


notDispose. Удалять ли элемент полностью. Если установлено значение false, элемент будет удален полностью.


## Описание


Метод removeAt удаляет дочерний элемент контейнера по его индексу.


## Пример


Для выполнения примера на html-странице предполагается наличие на html-странице компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»). Добавим html-кнопку, при нажатии на которую будет удален дочерний элемент компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с индексом 0:


<button onclick= "removeFirst()">Удалить первый</button>


Javascropt-код должен содержать следующую функцию:


    function removeLast() {


        container.removeAt(0);


        };


После выполнения примера на html-странице будет размещена кнопка «Удалить первый», при нажатии на которую из таблицы будет удаляться первый элемент [массива дочерних элементов](Container.Items.htm) компонента [GridPanel](../../Components/GridPanel/GridPanel.htm).


См. также:


[Container](Container.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
