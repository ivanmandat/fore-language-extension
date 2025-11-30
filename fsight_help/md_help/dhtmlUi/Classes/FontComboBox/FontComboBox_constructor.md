# Конструктор FontComboBox

Конструктор FontComboBox
-


# Конструктор FontComboBox


## Синтаксис


PP.Ui.FontComboBox (settings);


## Параметры


settings. JSON объект со значениями свойств компонента.


## Описание


Конструктор FontComboBox создает экземпляр компонента [FontComboBox](../../Components/FontComboBox/FontComboBox.htm).


## Пример


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания компонента [FontComboBox](../../Components/FontComboBox/FontComboBox.htm)
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>FontComboBox</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <script src="../resources/PP.resources.ru.js" type="text/javascript"></script>

    <script type="text/javascript">
        function createFontComboBox() {
            // Cоздадим компонент FontComboBox
            var fontCombo = new PP.Ui.FontComboBox({
                ParentNode: document.getElementById("fontCB"),
                Width: 200 });
        };
    </script>
</head>
<body onload="createFontComboBox()">
    <div id="fontCB"></div>
</body>
</html>


В результате выполнения примера на html-странице будет размещен компонент
 [FontComboBox](../../Components/FontComboBox/FontComboBox.htm):


![](../../Components/FontComboBox/FontComboBox1.gif)


См. также:


[FontComboBox](FontComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
