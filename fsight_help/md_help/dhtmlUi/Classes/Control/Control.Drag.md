# Control.Drag

Control.Drag
-


# Control.Drag


## Синтаксис


Drag: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие Drag наступает при нажатии
 и удерживании левой кнопки мыши.


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку
 PP.js и таблицу визуальных стилей PP.css. Далее приведен javascript-код,
 при помощи которого на html-странице будет размещена [кнопка](../../Components/Button/Button.htm).


<script type="text/javascript">

function Drag(data) {

    this.data = data;

    this.onDrag = function (sender, args)//обработчик
 события Drag

         {

             alert("onDrag")

         }

}

var D = new Drag("Drag event example");

var b1 = new PP.Ui.Button({

         Content: "Button",

         Drag: D.onDrag});

b1.addToNode("btn1");

</script>


После выполнения примера при нажатии и удерживании левой кнопки мыши
 будет выведено сообщение «onDrag».


Использование события на примере компонента ListBox
 описано на странице «[Пример
 создания компонента ListBox](dhtmlList.chm::/components/listbox/listboxexample.htm)».


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
