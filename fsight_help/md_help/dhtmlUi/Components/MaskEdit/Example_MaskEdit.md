# Пример создания компонента MaskEdit

Пример создания компонента MaskEdit
-


# Пример создания компонента MaskEdit


Для выполнения примера подключите к html-странице ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим редакторы, предназначенные для ввода различных видов данных.


<body>


Маска даты:


<div id = "ME1"></div>


Маска времени:


<div id = "ME2"></div>


Маска даты и времени:


<div id = "ME3"></div>


Маска IP-адреса:


<div id = "ME4"></div>


Маска для ввода цены в рублях:


<div id = "ME5"></div>


Маска для ввода номера телефона:


<div id = "ME6"></div>


<script  type="text/javascript">


    var MEdate = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода даты:


            ParentNode: document.getElementById("ME1"),//Идентификатор, который содержится в теге div


            Mask: "__.__.____",//Маска


            RegExpContent: "^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\\.(0[1-9]|1[0-2])\\.(19\\d+|20\\d+)$"//Регулярное выражение


        });


        MEdate.setWidth("170px");


        MEdate.setValue("10.10.2010");//Значение редактора


    var MEtime = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода времени:


            ParentNode: document.getElementById("ME2"),


            Mask: "__:__",


            RegExpContent: "^(0\\d|1\\d|2[0-3]):([0-5]\\d)$"


        });


        MEtime.setWidth("170px");


        MEtime.setValue("10:10");


    var MEdatetime = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода даты и времени:


            ParentNode: document.getElementById("ME3"),


            Mask: "__.__.____ __:__",


            RegExpContent: "^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\\.(0[1-9]|1[0-2])\\.(19\\d+|20\\d+) (0\\d|1\\d|2[0-3]):([0-5]\\d)$"


        });


        MEdatetime.setWidth("170px");


        MEdatetime.setValue("10.10.2010 10:10");


    var MEip = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода ip-адреса:


            ParentNode: document.getElementById("ME4"),


            Mask: "___.___.___.___",


            RegExpContent: "^(0\\d+|1\\d+|2[0-4]\\d|25[0-5])\\.(0\\d+|1\\d+|2[0-4]\\d|25[0-5])\\.(0\\d+|1\\d+|2[0-4]\\d|25[0-5])\\.(0\\d+|1\\d+|2[0-4]\\d|25[0-5])$"


        });


        MEip.setWidth("170px");


        MEip.setValue("192.168.250.250");


    var MErub = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода цены в рублях:


            ParentNode: document.getElementById("ME5"),


            Mask: "_*,__р.",


            RegExpContent: "^(\\d+)\\,(\\d+).\\.$"


        });


        MErub.setWidth("170px");


        MErub.setValue("234,05р.");


    var MEphone = new PP.Ui.MaskEdit({//Создаем редактор маски для ввода номера телефона:


            ParentNode: document.getElementById("ME6"),


            Mask: "Телефон _-___-__-_____",


            RegExpContent: "^.......\\s(\\d{1})\\-(\\d+)\\-(\\d+)\\-(\\d+)$"


        });


        MEphone.setWidth("170px");


        MEphone.setValue("Телефон 8-902-47-12345");


</script>


</body>


После выполнения примера на html-странице будут размещены редакторы с шаблонами для ввода даты, времени, даты и времени, ip-адреса, цены в рублях и номера телефона c установленными значениями. Если попробовать ввести в редактор значение, не соответствующее регулярному выражению, то загорится индикатор некорректного ввода:


![](MaskEdit1.gif)


См. также:


[MaskEdit](MaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
