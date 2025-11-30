# Конструктор Dialog

Конструктор Dialog
-


# Конструктор Dialog


## Синтаксис


PP.Ui.Dialog(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор Dialog создает экземпляр
 класса [Dialog](Dialog.htm).


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и визуальные
 стили PP.css. На html-странице должен содержаться элемент div с идентификатором
 «but». Далее приведен javascript-код, при помощи которого создается кнопка,
 при нажатии на которую раскрывается диалог:


<script type="text/javascript">


    var dialog = new PP.Ui.Dialog();


    dialog.setHeight(150);


    dialog.setWidth(250);


    dialog.setContent("New
 dialog");


    dialog._OkButton.setContent("OK");


    dialog._CancelButton.setContent("Cancel");


    var but = new PP.Ui.Button({
 ParentNode: document.getElementById("but"), Content: "Open
 dialog" });


    but.Click.add(function (sender,
 args) { dialog.show(10, 10)})


</script>


После выполнения примера при нажатии на кнопку «Open dialog», будет
 открыт следующий диалог:


![](Dialog1.gif)


См. также:


[Dialog](Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
