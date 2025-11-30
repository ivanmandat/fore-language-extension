# Container.showAt

Container.showAt
-


# Container.showAt


## Синтаксис


showAt (index);


## Параметры


index. Индекс компонента, который необходимо отобразить.


## Описание


Метод showAt отображает дочерний элемент контейнера по его индексу.


## Комментарии


Метод отображает элементы, скрытые при помощи метода [hideAt](GridPanel.hideAt.htm).


## Пример


Для выполнения примера на html-странице предполагается наличие на html-странице компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»). Добавим html-кнопки, при нажатии на которые будет скрываться и появляться первый элемент, расположенный на компоненте [GridPanel](../../Components/GridPanel/GridPanel.htm):


<button onclick= "hide()">Скрыть 1ый элемент</button>


<button onclick= "show()">Показать 1ый элемент</button>


В javascript-код должны быть добавлены следующие функции:


function hide() {


    container.hideAt(0);


};


function show() {


    container.showAt(0);


};


После выполнения примера при нажатии на кнопку «Скрыть 1ый элемент» будет скрыт первый дочерний элемент таблицы. При нажатии на кнопку «Показать 1ый элемент» будет отображен скрытый элемент.


См. также:


[Container](Container.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
