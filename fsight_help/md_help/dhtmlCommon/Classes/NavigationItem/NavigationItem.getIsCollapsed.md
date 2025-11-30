# NavigationItem.getIsCollapsed

NavigationItem.getIsCollapsed
-


# NavigationItem.getIsCollapsed


## Синтаксис


getIsCollapsed ();


## Описание


Метод getIsCollapsed возвращает признак того, что панель закрыта.


## Комментарии


Если панель закрыта, возвращается значение true, иначе - false.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создайте компонент [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB», включающий в себя две вкладки. С помощью метода [expand](NavigationItem.expand.htm) развернем вкладку.


<script type="text/javascript">


    var NB = new PP.Ui.NavigationBar({


        ParentNode: document.getElementById("NB1"),


        Width: 200,


        ShowBorders: true


    });


    NB.addItem(new PP.Ui.NavigationItem({ Content: "1", Title: "1" }));


    NB.addItem(new PP.Ui.NavigationItem({ Content: "2", Title: "2" }));


    NB.getItem(0).expand();


    var a = NB.getItem(0).getIsCollapsed();


        if (a === false)


            alert("Панель развернута");


</script>


После выполнения примера на html-странице будет размещена панель навигации, первая вкладка которой будет развернута. На экран будет выведено сообщение «Панель развернута».


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
