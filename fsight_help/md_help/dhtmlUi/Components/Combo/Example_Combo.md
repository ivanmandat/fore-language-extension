# Пример создания компонента Combo

Пример создания компонента Combo
-


# Пример создания компонента Combo


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css.


Далее приведен javascript-код, необходимый для создания экземпляра компонента Combo.


<script type="text/javascript">


    var Combo = new PP.Ui.Combo({//Создаем экземпляр компонента Combo.


        ParentNode: document.getElementById("Combo1"),


        EnableEdit: true,


        Width: 100});


    var DropPanel = Combo.getDropPanel();//Возвращаем раскрывающуюся часть компонента.


        DropPanel.setContent("Введите текст");


        DropPanel.setHeight("100");


</script>


После выполнения примера на html-странице будет размещен компонент [Combo](Combo.htm). При нажатии на кнопку вызова раскрывающейся панели компонент примет следующий вид:


![](Combo1.gif)


Поскольку для свойства [EnableEdit](../../Classes/Combo/Combo.EnableEdit.htm) установлено значение true, в строке ввода может быть введен текст:


![](Combo2.gif)


См. также:


[Combo](Combo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
