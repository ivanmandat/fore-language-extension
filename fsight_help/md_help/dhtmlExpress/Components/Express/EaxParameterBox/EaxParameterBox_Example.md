# Пример создания компонента EaxParameterBox

Пример создания компонента EaxParameterBox
-


# Пример создания компонента EaxParameterBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js
 и resources.ru.js.


2. Затем в теге <head> дополнительно задаётся стиль для элементов:


<style type="text/css">
body, html
{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>

3. Далее в теге <head> необходимо добавить скрипт, создающий контейнер
 для параметра экспресс-отчета [EaxParameterBox](../../../Classes/Express/EaxParameterBox/EaxParameterBox.htm),
 при этом источник данных экспресс-отчета должен содержать параметр INTPARAM:


<script type="text/javascript">
PP.setCurrentCulture(PP.Cultures.ru);
var metabase, eaxDocument, eaxMbService, settings,
examplePar, button, checkBox, idChanger;
function Ready()
{
    // Создаём соединение с репозиторием
    metabase = new PP.Mb.Metabase(
    {
        ExportUrl: "PPService.axd?action=export",
        ImportUrl: "PPService.axd?action=import",
        PPServiceUrl: "PPService.axd?action=proxy",
        Id: "WAREHOUSE",
        UserCreds: { UserName: "user", Password: "password" }
    });
    // Открываем соединение с репозиторием
    metabase.open();
    // Создаём сервис для работы с экспресс-отчётами
    eaxMbService = new PP.Exp.EaxMdService({
        Metabase: metabase,
        EaxOpened: PP.Delegate(Opened, this)
    });
    // Открываем экспресс-отчет с ключом 108 на редактирование
    eaxDocument = eaxMbService.editDocument(108);
};
// Обработчик события EaxOpened у класса EaxMdService
function Opened(sender, args)
{
    // Создаём контейнер для параметра экспресс-отчета
    examplePar = new PP.Exp.Ui.EaxParameterBox({
        ParentNode: "EaxParam",
        ParamId: "INTPARAM", // Идентификатор параметра
        Width: 300,
        Source: eaxDocument, // Источник данных
        Service: eaxMbService // Сервис
    });
    // Создаём кнопку для сохранения измененных данных параметра
    button = new PP.Ui.Button({
    ParentNode: "ApplyButton",
    Content: "Apply parameter",
    Height: 30,
    Click: function (){
        examplePar.applyParameter();
    }
});
// Создаём элемент управления типа «флажок»
checkBox = new PP.Ui.CheckBox({
    ParentNode: "LabelCheckBox",
    Content: "With label",
    CheckedChanged: function ()
    {
        examplePar.setShowParamLabel(checkBox.getChecked());
    }
});
// Создаем раскрывающийся список с параметрами
idChanger = new PP.Ui.ComboBox({
    ParentNode: "IdChanger",
    Width: 300,
    ListBox: {
        ItemSelected: function (sender, args)
        {
            examplePar.setParamId(args.ListItem.getContent());
        }
    }
});
// Заполняем раскрывающийся список идентификаторами параметров
for (var i = 0; i < eaxDocument.getParams().length; i++)
{
    idChanger.addItem(eaxDocument.getParams()[i].getId());
}
    idChanger.getListBox().setSelectedIndex(2);
}
</script>

4. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции для создания контейнера для параметра экспресс-отчета, а также
 размещаем блоки с идентификаторами «IdChanger», «EaxParam», «ApplyButton»,
 «LabelCheckBox»:


<body onselectstart="return false" onload="Ready()">
    <div id="IdChanger"></div>
    <div id="EaxParam" style="display: block;"></div>
    <div id="ApplyButton"></div>
    <div id="LabelCheckBox"></div>
</body>

5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещён контейнер для
 параметра экспресс-отчета (компонент [EaxParameterBox](EaxParameterBox.htm)),
 кнопка для сохранения измененных данных параметра (компонент [Button](dhtmlUi.chm::/Classes/Button/Button.htm)),
 элемент управления типа «флажок» для включения и выключения подписи у
 параметра (компонент [CheckBox](dhtmlUi.chm::/Classes/CheckBox/CheckBox.htm))
 и раскрывающийся список для выбора параметра экспресс-отчета (компонент
 [ComboBox](dhtmlUi.chm::/Classes/ComboBox/ComboBox.htm)):


![](EaxParameterBox_Example.png)


См. также:


[EaxParameterBox](EaxParameterBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
