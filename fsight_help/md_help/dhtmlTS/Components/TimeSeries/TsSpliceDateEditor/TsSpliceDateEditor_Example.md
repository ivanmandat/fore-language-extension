# Пример создания компонента TsSpliceDateEditor

Пример создания компонента TsSpliceDateEditor
-


# Пример создания компонента TsSpliceDateEditor


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css, PP.Metabase.css.


Также нужно добавить ссылки на js-файлы: jquery.js, PP.js, PP.Metabase.js,PP.Express.js,
 PP.TS.js и resources.ru.js.


2. Далее в теге <head> необходимо добавить скрипт, создающий компонент
 [TsSpliceDateEditor](TsSpliceDateEditor.htm):


<script type="text/javascript">
    $(this).ready(function () {
        // Установим языковые настройки для ресурсов
        PP.resourceManager.setRootResourcesFolder("Resources/");
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        // Получим DOM-элемент блока, в котором расположим компонент
        var parentDiv = document.getElementById("parentDiv");
        // Создадим редактор даты
        var lnTransformPeriodEditor = new PP.Ui.TsSpliceDateEditor({
            ParentNode: parentDiv // Элемент, в котором размещаем компонент
        });
    });
</script>

3. В теге <body> размещаем блок с идентификатором «parentDiv»,
 в котором будет отображаться созданный компонент:


<body>
    <div id="parentDiv"></div>
</body>

В результате выполнения примера был создан и отображён компонент TsSpliceDateEditor:


![](TsSpliceDateEditor1.png)


4. Для того чтобы раскрыть данный компонент, выполните в консоли браузера
 следующий сценарий:


// Получим вложенный редактор даты и времени
var dateTimePicker = spliceDateEditor._SpliceDatePicker;
// Раскроем данный редактор
dateTimePicker.showDropPanel();
После запуска данного сценария редактор даты будет раскрыт:


![](TsSpliceDateEditor2.png)


См. также:


[TsSpliceDateEditor](TsSpliceDateEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
