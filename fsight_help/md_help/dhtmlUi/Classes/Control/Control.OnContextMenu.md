# Control.OnContextMenu

Control.OnContextMenu
-


# Control.OnContextMenu


## Синтаксис


OnContextMenu: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие OnContextMenu наступает
 при вызове контекстного меню компонента.


## Комментарии


Для наступления события необходимо, чтобы для параметра метода [Control.setDraggable](Control.setDraggable.htm) было установлено
 значение true.


## Пример


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных
 стилей PP.css. Создадим [кнопку](../../Components/Button/Button.htm),
 при вызове контекстного меню которой будет выдаваться сообщение «Context
 Menu is pressed»:


<script type="text/javascript">

function ContMen(data) {

        this.data = data;

        this.onContMen = function
 (sender, args)//Обработчик события ContextMenu

        {

            alert("Context
 Menu is pressed");

        }

}

var CM = new ContMen("ContextMenu event example");

var b1 = new PP.Ui.Button({

         Content: "Button",

         OnContextMenu: CM.onContMen});

b1.addToNode("btn1");

b1.setDraggable(true);

</script>


После выполнения примера при вызове контекстного меню компонента будет
 выдаваться сообщение «Context Menu is pressed».


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
