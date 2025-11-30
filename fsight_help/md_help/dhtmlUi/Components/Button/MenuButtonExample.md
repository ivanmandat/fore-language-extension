# Пример создания кнопки с раскрывающимся меню

Пример создания кнопки с раскрывающимся меню
-


# Пример создания кнопки с раскрывающимся меню


Для выполнения примера добавьте ссылки на библиотеку PP.js и таблицу визуальных стилей PP.css. Далее приведен текст javascript-кода, с помощью которого создается кнопка с наименованием «Menu»:


<script type="text/javascript">


var menu = new PP.Ui.Menu();//Создаем компонент Menu


//Добавляем элементы меню и разделители:


menu.addItem("<b>First</b>");


menu.addItem(new PP.Ui.Separator());


menu.addItem("<b>Second</b>");


menu.addItem(new PP.Separator());


menu.addItem("<b>Third</b>");


var b1 = new PP.Ui.Button({


ParentNode: document.getElementById("MyButton"),


Content: "Menu",


Menu: menu //Устанавливаем дочернее меню компонента Button


});


</script>


После выполнения примера на html-странице будет размещен компонент Button, имеющий следующий вид:


![](ex3.gif)


При нажатии на кнопку будет раскрыто меню, состоящее из трех элементов:


![](ex3_2.gif)


См. также:


[Button](Button.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
