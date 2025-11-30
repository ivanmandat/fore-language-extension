# GridPanel.removeLastRow

GridPanel.removeLastRow
-


# GridPanel.removeLastRow


## Синтаксис


removeLastRow (notDispose);


## Параметры


notDispose. Удалять ли строку полностью. При установке значения false строка удаляется полностью. По умолчанию установлено значение true.


## Описание


Метод removeLastRow удаляет нижнюю строку таблицы.


## Пример


Для выполнения примера на html-странице предполагается наличие на html-странице компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»). Добавим html-кнопку, при нажатии на которую будет удалена последняя строка компонента [GridPanel](../../Components/GridPanel/GridPanel.htm):


<button onclick= "removeLast()">Удалить последнюю строку</button>


Javascropt-код должен содержать следующую функцию:


    function removeLast() {


        container.removeLastRow();


        };


После выполнения примера на html-странице будет размещена кнопка «Удалить последнюю строку», при нажатии на которую будет удаляться последняя строка компонента.


См. также:


[GridPanel](GridPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
