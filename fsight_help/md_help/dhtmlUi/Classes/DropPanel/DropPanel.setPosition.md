# DropPanel.setPosition

DropPanel.setPosition
-


# DropPanel.setPosition


## Синтаксис


setPosition (left, top);


## Параметры


left. Левая координата компонента;


top. Верхняя координата компонента.


## Описание


Метод setPosition устанавливает позицию раскравющейся панели.


## Комментарии


Метод актуален, если для метода [DropPanel.show](DropPanel.show.htm) не заданы параметры left и top.


## Пример


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных стилей PP.css. На html-странице разместим кнопку, при нажатии на которую раскрывается панель:


<div id = "btn1"></div>


<script type="text/javascript">


var DP = new PP.Ui.DropPanel({


    ParentNode: document.getElementById("DP1"),


    Width: 200,


    Height: 300})


function ShowPanel() {


    DP.show(0,0);


    DP.setPosition(200, 200);}


var btn = new PP.Ui.Button({


    ParentNode: document.getElementById("btn1"),


    Click: ShowPanel,


    Content: "Открыть"})


</script>


После выполнения примера при нажатии на кнопку будет раскрыта панель. Панель будет располагаться на расстоянии 200 пикселей от левого и верхнего края страницы.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
