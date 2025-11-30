# Пример создания компонента DiscussMenu

Пример создания компонента DiscussMenu
-


# Пример создания компонента DiscussMenu


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Metabase.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, resources.ru.js.


Предполагается наличие в корневой папке проекта папки с изображениями
 «img» и папки с ресурсами «resources».


2. Далее в теге <head> необходимо добавить сценарий, который создает
 компонент [DiscussMenu](DiscussMenu.htm):


<script type="text/javascript">
    var onReady = function () {
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим региональные настройки для русского языка
        PP.setCurrentCulture(PP.setCurrentCulture(PP.Cultures.ru));
        // Создадим меню «Поделиться»
        var shareMenu = new PP.Ui.DiscussMenu({
            ImagePath: "../img/", // Путь до папки с картинками
            BeforeDiscuss: function (sender, args) // Событие, генерируемое при выборе пункта меню
            {
                alert("Перед переходом на " + args.ShareType)
            },
            Discuss: function (sender, args) // Событие, генерируемое после выбора пункта меню
            {
                alert("После перехода на " + args.ShareType)
            }
        }    );
        // Добавим кнопку для вызова меню «Поделиться»
        var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Content: "Поделиться",
            Menu: shareMenu,

        })
        // Добавим кнопку для изменения параметров пунктов меню «Поделиться»
        var btn = new PP.Ui.Button(    {
            ParentNode: document.getElementById("btn2"),
            Content: "Изменить пункты меню",
            Click: function ()         {
                shareMenu.getLinkedInItem().setIsHovered(true); // Пункт «LinkedIn» выделен как при наведении мыши
                shareMenu.getFacebookItem().setEnabled(false); // Пункт «Facebook» неактивен
                shareMenu.getTwitterItem().setIsVisible(false); // Пункт «Twitter» скрыт
                shareMenu.getLiveJournalItem().setIsVisible(false); // Пункт «LiveJournal» скрыт
            }
        })
    }
</script>
3. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания компонента и добавить два элемента <div>
 с идентификаторами «btn1» и «btn2»:


<body onload="onReady()">
    <div id="btn1"></div>
    <div id="btn2"></div>
</body>
После выполнения примера на странице будут размещены кнопки «Поделиться»
 и «Изменить пункты меню». При нажатии на первую будет раскрыто меню:


![](DiscussMenu.gif)


При нажатии на пункт меню будет выдаваться сообщение «Перед переходом
 на <название социальной сети>». Далее будет осуществляться переход
 на сайт выбранной социальной сети, при этом на экран будет выведено сообщение
 «После перехода на <название социальной сети>».


При нажатии на кнопку «Изменить пункты меню» пункт «LinkedIn», будет
 выделен при наведении мыши, пункт «Facebook» будет неактивен, пункты «Twitter»
 и «LiveJournal» будут скрыты (Компания
 Meta Platforms Inc., владеющая социальной сетью Facebook, признана экстремистской
 организацией, её деятельность на территории России запрещена).


См. также:


[DiscussMenu](DiscussMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
