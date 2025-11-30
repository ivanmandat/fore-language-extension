# NavigationItem.Toggling

NavigationItem.Toggling
-


# NavigationItem.Toggling


## Синтаксис


Toggling: function(sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие Toggling наступает при
 разворачивании и сворачивании вкладки.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим [панель
 навигации](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB», включающую в себя две вкладки. Добавим
 обработчик события Toggling:


<script type="text/javascript">


    var NB = new PP.Ui.NavigationBar({


        ParentNode:
 document.getElementById("NB1"),


        Width:
 200,


        ShowBorders:
 true


    });


    NB.addItem(new PP.Ui.NavigationItem({
 Content: "1", Title: "1" }));


    NB.addItem(new PP.Ui.NavigationItem({
 Content: "2", Title: "2" }));


    NB.getItem(0).Toggling.add(function
 (sender, args) {//обработчик события Toggling:


        NB.getItem(1).setEnabled(false);


    });


</script>


После выполнения примера при разворачивании панели первой вкладки, вторая
 вкладка [становится
 недоступной](dhtmlUi.chm::/Classes/control/control.enabled.htm) для пользователя.


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
