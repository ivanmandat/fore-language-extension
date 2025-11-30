# Object.dispose

Object.dispose
-


# Object.dispose


## Синтаксис


dispose();


## Описание


Метод dispose уничтожает компонент.


## Пример


Для выполнения примера необходимо подключить к html-странице библиотеку
 PP.js и таблицу визуальных стилей PP.css.


Создадим две кнопки: экземпляр класса Button c наименованием «MyButton»
 и html-кнопку с наименованием «Удалить», при нажатии на которую будет
 удалена первая кнопка.


<button onclick = "b1.dispose();">Удалить</button>


<script type="text/javascript">


      var b1 = new
 PP.Ui.Button({


          ParentNode:
 document.getElementById("btn1"),


          Content:
 "MyButton"})


</script>


После выполнения примера при нажатии на кнопку «Удалить» кнопка «MyButton»
 будет уничтожена.


См. также:


[Object](Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
