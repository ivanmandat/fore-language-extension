# Control.addStateClass

Control.addStateClass
-


# Control.addStateClass


## Синтаксис


addStateClass(value);


## Параметры


value. Имя
 CSS-класса.


## Описание


Метод addClass добавляет CSS-класс
 к компоненту и удаляет прежний CSS-класс.


## Пример


Для выполнения примера необходимо наличие на HTML-странице ссылок на
 файлы PP.css, PP.js и jquery.js. Добавим на страницу компонент [TextArea](../../Components/TextArea/TextArea.htm) и установим для него отступы,
 новый вид границы и цвет заливки:


     textArea = new PP.Ui.TextArea({
        ParentNode: document.body,
        Content: "Text"
     })
      textArea.addStateClass("newStyle")
      // Зададим стили для данного класса
      $("div.newStyle").css("margin", "20px");
      $("div.newStyle").css("border", "1px dashed");
      $("div.newStyle").css("background-color", "#FFF8DC")
      console.log("Цвет фона: " + textArea.getCssStyle(textArea.getDomNode(), "background-color"));

После выполнения примера на странице будет размещен компонент [TextArea](../../Components/TextArea/TextArea.htm), имеющий следующий вид:


![](addStateClass.gif)


В консоли браузера будет выведен цвет фона в формате RGB:


Цвет фона: rgb(255, 248, 220)


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
