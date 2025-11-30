# Пример создания компонента AboutBox

Пример создания компонента AboutBox
-


# Пример создания компонента AboutBox


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания компонента [AboutBox](AboutBox.htm):


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>AboutBox</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <script src="../build/PP.Metabase.js" type="text/javascript"></script>
    <script src="../build/PP.App.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.App.css" rel="stylesheet" type="text/css" />
    <script src="../resources/App.resources.ru.js" type="text/javascript"></script>

    <script type="text/javascript">
        function createAboutBox() {
            settings = {
                CaptionIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+klEQVR4nGP8//8/AwboWvi2c+EbTHEGBgYmklQzMDAw/EcFnQveCDneEHK80bHgDZoURBzFBrjZZfEi5fHCBJwEV10aJ4xLNUIDXHV+pFBFgghODzAwMP7//x+PL9/uU4ezhZ1uMjAwMBEIExiYt+kDwgasKiDmQWyYs+FD+aSXDAwMZfEiLATNnrj8XdPs1wywoEMK1jcfGbzqGZwqkVVPWIaimgElpiduYvjxi4GLHVlD8xwU1QwMDDAnHb3GcPQag7UWQ64vmpPQI/H/////v//8nzPt/5GrmAkBM4Ew/P////+Dl/+//sBMOZiqYRqwAayq////DwC9swIJSQ+GqgAAAABJRU5ErkJggg==",
                ContactInfo: new PP.Application.ContactInfo({
                    MailAddress: "support@fsight.ru",
                    Site: "www.fsight.ru"
                }),
                LogoUrl: "data:image/png;base64,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",
                ResourceKey: "AboutBox",
                ServiceVersion: "Релиз 10.9.13.0",
                Version: "10.9.13.0",
                ComponentsVersion: [
                    {
                        Name: "Алгоритмы расчёта",
                        Version: "1.180.665"
                    }, {
                        Name: "Бизнес-процессы",
                        Version:"1.180.813"
                    }, {
                        Name: "Формы ввода",
                        Version:"1.180.664"
                    }
                ],
                AnnouncementUrl: "http://localhost/FP_App_v10.x/app/announcement/announcement.html",
                Copyright: "ООО ''ФОРСАЙТ'', 2018"
            };
            // Создадим компонент
            about = new PP.Application.AboutBox(settings);
            // Отобразим диалог «О программе»
            about.show();
        }
    </script>
</head>
<body onload="createAboutBox()">
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 [AboutBox](AboutBox.htm) в виде окна «О
 программе»:


![](../../Classes/Application/AboutBox/AboutBox.png)


См. также:


[AboutBox](AboutBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
