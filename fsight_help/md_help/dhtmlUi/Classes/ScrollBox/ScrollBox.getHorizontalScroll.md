# ScrollBox.getHorizontalScroll

ScrollBox.getHorizontalScroll
-


# ScrollBox.getHorizontalScroll


## Синтаксис


getHorizontalScroll();


## Описание


Метод getHorizontalScroll возвращает горизонтальную полосу прокрутки компонента [ScrollBox](../../Components/ScrollBox/ScrollBox.htm).


## Пример


Для выполнения примера в теге HEAD должны быть добавлены ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Добавим на html-страницу область с полосами прокрутки.


<body>
<!--Размещаем компонент ScrollBox и указываем его параметры-->
<div id="scrollholder1" style="top: 10px; left: 10px; position: absolute;
        width: 250px; height: 350px; overflow:auto; margin-right: 50px;">
<!--Размещаем внутри компонента ScrollBox область с текстом, указываем ее размеры-->
        <div style='width: 300px; height: 700px'>
            <b>ScrollBox in DIV</b>
                  </div>
        </div>
    <script type="text/javascript">
        var ScrBox= new PP.Ui.ScrollBox({
            ParentNode: document.body,
            Content: document.getElementById("scrollholder1"),
            Width: 258,
            Height: 355
        });
        ScrBox.getHorizontalScroll().setDraggerMinSize(20);
        ScrBox.getVerticalScroll().setDraggerMinSize(20);
        ScrBox.scrollTo(1, 1);
</script>
</body>

После выполнения примера на html-странице будет размещена область с текстом - содержимое тега div с размерами, значительно превышающими размеры полос прокрутки. Поэтому бегунки полос прокрутки примут минимальный установленный размер - 20 пикселей. С помощью метода [scrollTo](ScrollBox.scrollTo.htm) бегунки полос прокрутки будут смещены на 1.


См. также:


[ScrollBox](ScrollBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
