# Control.ContextMenu

Control.ContextMenu
-


# Control.ContextMenu


## Синтаксис


ContextMenu: [PP.Ui.Menu](../Menu/Menu.htm);


## Описание


Свойство ContextMenu определяет
 контекстное меню для компонента.


## Пример


Для выполнения примера подключите к HTML-странице ссылки на библиотеку
 PP.js и таблицу визуальных стилей PP.css. Далее приведен javascript-код,
 при помощи которого на HTML-странице будет размещена [кнопка](../../Components/Button/Button.htm).


<script type="text/javascript">

var CMenu = new PP.Ui.Menu();//Создаем меню,
 состоящее из двух элементов

      CMenu.addItem("Открыть");

      CMenu.addItem("Закрыть");

var b1 = new PP.Ui.Button({//Создаем экземпляр
 класса Button

      ParentNode: document.getElementById("b1"),

      Content: "Выбрать",

      ContextMenu: CMenu })//Устанавливаем
 контекстное меню для кнопки

</script>


После выполнения примера на HTML-странице будет размещена кнопка с надписью
 «Выбрать». При нажатии на кнопку правой кнопкой мыши будет вызвано контекстное
 меню, имеющее следующий вид:


![](ContextMenu.gif)


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
