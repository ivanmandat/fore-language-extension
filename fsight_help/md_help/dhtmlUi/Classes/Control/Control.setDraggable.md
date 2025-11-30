# Control.setDraggable

Control.setDraggable
-


# Control.setDraggable


## Синтаксис


setDraggable(value: Boolean);


## Параметры


value. Признак возможности
 перетаскивания компонента.


## Описание


Метод setDraggable устанавливает
 возможность перетаскивания компонента на HTML-странице.


## Комментарии


Допустимые значения параметра value:


	- true. На HTML-странице
	 доступно перетаскивание компонента с помощью механизма Drag&Drop;


	- false. На HTML-странице
	 перетаскивание компонента недоступно.


## Пример


Для выполнения примера необходимо подключить к HTML-странице библиотеку
 PP.js и таблицы визуальных стилей PP.css.


Создадим кнопку - экземпляр класса [Button](../Button/Button.htm):


<div id = "btn1"></div>

<script type="text/javascript">

   var b1 = new PP.Ui.Button({

      Content: "Draggable Button",

      UseWrapping: true});

   b1.addToNode("btn1");

   b1.setDraggable(true);

</script>


После выполнения примера на HTML-странице будет создана кнопка с надписью
 «Draggable Button». Данная кнопка с помощью механизма Drag&Drop может
 быть перемещена в любую часть страницы.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
