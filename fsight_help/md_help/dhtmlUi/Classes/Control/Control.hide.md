# Control.hide

Control.hide
-


# Control.hide


## Синтаксис


hide();


## Описание


Метод hide скрывает элемент
 управления.


## Пример


Для выполнения примера необходимо подключить к HTML-странице библиотеку
 PP.js и таблицу визуальных стилей PP.css.


Создадим три кнопки: экземпляр класса [Button](../Button/Button.htm)
 c наименованием «MyButton» и HTML-кнопки с наименованиями «Показать» и
 «Скрыть», при нажатии на которые будет скрывться и отображаться первая
 кнопка.


<div id = "btn1"></div>

<br/>

<button onclick = "b1.hide();">Скрыть</button>

<button onclick = "b1.show();">Показать</button>

<script type="text/javascript">

      var b1 = new PP.Ui.Button({

          ParentNode:
 document.getElementById("btn1"),

          Content: "Выбрать"})

</script>


После выполнения примера при нажатии на кнопку «Скрыть» кнопка «MyButton»
 будет скрыта, а при нажатии на кнопку «Показать» - отобразится.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
