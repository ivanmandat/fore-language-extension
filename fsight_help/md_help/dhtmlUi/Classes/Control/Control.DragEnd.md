# Control.DragEnd

Control.DragEnd
-


# Control.DragEnd


## Синтаксис


DragEnd: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие DragEnd наступает при
 окончании перетаскивания компонента.


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку
 PP.js и таблицу визуальных стилей PP.css. Далее приведен javascript-код,
 при помощи которого на html-странице будет размещена [кнопка](../../Components/Button/Button.htm).


<script type="text/javascript">

function DragEnd(data) {

         this.data = data;

         this.onDragEnd =
 function (sender, args)

         {

            alert("onDragEnd");

         }

}

var DE = new DragEnd("DragEnd event example");

var b1 = new PP.Ui.Button({

         Content: "Button",

         ContextMenu: DE.onDragEnd
 });

b1.addToNode("btn1");

</script>


После выполнения примера при окончании перетаскивания кнопки будет выдаваться
 сообщение «onDragEnd».


Использование события на примере компонента ListBox
 описано на странице «[Пример
 создания компонента ListBox](dhtmlList.chm::/components/listbox/listboxexample.htm)».


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
