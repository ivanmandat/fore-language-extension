# Конструктор TextEditor

Конструктор TextEditor
-


# Конструктор TextEditor


## Синтаксис


TextEditor(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор TextEditor создает
 экземпляр компонента [TextEditor](../../Components/TextEditor/TextEditor.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы PP.js, resources.ru.js и файл стилей PP.css. В теге <body>
 разместим блок с идентификатором «textEditorContainer» для хранения созданного
 компонента:


<div id="textEditorContainer" style="float:left;border: #CCCCCC 1px solid; padding: 5px; margin: 5px;"></div>
Далее в теге <body> необходимо добавить сценарий, создающий текстовый
 редактор:


<script type="text/javascript">
    // Зададим путь к папке с ресурсами
    PP.resourceManager.setRootResourcesFolder("../resources/");
    PP.setCurrentCulture(PP.Cultures.ru); // Выбор языковых настроек
    // Создадим экземпляр текстового редактора
    var textEditor = new PP.Ui.TextEditor({
        ImagePath: "build/img/",
        ParentNode: document.getElementById("textEditorContainer"),
        // Содержимое текстового редактора
        Content: "Введите текст",
        // Разрешим изменять размеры текстового редактора
        EnableResize: true,
        // Высота текстовой области
        TextAreaHeight: 100
    });
</script>
После выполнения примера на странице будет размещен компонент [TextEditor](../../Components/TextEditor/TextEditor.htm),
 имеющий следующий вид:


![](TextEditor.png)


См. также:


[TextEditor](TextEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
