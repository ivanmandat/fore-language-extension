# NavigationBar.getItems

NavigationBar.getItems
-


# NavigationBar.getItems


## Синтаксис


getItems ();


## Описание


Метод getItems возвращает вкладки панели навигации.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим [панель навигации](../../Components/NavigationBar/NavigationBar.htm) с наименованием «navPanel», включающую в себя четыре вкладки.


<script type="text/javascript">


var navPanel = new PP.Ui.NavigationBar({


    Width: 474,


    Height: 304,


    ParentNode: document.getElementById("example"),


    Items: [{ Title: "1" },


            { Title: "2" },


            { Title: "3" },


            { Title: "4"}] });


    alert("Заголовок 2й вкладки: " + navPanel.getItems()[1].getTitle());


    navPanel.getItems()[1].setTitle("New_2");


    alert("Новый заголовок 2й вкладки: " + navPanel.getItems()[1].getTitle());


    navPanel.getItems()[0].setContent("Content_For_1");


</script>


После выполнения примера на html-странице будет размещен компонент [NavigationBar](../../Components/NavigationBar/NavigationBar.htm), состоящий из четырех вкладок. На экран будет выведено сообщение с заголовком второй вкладки, а затем с новым заголовком второй вкладки.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
