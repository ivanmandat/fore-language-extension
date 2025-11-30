# Пример создания компонента MonthCalendar

Пример создания компонента MonthCalendar
-


# Пример создания компонента MonthCalendar


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания компонента MonthCalendar используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>MonthCalendar</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <script src="../resources/PP.resources.ru.js" type="text/javascript"></script>

    <script text="text/javascript">
        function Ready() {
            var MC = new PP.Ui.MonthCalendar({
                ParentNode: document.getElementById("example"),
                ShowTime: true
            });
        };
    </script>
</head>
<body onload="Ready()">
    <div id="example"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 [MonthCalendar](MonthCalendar.htm) в виде календаря:


![](MonthCalendar1.png)


См. также:


[MonthCalendar](MonthCalendar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
