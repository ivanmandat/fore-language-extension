# DateTimePicker.DropHeight

DateTimePicker.DropHeight
-


# DateTimePicker.DropHeight


## Синтаксис


setDropHeight(value);


## Параметры


value. Высота области, на которой расположена раскрывающаяся панель.


## Описание


Свойство DropHeight устанавливает высоту области, на которой расположена раскрывающаяся панель.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Разместим на html-странице компонент [DateTimePicker](DateTimePicker.htm) и два редактора числовых значений, реализованных компонентом NumberEdit. С помощью числовых редакторов будет устанавливаться ширина и высота раскрывающейся панели компонента [DateTimePicker](../../Components/DateTimePicker/DateTimePicker.htm).


<body>


Height:


<div id = "NE1"></div>


Width:


<div id = "NE2"></div>


<div id = "DTP1"></div>


</body>


<script type="text/javascript">


    var DTP = new PP.Ui.DateTimePicker({//Создаем редактор даты и времени.


       ParentNode: document.getElementById("DTP1")})


    var NE = new PP.Ui.NumberEdit({//Создаем числовой редактор.


       ParentNode: document.getElementById("NE1"),


       Width: 50})


    NE.AfterValueChange.add(function (sender, args)//Добавляем обработчик события AfterValueChange.


    {


       DTP.setDropHeight(NE.getValue());//Для раскрывающейcя панели задаем высоту, соответствующую //значению числового редактора.


    })


    var NE2 = new PP.Ui.NumberEdit({//Создаем числовой редактор.


       ParentNode: document.getElementById("NE2"),


       Width: 50})


    NE2.AfterValueChange.add(function (sender, args)//Добавляем обработчик события AfterValueChange.


    {


       DTP.setDropWidth(NE2.getValue());Для раскрывающейcя панели задаем ширину, соответствующую //значению числового редактора.


    })


</script>


После выполнения примера на html-стрнице будут размещены числовые редакторы, с помощью которых можно изменять размеры расккрывающейся части редактора даты времени.


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
