# ListBox.filterByText

ListBox.filterByText
-


# ListBox.filterByText


## Синтаксис


filterByText (value: String);


## Параметры


value. Строка, по которой осуществляется фильтрация.


## Описание


Метод filterByText осуществляет фильтрацию элементов списка по строке.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим список с наименование «LB». Для осуществления фильтрации по строке создадим поле для ввода текста с идентификатором «Text1» и кнопку для вызова метода filterByText с идентификатором «Button2»:


<input type="text" id="Text1" />


<input type="button" id="Button2" value="Фильтровать" onclick="Filter();" />


<div id="LB"></div>


<script type="text/javascript">


    var LB = new PP.Ui.ListBox({


            ParentNode: document.getElementById("LB"),


            Items: [{ Content: "False" },


                { Content: "True" },


                { Content: "Денежный" },


                { Content: "Финансовый" },


                { Content: "Краткий формат даты" },


                { Content: "Длинный формат даты" }],


            Width: 200


        });


        function Filter()//Функция, осуществляющая фильтрацию элементов списка по строке


    {


        LB.filterByText(document.getElementById("Text1").value);


    }


</script>


После выполнения примера на html-странице будет размещен список строк, поле для ввода текста и кнопка для осуществления фильтрации. Введите в поле ввода текст, нажмите на кнопку «Фильтровать». В списке будут выведены элементы, содержащие введенный текст:


![](../../Components/ListBox/ListBox2.gif)


См. также:


[ListBox](ListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
