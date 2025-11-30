# Пример создания компонента CheckBox

Пример создания компонента CheckBox
-


# Пример создания компонента CheckBox


Для выполнения примера в теге HEAD html-страницы добавьте ссылки на
 следующие js и css-файлы:


	- PP.js;


	- PP.css.


В теге SCRIPT добавьте скрипт для создания компонента [CheckBox](CheckBox.htm):


<script type="text/javascript">
    //Создаем список для выбора нескольких возможных вариантов ответа:
    function onLoad() {
        var checkbox1 = new PP.Ui.CheckBox({
                ParentNode: document.getElementById("CB1"),
                Content: "10"
            });
        var checkbox2 = new PP.Ui.CheckBox({
                ParentNode: document.getElementById("CB2"),
                Content: "12"
            });
        var checkbox3 = new PP.Ui.CheckBox({
                ParentNode: document.getElementById("CB3"),
                Content: "14"
            });
        var checkbox4 = new PP.Ui.CheckBox({
                ParentNode: document.getElementById("CB4"),
                Content: "16"
            });
        //Создаем кнопку, которая будет проверять правильность ответов:
        var button = new PP.Ui.Button({ ParentNode: document.getElementById("btn"),
                Content: "Check"
            });
        //Добавляем обработчик события Click:
        button.Click.add(function(sender, args) {
            //Переменные, содержащие значение свойства CheckedState:
            var cb1 = checkbox1.getCheckedState();
            var cb2 = checkbox2.getCheckedState();
            var cb3 = checkbox3.getCheckedState();
            var cb4 = checkbox4.getCheckedState();
            if (cb1 == true && cb4 == true && cb2 == false && cb3 == false)
                alert("Correct!");
            else
                alert("Sorry! Try again!");
        });
    }
</script>
В теге BODY добавьте элементы с идентификаторами:


<body onload="onLoad()">
    Choose right variants:
    <div id = "CB1"></div>
    <div id = "CB2"></div>
    <div id = "CB3"></div>
    <div id = "CB4"></div>
    <div id = "btn"></div>
</body>
После выполнения примера на html-странице будут размещены экземпляры
 компонента CheckBox:


![](CheckBox1.gif)


Если отметить первый и последний варианты ответа, то на экран будет
 выведено сообщение «Correct» после нажатия на кнопку с надписью «Check»,
 иначе «Sorry! Try again!».


См. также:


[CheckBox](CheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
