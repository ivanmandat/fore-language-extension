# Пример создания компонента GradientSlider

Пример создания компонента GradientSlider
-


# Пример создания компонента GradientSlider


Для выполнения примера необходимо создать html-страницу и выполнить следующие действия:


1. Добавить ссылку на файлы PP.css, PP.js и resources.ru.js.


2. Внутри тега <body> разместить блок с идентификатором «slider»:


<div id="slider"></div>


3. Далее на страницу внутри тега <body> необходимо добавить сценарий, который создаёт элемент управления для выбора значения с градиентной заливкой с помощью перемещения бегунков:


<script type="text/javascript">
    // Укажем путь к корневой папке, содержащей файлы ресурсов
    PP.resourceManager.setRootResourcesFolder("../resources/");
    // Установим языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru);
    var slider = new PP.Ui.GradientSlider({
        ParentNode: document.getElementById("slider"), // Родительский контейнер
        // Бегунки
        Items: [{
                Value: 0.25,
                Color: "#FFFFFF"
            }, {
                Value: 0.75,
                Color: "#FF0000"
            }
        ],
        Ticks: ["2001"], // Метки
        Width: 500, // Ширина элемента
        ShowButtons: true // Признак отображения кнопок добавления и удаления бегунков
    });
</script>

В результате выполнения примера на html-странице будет размещен элемент управления для выбора значения с помощью перемещения бегунка с градиентной заливкой:


![](GradientSlider_1.png)


См. также:


[GradientSlider](GradientSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
