# NavigationItem.Toggled

NavigationItem.Toggled
-


# NavigationItem.Toggled


## Синтаксис


Toggled: function(sender,args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Toggled наступает по окончании разворачивания/сворачивания вкладки.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим [панель навигации](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB», включающую в себя две вкладки. Добавим обработчик события Toggled.


<script type="text/javascript">


    var NB = new PP.Ui.NavigationBar({


        ParentNode: document.getElementById("NB1"),


        Width: 200,


        ShowBorders: true


    });


    NB.addItem(new PP.Ui.NavigationItem({ Content: "1", Title: "1" }));


    NB.addItem(new PP.Ui.NavigationItem({ Content: "2", Title: "2" }));


    NB.getItem(0).Toggled.add(function (sender, args) {//обработчик события Toggled


        NB.getItem(1).dispose();


    });


</script>


После выполнения примера на html-странице будет размещена панель навигации с двумя вкладками. При нажатии на заголовок первой вкладки разворачивается панель. После разворачивания панели вторая вкладка [будет удалена](../Object/Object.dispose.htm).


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
